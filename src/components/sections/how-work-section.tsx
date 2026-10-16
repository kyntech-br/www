import { Code2, DraftingCompass, MessageSquareText, Rocket } from "lucide-react"
import type { ElementType } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
	SectionCardIcon,
	SectionCardRoot,
	SectionContainer,
	SectionContent,
	SectionDescription,
	SectionHeader,
	SectionSeparator,
	SectionTitle
} from "@/components/ui/section"

const stepsArray: {
	id: number
	title: string
	text: string
	icon: ElementType
}[] = [
	{
		id: 0,
		title: "1. Conversa inicial",
		text: "Entendemos sua empresa, seus clientes e o que precisa melhorar na presença digital ou na operação.",
		icon: MessageSquareText
	},
	{
		id: 1,
		title: "2. Plano do projeto",
		text: "Definimos a solução adequada, as etapas e o que será entregue antes de começar o desenvolvimento.",
		icon: DraftingCompass
	},
	{
		id: 2,
		title: "3. Desenvolvimento e ajustes",
		text: "Criamos o site, sistema ou automação e revisamos o trabalho com você ao longo do projeto.",
		icon: Code2
	},
	{
		id: 3,
		title: "4. Publicação e próximos passos",
		text: "Colocamos a solução em uso e combinamos os próximos ajustes ou ações de presença digital conforme a necessidade.",
		icon: Rocket
	}
]

export const HowWorkSection = () => (
	<SectionContainer id="como-funciona" className="scroll-mt-24">
		<SectionHeader
			className="
		text-center space-y-2"
		>
			<SectionTitle className="font-semibold text-3xl tracking-tighter leading-7">Como trabalhamos</SectionTitle>

			<SectionDescription className="text-neutral-500 dark:text-neutral-300 text-base text-nowrap">
				Da conversa inicial à publicação. <br className="sm:hidden" />
				Cada etapa alinhada ao seu negócio.
			</SectionDescription>
		</SectionHeader>

		<SectionSeparator />

		<SectionContent className="mt-6 flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
			{stepsArray.map(({ icon: Icon, ...card }) => (
				<SectionCardRoot key={card.id}>
					<Card className="backdrop-blur-lg h-full bg-card dark:bg-[#121212] gap-4">
						<CardHeader className="flex gap-3 flex-col">
							<SectionCardIcon className="bg-card-foreground/10 dark:bg-muted/45 flex w-11 items-center justify-center rounded-md px-3 py-2">
								<Icon className="size-6 text-primary" />
							</SectionCardIcon>

							<CardTitle className="text-xl">{card.title}</CardTitle>
						</CardHeader>

						<CardContent>
							<CardDescription className="text-primary-gray leading-relaxed">{card.text}</CardDescription>
						</CardContent>
					</Card>
				</SectionCardRoot>
			))}
		</SectionContent>
	</SectionContainer>
)
