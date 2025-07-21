"use client"

import Head from "next/head"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink } from "lucide-react"
import Header from "@/app/header"
import Footer from "@/app/footer"
import {useScroll} from "framer-motion"


export default function WikiPage() {
    
    const {scrollYProgress} = useScroll()

  const wikis = [
    {
      title: "Refined Obsidian",
      description: "Complete guide for the Refined Obsidian mod including blocks, items, recipes, and armor trims.",
      href: "/wiki/refined-obsidian",
      status: "Complete",
      category: "Minecraft Mod",
      icon: "/assets/refined-obsidian/ro-icon.png",
      features: ["Block Variants", "Recipes", "Armor Trims"],
    },
    // Future wikis can be added here
  ]

  return (
    <main className="min-h-screen theme-transition">
        <Header scrollProgress={scrollYProgress}/>
      <Head>
        <title>EmberForge Wiki</title>
        <meta name="description" content="All Wikis for the content developed by EmberForge Development" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-primary">EmberForge Wiki</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive documentation and guides for all EmberForge Development projects. Find detailed information
            about our mods, features, and how to use them.
          </p>
        </div>
        </div>

        {/* Scroll Progress Bar */}

        {/* Wiki Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {wikis.map((wiki, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {wiki.icon && (
                      <img
                        src={wiki.icon || "/placeholder.svg"}
                        alt={`${wiki.title} icon`}
                        className="w-10 h-10 rounded-lg"
                      />
                    )}
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{wiki.title}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {wiki.category}
                        </Badge>
                        <Badge variant={wiki.status === "Complete" ? "default" : "outline"} className="text-xs">
                          {wiki.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-sm mb-4 leading-relaxed">{wiki.description}</CardDescription>

                {/* Features List */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 text-foreground">Includes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {wiki.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={wiki.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                >
                  View Wiki
                  <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-8 border-t border-border">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">More Wikis Coming Soon</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            We're constantly working on new projects and expanding our documentation. Stay tuned for more comprehensive
            guides and wikis.
          </p>
        </div>
      </div>

      <Footer/>
    </main>
  )
}
