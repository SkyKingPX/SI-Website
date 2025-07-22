"use client"

import {motion} from "framer-motion"
import {
    Github,
    Youtube,
    Mail,
    Heart,
    ExternalLink,
    Code,
    Users,
    MessageSquare,
    Twitch,
    Instagram,
    TwitchIcon
} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Separator} from "@/components/ui/separator"
import {LINKS} from "@/components/blocks/links";
import {Music2} from "lucide-react";
import {useTheme} from "next-themes";

export default function Footer() {
    const {theme} = useTheme()

    return (
        <footer id="support" className="bg-card border-t border-border/50 pt-20 pb-8">
            <div className="container mx-auto px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand Section */}
                    <motion.div
                        className="max-w-sm"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-10 h-10">
                                <img
                                    src="/assets/si-logo-transparent.png"
                                    alt="SI Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="font-bold text-2xl">Soncresity Industries</span>
                        </div>
                        <p className="text-foreground/70 mb-6 leading-relaxed">
                            Creators of immersive worlds, game mechanics, and stories tailored for Minecraft players and server communities worldwide
                        </p>
                        <div className="flex gap-3">
                            <Button size="icon" variant="ghost" className="rounded-full hover-glow" asChild>
                                <a href={`${LINKS.github_org}`} target="_blank" rel="noopener noreferrer"
                                   aria-label="GitHub">
                                    <Github size={20}/>
                                </a>
                            </Button>
                            <Button size="icon" variant="ghost" className="rounded-full hover-glow" asChild>
                                <a href={`${LINKS.youtube_channel}`} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <Youtube size={20}/>
                                </a>
                            </Button>
                            <Button size="icon" variant="ghost" className="rounded-full hover-glow" asChild>
                                <a href={`${LINKS.tiktok}`} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <Music2 size={20}/>
                                </a>
                            </Button>
                            <Button size="icon" variant="ghost" className="rounded-full hover-glow" asChild>
                                <a href={`${LINKS.twitch}`} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <Twitch size={20}/>
                                </a>
                            </Button>
                            <Button size="icon" variant="ghost" className="rounded-full hover-glow" asChild>
                                <a href={`${LINKS.instagram}`} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <Instagram size={20}/>
                                </a>
                            </Button>
                            <Button size="icon" variant="ghost" className="rounded-full hover-glow" asChild>
                                <a href={`${LINKS.curseforge_profile}`} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <img src="/assets/curseforge.svg" alt="CurseForge"
                                         width={20} height={20}
                                         className="invert-on-dark"/>
                                </a>
                            </Button>
                            <Button size="icon" variant="ghost" className="rounded-full hover-glow" asChild>
                                <a href={`${LINKS.modrinth_org}`} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <img src="/assets/modrinth.png" alt="Modrinth"
                                         width={20} height={20}
                                         className="h-5 w-5"/>
                                </a>
                            </Button>
                            <Button size="icon" variant="ghost" className="rounded-full hover-glow" asChild>
                                <a href="mailto:SoncresityIndustries@outlook.com" aria-label="Email">
                                    <Mail size={20}/>
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.1}}
                    >
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <Code size={18} className="text-primary"/>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/#about"
                                    className="text-foreground/70 hover:text-primary transition-colors hover-lift inline-flex items-center gap-2 group"
                                >
                                    About Us
                                    <ExternalLink size={14}
                                                  className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects/"
                                    className="text-foreground/70 hover:text-primary transition-colors hover-lift inline-flex items-center gap-2 group"
                                >
                                    Our Projects
                                    <ExternalLink size={14}
                                                  className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#team"
                                    className="text-foreground/70 hover:text-primary transition-colors hover-lift inline-flex items-center gap-2 group"
                                >
                                    Team
                                    <ExternalLink size={14}
                                                  className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/downloads/"
                                    className="text-foreground/70 hover:text-primary transition-colors hover-lift inline-flex items-center gap-2 group"
                                >
                                    Downloads
                                    <ExternalLink size={14}
                                                  className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/wiki/"
                                    className="text-foreground/70 hover:text-primary transition-colors hover-lift inline-flex items-center gap-2 group"
                                >
                                    Wiki & Guides
                                    <ExternalLink size={14}
                                                  className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`${LINKS.github_repos}`}
                                    className="text-foreground/70 hover:text-primary transition-colors hover-lift inline-flex items-center gap-2 group"
                                >
                                    GitHub Repositories
                                    <ExternalLink size={14}
                                                  className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Discord Community */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.3}}
                        className="max-w-sm"
                    >
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <MessageSquare size={18} className="text-primary"/>
                            Join Our Community
                        </h3>

                        {/* Discord Server Box */}
                        <div
                            className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6 hover-scale">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-[#5865F2] rounded-full flex items-center justify-center">
                                    <MessageSquare size={24} className="text-white"/>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Discord Server</h4>
                                    <p className="text-sm text-foreground/60">Join our community</p>
                                </div>
                            </div>
                            <p className="text-sm text-foreground/70 mb-4">
                                Connect with other developers, get support, and stay updated with the latest news.
                            </p>
                            <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white" asChild>
                                <a href={`${LINKS.discord}`} target="_blank" rel="noopener noreferrer">
                                    Join Discord Server
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                <Separator className="mb-8"/>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-foreground/60">
                        <p>© {new Date().getFullYear()} Soncresity Industries | All Rights Reserved</p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <span>Made with</span>
                        <Heart size={14} className="text-primary animate-pulse"/>
                        <span>by Soncresity Industries</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
