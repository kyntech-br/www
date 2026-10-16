export const Footer = () => (
	<footer className="border-t-[1px] border-border px-4 md:px-6 pt-10 md:pt-16 bg-[#fff] dark:bg-[#0C0C0C] overflow-hidden md:max-h-[400px]">
		<div className="container">
			<div className="flex flex-col border-border border-b-[1px] pb-10 md:pb-16 mb-12">
				<p className="font-extralight dark:font-thin uppercase text-2xl md:text-4xl text-center text-black dark:text-white tracking-widest">Kyntech</p>
				<p className="font-light md:text-2xl text-center text-[#878787]">
					Transformando <span className="text-black dark:text-white underline font-normal">ideias</span> em{" "}
					<span className="text-black dark:text-white underline font-normal">grandes negócios</span>.
				</p>
				<p className="mt-6 text-sm text-center text-[#878787]">Vilhena, Rondônia · CNPJ 63.419.150/0001-54</p>
			</div>
		</div>

		<p className="dark:text-[#161616] text-neutral-200 text-[280px] leading-none text-center pointer-events-none uppercase">Kyntech</p>
	</footer>
)
