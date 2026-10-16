import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/context/theme-context"

import { baseUrl } from "@/lib/constants"

import "./globals.css"

const inter = Inter({
	subsets: ["latin"],
	display: "swap"
})

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	alternates: {
		canonical: baseUrl
	},
	title: {
		default: "Kyntech | Criação de Sites e Soluções Digitais em Vilhena",
		template: "Kyntech | %s"
	},
	description:
		"A Kyntech desenvolve sites, sistemas e soluções de SEO e automação em Vilhena, RO. Tecnologia para fortalecer sua presença digital e gerar oportunidades.",
	openGraph: {
		title: "Kyntech | Criação de Sites e Soluções Digitais em Vilhena",
		description: "Sites, sistemas, SEO e automações para empresas de Vilhena e outras regiões. Conheça a Kyntech e converse sobre seu projeto.",
		url: baseUrl,
		siteName: "Kyntech",
		images: [
			{
				url: `${baseUrl}/og-image.png`,
				width: 1200,
				height: 630,
				alt: "Logo da Kyntech com a frase Transformando ideias em negócios"
			}
		],
		locale: "pt_BR",
		type: "website"
	},
	// twitter: {
	// 	card: "summary_large_image",
	// 	title: "Kyntech | Tech Feita para Resultados",
	// 	description: "Sites, apps e sistemas que convertem visitantes em clientes. 100% personalizados.",
	// 	images: [`${baseUrl}/twitter-image.png`]
	// },
	icons: {
		apple: `${baseUrl}/apple-touch-icon.png`,
		other: [
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				url: `${baseUrl}/android-chrome-192x192.png` // Para Chrome Android
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "512x512",
				url: `${baseUrl}/android-chrome-512x512.png` // Para PWAs
			}
		]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1
		}
	}
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<Header />
					<main className="container mx-auto px-4">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
