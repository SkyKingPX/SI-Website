"use client"

import {useState, useEffect} from "react"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Separator} from "@/components/ui/separator"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {
  Search,
  Menu,
  X,
  ChevronRight,
  BookOpen,
  Home
} from "lucide-react"
import {cn} from "@/lib/utils"
import Header from "@/components/blocks/header"
import Footer from "@/components/blocks/footer"
import {useScroll} from "framer-motion";
import {useTheme} from "next-themes";

// Define the wiki navigation structure
const wikiNavItems = [
  {
    title: "Minecraft Mods",
    items: [
      {
        title: "Refined Obsidian",
        href: "/wiki/refined-obsidian",
      },
      {
        title: "DeathBolt",
        href: "/wiki/deathbolt",
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        title: "MC Mod Template",
        href: "/wiki/mc-mod-template",
      },
    ]
  }
]

interface WikiLayoutProps {
  children: React.ReactNode
}

export function WikiLayout({children}: WikiLayoutProps) {
  const sectionTopSpacing = "pt-16 mt-8"
  const {scrollYProgress} = useScroll()
  const {theme} = useTheme()

  const pathname = usePathname()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredNavItems, setFilteredNavItems] = useState(wikiNavItems)

  // Filter navigation items based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredNavItems(wikiNavItems)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = wikiNavItems.map(category => {
      if (category.title.toLowerCase().includes(query)) {
        return category
      }

      if ('items' in category) {
        const filteredItems = category.items.filter(item =>
          item.title.toLowerCase().includes(query)
        )

        if (filteredItems.length > 0) {
          return {...category, items: filteredItems}
        }
      }

      return null
    }).filter(Boolean)

    setFilteredNavItems(filtered as typeof wikiNavItems)
  }, [searchQuery])

  // Close mobile nav when route changes
  useEffect(() => {
    setIsMobileNavOpen(false)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header scrollProgress={scrollYProgress}/>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden p-4 border-b">
            <div className="flex items-center justify-between">
              <Link href="/wiki" className="flex items-center gap-2 text-primary">
                <BookOpen className="h-5 w-5"/>
                <span className="font-semibold">Wiki</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              >
                {isMobileNavOpen ? (
                  <X className="h-5 w-5"/>
                ) : (
                  <Menu className="h-5 w-5"/>
                )}
              </Button>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <aside
            className={cn(
              "w-full md:w-64 shrink-0 border-r bg-background",
              isMobileNavOpen ? "block" : "hidden md:block"
            )}
          >
            <div className="p-4 hidden md:flex items-center gap-2 text-primary">
              <BookOpen className="h-5 w-5"/>
              <span className="font-semibold">Wiki Navigation</span>
            </div>
            <Separator className="hidden md:block"/>

            {/* Search */}
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                <Input
                  type="search"
                  placeholder="Search wiki..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <ScrollArea className="h-[calc(100vh-13rem)]">
              <div className="p-4 pt-0">
                <nav className="space-y-1">
                  <Link
                    href="/wiki"
                    className={cn(
                      "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                      pathname === "/wiki"
                        ? "bg-primary/10 text-primary font-medium"
                        : "hover:bg-muted"
                    )}
                  >
                    <Home className="h-4 w-4"/>
                    Wiki Home
                  </Link>

                  {filteredNavItems.map((category, i) => (
                    <div key={i} className="space-y-1">
                      {'href' in category ? (
                        <Link
                          href={category.href}
                          className={cn(
                            "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                            pathname === category.href
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted"
                          )}
                        >
                          {category.title}
                        </Link>
                      ) : (
                        <div className="pt-2">
                          <div className="mb-2 px-3 text-sm font-semibold text-foreground">
                            {category.title}
                          </div>
                          <div className="space-y-1">
                            {category.items.map((item, j) => (
                              <Link
                                key={j}
                                href={item.href}
                                className={cn(
                                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                                  pathname === item.href
                                    ? "bg-primary/10 text-primary font-medium"
                                    : "hover:bg-muted"
                                )}
                              >
                                <ChevronRight className="h-3 w-3"/>
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </ScrollArea>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="container mx-auto p-4 md:p-6 lg:p-8">
              {children}
            </div>
          </main>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default WikiLayout