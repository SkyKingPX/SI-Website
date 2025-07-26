import {Metadata} from "next"
import WikiLayout from "@/components/wiki/layout"
import WikiPageTemplate from "@/components/wiki/page-template"

export const metadata: Metadata = {
  title: "SI: Deathbolt - Wiki",
  description: "Information about Deathbolt - A death management mod for Minecraft",
}

// Sample markdown content for the wiki page
const wikiContent = `
# SI: Deathbolt

### This Wiki is still under construction, please check back later!

*Bottom Text*
[Test](https://example.com)
\`\`\`json
{
  "test": "test"
}
\`\`\`
`

// ## Support
//
// For additional help or to report bugs, please visit our GitHub repository or join our Discord server.
// `

export default function DeathboltWikiPage() {
  return (
    <WikiLayout>
      <WikiPageTemplate
        title="SI: Deathbolt"
        titleImage="/assets/deathbolt/db-icon.png"
        content={wikiContent}
        lastUpdated="July 25, 2025"
        breadcrumbs={[
          { title: "Deathbolt", href: "/wiki/deathbolt" }
        ]}
        prevPage="#"
        nextPage="#"
        editUrl="https://github.com/SkyKingPX/SI-Website/edit/master/app/wiki/deathbolt/page.tsx"
      />
    </WikiLayout>
  )
}