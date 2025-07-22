
import {Metadata} from "next"

export const metadata: Metadata = {
  title: "SI: Deathbolt - Download",
  description: "Download SI: Deathbolt - Work in Progress",
}

export default function DeathboltWikiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Download SI: Deathbolt</h1>
      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Work in Progress</h2>
        <p className="text-muted-foreground">
          This section is currently under development. Please check back later.
        </p>
      </div>
    </div>
  )
}