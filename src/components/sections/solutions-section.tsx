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
		title: "Sites para Empresas",
		description: "Sites que apresentam seus serviços com clareza e facilitam o contato de novos clientes.",
		icon: LayoutPanelLeft,
		subitems: ["Conteúdo claro", "Boa experiência no celular", "Base técnica para SEO"],
		cta: "Conversar Sobre Meu Site"
	},
	{
		id: 2,
		title: "SEO e Presença Digital",
		description: "Melhoramos a estrutura e o conteúdo do seu site para que sua empresa seja mais fácil de encontrar e entender.",
		icon: Smartphone,
		subitems: ["SEO técnico", "Relevância nas buscas locais", "Caminhos claros para contato"],
		cta: "Melhorar Minha Presença"
	},
	{
		id: 3,
		title: "Sistemas e Automações",
		description: "Desenvolvemos soluções sob medida e conectamos ferramentas para reduzir tarefas manuais.",
		icon: Code2,
		subitems: ["Sistemas sob medida", "Integrações", "Fluxos automatizados"],
		cta: "Conversar Sobre Meu Projeto"
	}
]

export const SolutionsSection = () => (
	<SectionContainer id="solucoes" className="scroll-mt-24">
		<SectionHeader className="mb-12 text-center">
			<SectionTitle className="font-semibold text-3xl tracking-tighter leading-7 md:text-center mb-4">Tecnologia para sua empresa crescer</SectionTitle>
			<SectionDescription className="text-neutral-500 dark:text-neutral-300 text-center text-lg">
				Da presença nas buscas aos processos internos, conectamos tecnologia aos objetivos do seu negócio.
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
