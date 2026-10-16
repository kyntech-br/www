import type { MetadataRoute } from "next"

import { baseUrl } from "@/lib/constants"

export const dynamic = "force-static"

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: baseUrl,
			changeFrequency: "monthly",
			priority: 1
		}
	]
}

export default sitemap
