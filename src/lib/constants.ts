export const baseUrl = new URL(process.env.NEXT_PUBLIC_BASE_URL || (process.env.NODE_ENV === "production" ? "https://kyntech.com.br" : "http://localhost:3000"))
	.origin
