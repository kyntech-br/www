"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const ContactForm = () => {
	const contactFormSchema = z.object({
		name: z.string().min(1, "Nome é obrigatório").max(150, "Máx: 150 caracteres"),
		email: z.string().email("Email inválido").max(150, "Máx: 150 caracteres"),
		phone: z.string().optional(),
		idea: z.string().max(750, "Máx: 750 caracteres").optional(),
		_hp: z.string().optional()
	})

	type ContactFormSchema = z.infer<typeof contactFormSchema>

	const contactForm = useForm<ContactFormSchema>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			idea: "",
			_hp: ""
		}
	})

	const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const { control, handleSubmit, register, reset, formState } = contactForm

	function formatPhoneNumber(value: string): string {
		const digits = value.replace(/\D/g, "").slice(0, 11)
		if (digits.length === 0) return ""

		const areaCode = digits.slice(0, 2)
		const part1 = digits.slice(2, 7)
		const part2 = digits.slice(7, 11)

		let formatted = `(${areaCode}`
		if (digits.length > 2) formatted += `) ${part1}`
		if (digits.length > 7) formatted += `-${part2}`

		return formatted
	}

	async function onSubmit(data: ContactFormSchema) {
		setStatus("idle")
		setErrorMessage(null)

		try {
			const response = await fetch("/api/contato", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data)
			})

			const json = (await response.json()) as { success: boolean; error?: string }

			if (response.ok && json.success) {
				setStatus("success")
				reset()
			} else {
				// Mostra o motivo devolvido pela API (ex: rate limit) em vez de um erro genérico.
				setErrorMessage(json.error ?? null)
				setStatus("error")
			}
		} catch {
			setStatus("error")
		}
	}

	return (
		<Form {...contactForm}>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
				{/* Honeypot: escondido por CSS de propósito - bots ignoram type="hidden".
				    Nome opaco e data-*-ignore para que autofill de navegador e gerenciador de senhas não preencham. */}
				<input
					type="text"
					tabIndex={-1}
					autoComplete="off"
					aria-hidden="true"
					data-1p-ignore
					data-lpignore="true"
					className="absolute -left-[9999px]"
					{...register("_hp")}
				/>

				<FormField
					control={control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome Completo *</FormLabel>
							<FormControl>
								<Input placeholder="Ex: Maria Souza (CEO da Maria Company)" {...field} />
							</FormControl>
							<FormDescription className="text-foreground/60 dark:text-muted-foreground">Usaremos para personalizar sua proposta</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email profissional *</FormLabel>
							<FormControl>
								<Input placeholder="contato@empresa.com" {...field} />
							</FormControl>
							<FormDescription className="text-foreground/60 dark:text-muted-foreground">Enviaremos a proposta detalhada e sem spam.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Celular (opcional)</FormLabel>
							<FormControl>
								<Input
									placeholder="(99) 99999-9999"
									value={field.value}
									onChange={(e) => {
										const formatted = formatPhoneNumber(e.target.value)
										field.onChange(formatted)
									}}
								/>
							</FormControl>
							<FormDescription className="text-foreground/60 dark:text-muted-foreground">Retornamos em até 2 horas</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="idea"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Conte sua ideia</FormLabel>
							<FormControl>
								<Textarea rows={5} className="resize-none h-28" placeholder={`Ex: "App para delivery de medicamentos com integração em farmácias`} {...field} />
							</FormControl>
							<FormDescription className="text-foreground/60 dark:text-muted-foreground">Seja breve - depois detalhamos juntos</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" disabled={formState.isSubmitting} className="h-11 w-full font-semibold">
					{formState.isSubmitting ? "Enviando..." : "Quero minha Proposta Grátis"}
				</Button>

				{status === "success" && <p className="text-sm text-green-600 dark:text-green-400">Recebido! Retornamos em até 2 horas.</p>}

				{status === "error" && (
					<p className="text-sm text-red-600 dark:text-red-400">
						{errorMessage ?? "Não conseguimos enviar."} Chame no WhatsApp:{" "}
						<a href="https://wa.me/556992333748" className="underline">
							clique aqui
						</a>
						.
					</p>
				)}
			</form>
		</Form>
	)
}
