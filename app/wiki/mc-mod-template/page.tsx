import {Metadata} from "next"
import WikiLayout from "@/components/wiki/layout"
import WikiPageTemplate from "@/components/wiki/page-template"

export const metadata: Metadata = {
  title: "MC Mod Template - Wiki",
  description: "Information about the Minecraft Mod Template by Soncresity Industries",
}

// Sample markdown content for the wiki page
const wikiContent = `---
## Versions
| MC Version | Fabric | Forge  | NeoForge |
|:----------:|:------:|:------:|:--------:|
| **1.21.8** | **/**  |  **/** |   **/**  |
| **1.21.7** | **/**  |  **/** |   **/**  |
| **1.21.6** |   ✅   |   ✅   |    ✅   |
| **1.21.5** |   ✅   |   ✅   |    ✅   |
| **1.21.4** |   ✅   |   ✅   |    ✅   |
| **1.21.3** |   ✅   |   ❌   |    ✅   |
| **1.21.2** |   ❌   |   ❌   |    ❌   |
| **1.21.1** |   ✅   |   ✅   |    ✅   |
|  **1.21**  |   ❌   |   ❌   |    ❌   |
| **1.20.6** |   ✅   |   ❌   |    ✅   |
| **1.20.5** |   ❌   |   ❌   |    ❌   |
| **1.20.4** |   ✅   |   ✅   |    ✅   |
| **1.20.3** |   ❌   |   ❌   |    ⚠️   |
| **1.20.2** |   ❌   |   ❌   |    ⚠️   |
| **1.20.1** |   ✅   |   ✅   |    ⚠️   |
|  **1.20**  |   ❌   |   ❌   |    ⚠️   |
| **Below**  |   ❌   |   ❌   |    ⚠️   |

✅ - Added and Configured<br> **/** - Pending<br>❌ - Not Included<br>⚠️ - Version of Modloader Missing

## Support

If you encounter any issues or have questions about the template, please open an issue on the GitHub repository or contact the Soncresity Industries team.
`

export default function MCMTWikiPage() {
  return (
    <WikiLayout>
      <WikiPageTemplate
        title="MC Mod Template (MCMT)"
        titleImage="#"
        content={wikiContent}
        lastUpdated="July 25, 2025"
        breadcrumbs={[
          { title: "MC Mod Template", href: "/wiki/mc-mod-template" }
        ]}
        prevPage="#"
        nextPage="#"
        editUrl="https://github.com/SkyKingPX/SI-Website/edit/master/app/wiki/mc-mod-template/page.tsx"
      />
    </WikiLayout>
  )
}