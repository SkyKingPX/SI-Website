"use client"

import {motion, useAnimation, useScroll} from "framer-motion";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useState, useEffect, useRef} from "react"
import {projects} from "../project-list";
import {useTheme} from "next-themes";

import Header from "@/app/header"
import Footer from "@/app/footer"

export default function Projects() {
    const {theme} = useTheme()

    const sectionTopSpacing = "pt-16 mt-8"

    const {scrollYProgress} = useScroll()
    const projectsControls = useAnimation()
    const projectsRef = useRef<HTMLElement>(null)
    const [activeTab, setActiveTab] = useState("All")
    const filteredProjects = activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === projectsRef.current && entry.isIntersecting) {
                        projectsControls.start("visible")
                    }
                })
            },
            {threshold: 0.2},
        )

        if (projectsRef.current) observer.observe(projectsRef.current)

        return () => {
            if (projectsRef.current) observer.unobserve(projectsRef.current)
        }
    }, [projectsControls])

    return (
        <main className="min-h-screen">
            <Header scrollProgress={scrollYProgress}/>

            <motion.section
                id="projects"
                ref={projectsRef}
                initial="hidden"
                animate={projectsControls}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
                }}
                className={`py-10 md:py-22 relative overflow-hidden ${sectionTopSpacing}`}
            >
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary rounded-full blur-3xl opacity-15 animate-pulse-slow"/>
                    <div
                        className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-10 animate-pulse-slow"/>
                </div>

                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5}}
                        >
                            Our <span className="text-primary">Projects</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-foreground/80"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.1}}
                        >
                            Discover our collection of Minecraft mods, plugins, and resource packs that have been
                            downloaded by
                            millions of players worldwide.
                        </motion.p>
                    </div>

                    <Tabs defaultValue="All" className="w-full" onValueChange={setActiveTab}>
                        <div className="flex justify-center mb-8">
                            <TabsList className="grid w-full max-w-2xl grid-cols-6 gap-4 p-1">
                                <TabsTrigger value="All">All</TabsTrigger>
                                <TabsTrigger value="Mod">Mods</TabsTrigger>
                                <TabsTrigger value="Modpack">Modpacks</TabsTrigger>
                                <TabsTrigger value="Plugin">Plugins</TabsTrigger>
                                <TabsTrigger value="Datapack">Datapacks</TabsTrigger>
                                <TabsTrigger value="Other">Other</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value={activeTab} className="mt-0">
                            {filteredProjects.length === 0 ? (
                                <div className="text-center text-foreground/70 italic py-12">
                                    <p>No Projects found in that category!</p>
                                    <p>We will steadily increase our library of Mods, Modpacks and more, so stay tuned!</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredProjects.map((project, index) => (
                                        <motion.div
                                            key={project.id}
                                            initial={{opacity: 0, y: 30}}
                                            whileInView={{opacity: 1, y: 0}}
                                            viewport={{once: true}}
                                            transition={{duration: 0.5, delay: index * 0.1}}
                                        >
                                            <Card className="overflow-hidden hover-scale h-full border-border/50">
                                                <div className="aspect-video relative overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                                    />
                                                </div>
                                                <CardHeader>
                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        <Badge className="text-xs">
                                                            {project.category}
                                                        </Badge>
                                                        {project.tags.map((tag, i) => (
                                                            <Badge key={i} variant="outline" className="text-xs">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                                                    <CardDescription
                                                        className="text-foreground/70 line-clamp-2">{project.description}</CardDescription>
                                                </CardHeader>
                                                <CardFooter className="flex justify-between">
                                                    <div className="flex gap-2">
                                                        <Button size="sm" variant="ghost" className="w-9 h-9 p-0" asChild>
                                                            <a href={project.links.github} target="_blank"
                                                               rel="noopener noreferrer">
                                                                <img src="/assets/github.svg" alt="GitHub" width={20}
                                                                     height={20}
                                                                     className={`${theme === 'light' ? 'invert' : ''} h-5 w-5`}/>
                                                                <span className="sr-only">GitHub</span>
                                                            </a>
                                                        </Button>
                                                        <Button size="sm" variant="ghost" className="w-9 h-9 p-0" asChild>
                                                            <a href={project.links.curseforge} target="_blank"
                                                               rel="noopener noreferrer">
                                                                <img src="/assets/curseforge.svg" alt="CurseForge"
                                                                     width={20} height={20}
                                                                     className={`${theme === 'light' ? 'invert' : ''} h-5 w-5`}/>
                                                                <span className="sr-only">CurseForge</span>
                                                            </a>
                                                        </Button>
                                                        <Button size="sm" variant="ghost" className="w-9 h-9 p-0" asChild>
                                                            <a href={project.links.modrinth} target="_blank"
                                                               rel="noopener noreferrer">
                                                                <img src="/assets/modrinth.png" alt="Modrinth"
                                                                     className="h-5 w-5"/>
                                                                <span className="sr-only">Modrinth</span>
                                                            </a>
                                                        </Button>
                                                    </div>
                                                    <Button size="sm" variant="default" className="gap-1" asChild>
                                                        <a href={`/wiki/${project.wikiid}`}>
                                                            Wiki <ArrowRight size={14}/>
                                                        </a>
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            </motion.section>

            <Footer/>
        </main>
    )
}


