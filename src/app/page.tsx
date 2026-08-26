import { FAQ } from "@/components/faq"
import { ContactSection } from "@/components/sections/contact-section"
import { Hero } from "@/components/sections/hero-section"
import { HighlightsSection } from "@/components/sections/highlights-section"
import { HowWorkSection } from "@/components/sections/how-work-section"
import { SolutionsSection } from "@/components/sections/solutions-section"

const Home = () => (
	<>
		<Hero />

		<div className="space-y-20">
			<HowWorkSection />

			<ContactSection />

			<SolutionsSection />

			<HighlightsSection />

			<FAQ />
		</div>
	</>
)

export default Home
