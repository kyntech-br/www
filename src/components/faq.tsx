import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqQuestionsArray = [
	{
		id: 1,
		question: "Quanto custa criar um site ou sistema?",
		answer:
			"O valor depende do que sua empresa precisa, do conteúdo e das funcionalidades. Conversamos sobre o projeto antes de preparar uma proposta com o escopo definido."
	},
	{
		id: 2,
		question: "Existem custos adicionais após o desenvolvimento?",
		answer:
			"Hospedagem, domínio, manutenção e possíveis integrações dependem do projeto. Esses itens devem ser explicados na proposta antes do início do trabalho."
	},
	{
		id: 3,
		question: "Quanto tempo leva para ficar pronto?",
		answer:
			"O prazo depende do conteúdo, das funcionalidades e das etapas de aprovação. Depois de entender sua necessidade, definimos um cronograma para o projeto."
	},
	{
		id: 4,
		question: "Como funciona a comunicação durante o projeto?",
		answer:
			"Alinhamos os canais de contato e os momentos de revisão no início do projeto. Você acompanha as etapas e pode trazer ajustes durante o desenvolvimento."
	},
	{
		id: 5,
		question: "Posso atualizar o conteúdo do site depois?",
		answer: "Isso depende da solução escolhida. Se a sua equipe precisa editar textos e imagens, incluímos essa necessidade na definição do site."
	},
	{
		id: 6,
		question: "Vocês dão suporte após a entrega?",
		answer: "As condições de suporte e manutenção são definidas na proposta, de acordo com o tipo de projeto e a necessidade da sua empresa."
	}
]

export const FAQ = () => (
	<section id="faq" className="flex flex-col gap-y-3 md:grid md:grid-cols-2 md:gap-x-5">
		<div className="flex flex-col justify-center">
			<h2 className="text-xl md:text-5xl uppercase font-semibold text-center">FAQ</h2>
			<p className="text-base md:text-lg text-[#878787] text-center">Respostas diretas para as perguntas mais comuns que recebemos.</p>
		</div>

		<Accordion type="single" collapsible className="w-full">
			{faqQuestionsArray.map(({ id, answer, question }) => (
				<AccordionItem key={id} value={`item-${id}`}>
					<AccordionTrigger className="text-base md:text-lg cursor-pointer">{question}</AccordionTrigger>
					<AccordionContent className="text-[#878787] text-base">{answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	</section>
)
