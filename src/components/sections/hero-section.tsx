import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const Hero = () => (
	<div className="lg:grid lg:grid-cols-2 mt-7.5 lg:mt-[80px] min-h-[530px]">
		<section className="flex flex-col">
			<Button variant="outline" className="rounded-full border-border gap-x-1 w-fit group px-3 py-1" asChild>
				<Link href="#contato">
					<span className="font-mono text-xs font-medium">Converse com a Kyntech</span>
					<ArrowRight className="size-4 transition group-hover:translate-x-1" />
				</Link>
			</Button>

			<h1 className="mt-6 md:mt-10 max-w-[580px] text-primary-gray leading-tight text-[24px] md:text-[36px] font-medium">
				Tecnologia para transformar sua presença digital em oportunidades de negócio.
			</h1>
			<p className="mt-4 max-w-[580px] text-primary-gray">
				A Kyntech é uma empresa de tecnologia em Vilhena, Rondônia. Criamos sites e sistemas e trabalhamos SEO, presença digital e automações para prestadores
				de serviços.
			</p>

			<div className="flex flex-col-reverse md:flex-row items-center gap-x-4 gap-y-2 mt-8 md:mt-10">
				<Button variant="secondary" className="w-full md:w-fit h-11 px-6 dark:bg-[#1D1D1D] bg-white ring-2 ring-border dark:ring-0" asChild>
					<Link href="#como-funciona">Veja nosso processo</Link>
				</Button>

				<Button className="w-full md:w-fit h-11 px-5" asChild>
					<Link href="#contato">Peça seu orçamento</Link>
				</Button>
			</div>

			<p className="text-xs text-primary-gray mt-4 font-mono">
				Atendimento remoto também em outras regiões. Em Vilhena, reuniões presenciais nas empresas mediante agendamento.
			</p>
		</section>

		<section className="hidden -mt-20 lg:flex lg:flex-col lg:items-center lg:justify-center lg:mx-auto">
			<span className="font-thin text-7xl uppercase">Kyntech</span>
			<p className="font-light text-xl text-primary-gray">
				Transformando <span className="font-normal text-black dark:text-white underline">ideias</span> em grandes{" "}
				<span className="font-normal text-black dark:text-white underline">negócios</span>.
			</p>
		</section>
	</div>
)
