import {Metadata} from "next"

export const metadata: Metadata = {
    title: "Deathbolt Wiki",
    description: "Information about Deathbolt - Work in Progress",
}

export default function DeathboltWikiPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Deathbolt Wiki</h1>
            <div className="bg-muted p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Work in Progress</h2>
                <p className="text-muted-foreground">
                    This wiki section is currently under development. Check back later for detailed information about
                    Deathbolt.
                </p>
            </div>
        </div>
    )
}