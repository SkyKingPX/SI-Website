import {Metadata} from "next"
import WikiLayout from "@/components/wiki/layout"
import WikiPageTemplate from "@/components/wiki/page-template"

export const metadata: Metadata = {
  title: "MC Mod Template - Wiki",
  description: "Information about the Minecraft Mod Template - A comprehensive guide",
}

// Sample markdown content for the wiki page
const wikiContent = `
# MC Mod Template (MCMT)

The Minecraft Mod Template (MCMT) is a comprehensive starting point for creating Minecraft mods. It provides a structured foundation with essential boilerplate code to help you get started quickly.

## Features

- **Multi-loader Support**: Works with Forge, Fabric, and NeoForge
- **Gradle Setup**: Pre-configured build scripts
- **CI/CD Integration**: GitHub Actions workflows for automated builds
- **Code Structure**: Organized package structure following best practices
- **Documentation**: Inline comments and examples

## Getting Started

To use the MC Mod Template, follow these steps:

1. Clone the repository
2. Run the setup script
3. Configure your mod details
4. Start developing!

\`\`\`
git clone https://github.com/soncresity/mc-mod-template.git
cd mc-mod-template
./gradlew setup
\`\`\`

## Configuration

The template can be configured through the \`gradle.properties\` file:

\`\`\`
modId=mymod
modName=My Awesome Mod
modVersion=1.0.0
minecraftVersion=1.20.1
\`\`\`

## Project Structure

- \`src/main/java\`: Java source files
- \`src/main/resources\`: Resource files (textures, models, etc.)
- \`src/test\`: Test files
- \`gradle\`: Gradle wrapper and build scripts

## Best Practices

When using this template, we recommend following these best practices:

- Keep your mod ID short and descriptive
- Use a consistent naming convention
- Document your code thoroughly
- Write unit tests for critical functionality
- Maintain a changelog

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