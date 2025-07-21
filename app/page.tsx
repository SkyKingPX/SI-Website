"use client"

import {useState, useEffect, useRef} from "react"
import {motion, useAnimation, useScroll} from "framer-motion"
import {
    ArrowDown,
    Code,
    Server,
    Package,
    ArrowRight,
    Github,
    ExternalLink,
    MessageSquare, Globe
} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import Header from "@/app/header"
import Team from "@/app/team"
import Footer from "@/app/footer"
import {LINKS} from "@/app/links";
import {useTheme} from "next-themes";
import {projects} from "./project-list"

export default function Home() {

    const sectionTopSpacing = "pt-16 mt-8"

    const {theme} = useTheme()
    const {scrollYProgress} = useScroll()
    const [activeTab, setActiveTab] = useState("All")

    // Animation controls for each section
    const aboutControls = useAnimation()
    const projectsControls = useAnimation()
    const teamControls = useAnimation()

    const teamRef = useRef<HTMLElement>(null)
    const projectsRef = useRef<HTMLElement>(null)
    const aboutRef = useRef<HTMLElement>(null)

    const filteredProjects = activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab)

    // Check if elements are in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === aboutRef.current && entry.isIntersecting) {
                        aboutControls.start("visible")
                    }
                    if (entry.target === projectsRef.current && entry.isIntersecting) {
                        projectsControls.start("visible")
                    }
                    if (entry.target === teamRef.current && entry.isIntersecting) {
                        teamControls.start("visible")
                    }
                })
            },
            {threshold: 0.2},
        )

        if (aboutRef.current) observer.observe(aboutRef.current)
        if (projectsRef.current) observer.observe(projectsRef.current)
        if (teamRef.current) observer.observe(teamRef.current)

        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current)
            if (projectsRef.current) observer.unobserve(projectsRef.current)
            if (teamRef.current) observer.unobserve(teamRef.current)
        }
    }, [aboutControls, projectsControls, teamControls])

    // About section features
    const features = [
        {
            icon: <Package className="h-6 w-6 text-primary"/>,
            title: "Minecraft Modpacks",
            description: "Modpacks",
        },
        {
            icon: <Code className="h-6 w-6 text-primary"/>,
            title: "Minecraft Mods",
            description: "Mods",
        },
        {
            icon: <Server className="h-6 w-6 text-primary"/>,
            title: "Server Plugins",
            description: "Plugins",
        },
        {
            icon: <Globe className="h-6 w-6 text-primary"/>,
            title: "Minecraft Worlds",
            description: "Minecraft Worlds",
        },
    ]

    return (
        <main className="min-h-screen">
            <Header scrollProgress={scrollYProgress}/>

            {/* Main Section */}
            <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full opacity-45 animate-pulse-slow blur-3xl"/>
                </div>

                <div className="container mx-auto px-4 py-12 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                            className="flex flex-col gap-6"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Crafting <span className="text-primary">Exceptional</span> Minecraft Experiences
                            </h1>

                            <p className="text-lg text-foreground/80 max-w-lg">
                                Creators of immersive worlds, game mechanics, and stories tailored for Minecraft players and server communities worldwide
                            </p>

                            <div className="flex flex-wrap gap-4 mt-4">
                                <Button size="lg" className="hover-scale">
                                    <a href="#projects">
                                        Explore Our Work
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" className="hover-scale" asChild>
                                    <a href="#about">
                                        Learn More <ArrowDown size={16} className="ml-2"/>
                                    </a>
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.8, delay: 0.2}}
                            className="relative"
                        >
                            <div className="relative w-full aspect-square max-w-md mx-auto">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"/>
                                <motion.div
                                    className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 animate-float">
                                    <img
                                        src="/si-conquest.png?height=512&width=512"
                                        alt="SI Conquest Online"
                                        className="w-full h-full object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"/>
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"/>
                                            <span className="text-sm font-medium">Active Development</span>
                                        </div>
                                        <h3 className="text-xl font-bold">SI: Conquest Online</h3>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <motion.section
                id="about"
                ref={aboutRef}
                initial="hidden"
                animate={aboutControls}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
                }}
                className={`py-10 md:py-22 relative overflow-hidden ${sectionTopSpacing}`}
            >
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/70 rounded-full blur-3xl opacity-50 animate-pulse-slow"/>
                    <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-secondary/60 rounded-full blur-3xl opacity-35 animate-pulse-slow"/>
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
                            About <span className="text-primary">Soncresity Industries</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                            >
                                <Card className="hover-scale h-full border-border/50">
                                    <CardHeader>
                                        <div
                                            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                            {feature.icon}
                                        </div>
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription
                                            className="text-foreground/70">{feature.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="hover-scale mt-20 bg-card rounded-2xl p-8 border border-border/50"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
                                <p className="text-foreground/80 mb-4">
                                    Story and lore of SI
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Projects Section */}
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
                    <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary rounded-full blur-3xl opacity-15 animate-pulse-slow"/>
                    <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-10 animate-pulse-slow"/>
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
                                                                     className={`${theme === 'dark' ? 'invert' : ''} h-5 w-5`}/>
                                                                <span className="sr-only">GitHub</span>
                                                            </a>
                                                        </Button>
                                                        <Button size="sm" variant="ghost" className="w-9 h-9 p-0" asChild>
                                                            <a href={project.links.curseforge} target="_blank"
                                                               rel="noopener noreferrer">
                                                                <img src="/assets/curseforge.svg" alt="CurseForge"
                                                                     width={20} height={20}
                                                                     className={`${theme === 'dark' ? 'invert' : ''} h-5 w-5`}/>
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

                    <div className="mt-12 text-center">
                        <a href="/projects">
                            <Button size="lg" variant="outline" className="hover-scale">
                                View All Projects <ArrowRight size={16} className="ml-2"/>
                            </Button>
                        </a>
                    </div>
                </div>
            </motion.section>

            {/* Team Section */}
            <motion.div
                ref={teamRef}
                initial="hidden"
                animate={teamControls}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
                }}
            >
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full opacity-25 animate-pulse-slow blur-3xl"/>
                    <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-primary rounded-full opacity-35 animate-pulse-slow blur-3xl"/>
                </div>

                <Team/>
            </motion.div>

            {/* Support Section */}
            <motion.section id="support" className={`py-10 md:py-22 relative overflow-hidden ${sectionTopSpacing}`}>
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary rounded-full blur-3xl opacity-30 animate-pulse-slow"/>
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
                            <span className="text-primary">Support</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-foreground/80"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.1}}
                        >
                            Need help or want to contribute? Report issues on GitHub or join our community.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5}}
                        >
                            <Card className="hover-scale h-full border-border/50">
                                <CardHeader>
                                    <div
                                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Github className="h-6 w-6 text-primary"/>
                                    </div>
                                    <CardTitle>GitHub Issues</CardTitle>
                                    <CardDescription className="text-foreground/70">
                                        Report bugs or request new features by creating issues on our GitHub
                                        repositories
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button asChild>
                                        <a href={`${LINKS.github_repos}`} target="_blank"
                                           rel="noopener noreferrer">
                                            Visit GitHub <ArrowRight size={16} className="ml-2"/>
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5}}
                        >
                            <Card className="hover-scale h-full border-border/50">
                                <CardHeader>
                                    <div
                                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <MessageSquare size={24} className="text-primary"/>
                                    </div>
                                    <CardTitle>Discord Community</CardTitle>
                                    <CardDescription className="text-foreground/70">
                                        Join our Discord server to get help, share ideas and connect with other users
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button asChild>
                                        <a href={`${LINKS.discord}`} target="_blank" rel="noopener noreferrer">
                                            Join Discord <ArrowRight size={16} className="ml-2"/>
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Partners Section */}
            <section id="partners" className={`py-10 md:py-22 relative overflow-hidden ${sectionTopSpacing}`}>
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute bottom-1/2 left-1/4 w-72 h-72 bg-[#7868E6] rounded-full blur-3xl opacity-40 animate-pulse"/>
                    <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[#2F97DD] rounded-full blur-3xl opacity-40 animate-pulse"/>
                    <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#9f5ca5] rounded-full blur-3xl opacity-40 animate-pulse"/>
                </div>
                <section id="kh">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold mb-4"
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5}}
                            >
                                Our <span className="text-primary">Partners</span>
                            </motion.h2>
                            <motion.h2
                                className="text-2xl md:text-3xl font-bold mb-4"
                                initial={{opacity: 0, y: 15}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5}}
                            >

                                <img src="/assets/partners/kinetic-logo.png"
                                     alt="KineticHosting Logo"
                                     className="w-16 h-16 mr-4 inline-block"
                                />
                                <span
                                    className="bg-gradient-to-r from-[#5A4FCF] via-[#7868E6] to-[#A29BFE] text-transparent bg-clip-text">KineticHosting</span>
                            </motion.h2>
                            <motion.p
                                className="text-lg text-foreground/80"
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: 0.1}}
                            >
                                We are partnered with KineticHosting to provide you with the best Minecraft server
                                hosting
                                experience.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <motion.div
                                initial={{opacity: 0, x: -30}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.6}}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-bold"><span
                                    className="bg-gradient-to-r from-[#5A4FCF] via-[#7868E6] to-[#A29BFE] text-transparent bg-clip-text">Premium Game Server Hosting</span>
                                </h3>
                                <p className="text-foreground/80">
                                    KineticHosting is a premium game server hosting provider specializing in Minecraft
                                    servers with a
                                    reputation for reliability, performance, and exceptional customer service. As a
                                    trusted
                                    partner for
                                    gaming communities worldwide, they deliver high-quality hosting solutions designed
                                    to
                                    keep your gameplay
                                    smooth and uninterrupted.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Server className="h-5 w-5 text-[#5A4FCF] mt-1"/>
                                        <div>
                                            <h4 className="font-medium">High-Performance Hardware</h4>
                                            <p className="text-sm text-foreground/70">Powered by cutting-edge server
                                                infrastructure with
                                                powerful CPUs and high-speed NVMe SSDs for optimal performance and
                                                minimal
                                                lag.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Package className="h-5 w-5 text-[#5A4FCF] mt-1"/>
                                        <div>
                                            <h4 className="font-medium">Complete Minecraft Support</h4>
                                            <p className="text-sm text-foreground/70">Full compatibility with all
                                                Minecraft
                                                versions (Java and
                                                Bedrock) and comprehensive modpack support with easy installations.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Code className="h-5 w-5 text-[#5A4FCF] mt-1"/>
                                        <div>
                                            <h4 className="font-medium">User-Friendly Experience</h4>
                                            <p className="text-sm text-foreground/70">Intuitive control panel for
                                                effortless
                                                server management
                                                with instant setup and full configuration access.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start mt-12 gap-4">
                                    <Button
                                        className="bg-gradient-to-r from-[#5A4FCF] via-[#7868E6] to-[#A29BFE] hover:opacity-90 text-white hover-scale"
                                        asChild>
                                        <a href="https://billing.kinetichosting.net/aff.php?aff=1075" target="_blank"
                                           rel="noopener noreferrer">
                                            Get Started <ArrowRight className="ml-2 h-4 w-4"/>
                                        </a>
                                    </Button>
                                    <Button variant="outline" className="hover-scale hover:bg-[#7868E6]" asChild>
                                        <a href="https://www.kinetichosting.net/game-servers/minecraft/order"
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            View Hosting Plans <ExternalLink size={16} className="ml-2"/>
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, x: 30}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.6, delay: 0.2}}
                                className="relative"
                            >
                                <div
                                    className="relative overflow-hidden rounded-xl border border-[#5A4FCF]/20 bg-card theme-transition">
                                    <div
                                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5A4FCF] via-[#7868E6] to-[#A29BFE]"></div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-4">Why Choose KineticHosting?</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#5A4FCF]"></div>
                                                <span className="text-sm">24/7 dedicated customer support team</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#5A4FCF]"></div>
                                                <span className="text-sm">Flexible plans starting from $3.99</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#5A4FCF]"></div>
                                                <span className="text-sm">No long-term contracts required</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#5A4FCF]"></div>
                                                <span className="text-sm">Unlimited plugin compatibility</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#5A4FCF]"></div>
                                                <span className="text-sm">Simple one-click backups</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#5A4FCF]"></div>
                                                <span className="text-sm">Easy server splits functionality</span>
                                            </li>
                                        </ul>

                                        <div className="mt-6 p-4 rounded-lg bg-[#5A4FCF]/5 border border-[#5A4FCF]/10">
                                            <p className="text-sm italic text-center text-foreground/80">
                                                "KineticHosting's commitment to performance, reliability and customer
                                                satisfaction makes them an
                                                ideal partner for hosting your Minecraft server."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </section>

            <Footer/>
        </main>
    )
}
