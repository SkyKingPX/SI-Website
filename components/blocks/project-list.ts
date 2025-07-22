
import {LINKS} from "@/components/blocks/links";

export const projects = [
    {
        id: 1,
        title: "Refined Obsidian",
        description: "A Minecraft Mod by Soncresity Industries that adds various obsidian-themed items, blocks and armor trims.",
        wikiid: "refined-obsidian",
        image: "/assets/refined-obsidian/gallery-1.jpg?height=300&width=500",
        category: "Mod",
        tags: ["Building", "Armor Trims"],
        //downloads: "",
        links: {
            github: LINKS.ro_github_repo,
            modrinth: LINKS.ro_modrinth_project,
            curseforge: LINKS.ro_curseforge_project,
        }
    },
    {
        id: 2,
        title: "DeathBolt",
        description: "A Minecraft Mod by Soncresity Industries that spawns configurable Lightning Bolts upon a player's death.",
        wikiid: "deathbolt",
        image: "/assets/placeholder.png?height=300&width=500",
        category: "Mod",
        tags: ["Customisation", "Multiplayer"],
        //downloads: "",
        links: {
            github: LINKS.db_github_repo,
            modrinth: LINKS.db_modrinth_project,
            curseforge: LINKS.db_curseforge_project,
        }
    },
]