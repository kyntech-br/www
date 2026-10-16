import { ContactForm } from "@/components/forms/contact-form"
import { SectionContainer, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/ui/section"

export const ContactSection = () => (
	<SectionContainer id="contato" className="scroll-mt-24">
		<SectionHeader className="mb-6 text-center">
			<SectionTitle className="font-semibold text-xl sm:text-3xl tracking-tighter leading-7 sm:mb-4">Solicite sua proposta</SectionTitle>

			<SectionDescription className="text-neutral-500 dark:text-neutral-300 text-center sm:text-lg">
				Conte o que sua empresa precisa melhorar. Vamos conversar sobre a solução mais adequada para o seu projeto.
			</SectionDescription>
		</SectionHeader>

		<SectionContent className="md:grid md:grid-cols-2 md:gap-x-8 border border-border px-4 py-6 md:px-8 bg-foreground/15 dark:bg-[#121212]">
			<ContactForm />

			<div className="hidden md:flex flex-col justify-center items-center">
				<h3 className="text-2xl text-center font-medium">Conte seu desafio</h3>
				<span className="text-center text-base text-foreground/60 dark:text-[#878787]">
					Descreva sua necessidade e conversaremos sobre um caminho para sua empresa, seja um site, uma melhoria de presença digital ou um sistema.
				</span>
			</div>
		</SectionContent>
	</SectionContainer>
)
