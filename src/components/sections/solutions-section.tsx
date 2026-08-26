import { Check, Code2, LayoutPanelLeft, Smartphone } from "lucide-react"
import Link from "next/link"
import type { ElementType } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionCardIcon, SectionCardRoot, SectionContainer, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/ui/section"

const solutionsCardsArray: {
	id: number
	title: string
	description: string
	icon: ElementType
	subitems: string[]
	cta: string
}[] = [
	{
		id: 1,
		title: "Sites Sob Medida",
		description: "Desenvolvidos para conversão, com design exclusivo e tecnologia de ponta.",
		icon: LayoutPanelLeft,
		subitems: ["SEO integrado", "100% responsivo", "CMS personalizado"],
		cta: "Criar Meu Site"
	},
	{
		id: 2,
		title: "Aplicativos Mobile",
		description: "Nativos (iOS/Android) ou híbridos: performance premium para seu negócio.",
		icon: Smartphone,
		subitems: ["Integração com APIs", "Notificações push", "Offline-first"],
		cta: "Desenvolver App"
	},
	{
		id: 3,
		title: "Integração de Sistemas",
		description: "Conecte ERPs, CRMs e ferramentas em um ecossistema único.",
		icon: Code2,
		subitems: ["APIs customizadas", "Migração segura", "Sincronização em tempo real"],
		cta: "Conectar Agora"
	}
]

export const SolutionsSection = () => (
	<SectionContainer id="solucoes" className="scroll-mt-24">
		<SectionHeader className="mb-12 text-center">
			<SectionTitle className="font-semibold text-3xl tracking-tighter leading-7 md:text-center mb-4">Soluções que Impulsionam Negócios</SectionTitle>
			<SectionDescription className="text-neutral-500 dark:text-neutral-300 text-center text-lg">
				Tecnologia personalizada para escalar sua operação, engajar clientes e automatizar processos.
			</SectionDescription>
		</SectionHeader>

		<SectionContent className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-6">
			{solutionsCardsArray.map(({ icon: Icon, subitems, ...card }) => (
				<SectionCardRoot key={card.id} className="first:md:mx-auto first:md:col-span-2 first:lg:m-0 first:lg:col-span-1">
					<Card key={card.title} className="relative hover:shadow-lg transition-shadow pt-10 gap-0 justify-between h-full bg-card dark:bg-[#121212]">
						<CardHeader className="">
							<div className="bg-background absolute -top-8 left-1/2 -translate-x-1/2 rounded-full size-fit">
								<SectionCardIcon className="bg-card-foreground/10 dark:bg-neutral-800 flex size-16 items-center justify-center rounded-full p-3">
									<Icon className="size-8 text-primary" />
								</SectionCardIcon>
							</div>
							<CardTitle className="text-center">{card.title}</CardTitle>
						</CardHeader>

						<CardContent className="space-y-4 mt-2 mb-6">
							<CardDescription className="text-center">{card.description}</CardDescription>
							<ul className="space-y-2">
								{subitems.map((item) => (
									<li key={item} className="flex items-center gap-2 text-sm">
										<Check className="size-4 text-card-foreground" />
										{item}
									</li>
								))}
							</ul>
						</CardContent>

						<CardFooter>
							<Button className="w-full hover:scale-105 duration-500" size="lg" asChild>
								<Link href="#contato">{card.cta}</Link>
							</Button>
						</CardFooter>
					</Card>
				</SectionCardRoot>
			))}
		</SectionContent>
	</SectionContainer>
)
