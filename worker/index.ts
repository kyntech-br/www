import { EmailMessage } from "cloudflare:email"
import { Mailbox, createMimeMessage } from "mimetext"

interface Env {
	ASSETS: { fetch(request: Request): Promise<Response> }
	SEND_EMAIL: { send(message: EmailMessage): Promise<void> }
	CONTACT_RATE_LIMIT: { limit(options: { key: string }): Promise<{ success: boolean }> }
}

interface ContactBody {
	name?: string
	email?: string
	phone?: string
	idea?: string
	website?: string
}

const DESTINATION = "kyntech.ck@gmail.com"
const SENDER = "contato@kyntech.com.br"

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url)

		if (url.pathname === "/api/contato") {
			if (request.method !== "POST") return new Response("Method not allowed", { status: 405 })
			return handleContact(request, env)
		}

		return env.ASSETS.fetch(request)
	}
}

// Remove quebras de linha antes de qualquer valor entrar em header de e-mail (Subject, Reply-To).
const sanitize = (value: string): string => value.replace(/[\r\n]+/g, " ").trim()

async function handleContact(request: Request, env: Env): Promise<Response> {
	try {
		const ip = request.headers.get("CF-Connecting-IP") ?? "unknown"
		const { success: withinLimit } = await env.CONTACT_RATE_LIMIT.limit({ key: ip })

		if (!withinLimit) return Response.json({ success: false, error: "Muitas tentativas. Aguarde um minuto." }, { status: 429 })

		const payload = (await request.json()) as ContactBody

		// Honeypot: bot preenche, humano não vê o campo. Finge sucesso e descarta.
		if (payload.website) return Response.json({ success: true })

		const name = sanitize(payload.name ?? "")
		const email = sanitize(payload.email ?? "")
		const phone = sanitize(payload.phone ?? "")
		const idea = (payload.idea ?? "").trim()

		// Espelha o schema zod do cliente. Validação de browser é UX, não segurança.
		if (!name || name.length > 150) return Response.json({ success: false, error: "Nome inválido" }, { status: 400 })
		if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 150) return Response.json({ success: false, error: "Email inválido" }, { status: 400 })
		if (idea.length > 750) return Response.json({ success: false, error: "Texto muito longo" }, { status: 400 })

		const digits = phone.replace(/\D/g, "")
		const nationalDigits = digits.length > 11 && digits.startsWith("55") ? digits.slice(2) : digits
		const whatsapp = nationalDigits.length >= 10 ? `https://wa.me/55${nationalDigits}` : "não informado"

		const emailBody = [
			`Nome:     ${name}`,
			`Email:    ${email}`,
			`Telefone: ${phone || "não informado"}`,
			`WhatsApp: ${whatsapp}`,
			"",
			"Ideia:",
			idea || "(não preenchido)"
		].join("\n")

		const message = createMimeMessage()
		message.setSender({ name: "Site kyntech", addr: SENDER })
		message.setRecipient(DESTINATION)
		message.setSubject(`[Proposta] ${name}`)
		// Reply-To exige instância de Mailbox. Sem o name: o dump do mimetext não escapa aspas.
		message.setHeader("Reply-To", new Mailbox({ addr: email }))
		message.addMessage({ contentType: "text/plain", data: emailBody })

		await env.SEND_EMAIL.send(new EmailMessage(SENDER, DESTINATION, message.asRaw()))

		return Response.json({ success: true })
	} catch (e) {
		console.error(e)
		return Response.json({ success: false, error: "Erro interno" }, { status: 500 })
	}
}
