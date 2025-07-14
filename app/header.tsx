"use client"

import {useState, useEffect} from "react"
import {motion, type MotionValue} from "framer-motion"
import {Menu, X} from "lucide-react"
import {Button} from "@/components/ui/button"
import {ThemeToggle} from "@/components/theme-toggle"
import {cn} from "@/lib/utils"

interface HeaderProps {
    scrollProgress: MotionValue<number>
}

export default function Header({scrollProgress}: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Update header style on scroll
    useEffect(() => {
        const unsubscribe = scrollProgress.on("change", (latest) => {
            setIsScrolled(latest > 0.05)
        })

        return () => unsubscribe()
    }, [scrollProgress])

    const navItems = [
        {name: "Home", href: "/#home"},
        {name: "About", href: "/#about"},
        {name: "Projects", href: "/#projects"},
        {name: "Socials", href: "/#socials"},
        {name: "Team", href: "/#team"},
        {name: "Support", href: "/#support"},
        {name: "Partners", href: "/#partners"},
    ]

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 theme-transition",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b-4 border-border/50 py-3" : "bg-transparent py-5",
            )}
        >
            <div className="container mx-auto flex items-center justify-between">
                <a href="/#home" className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <img
                            src="/assets/si-logo-transparent.png"
                            alt="SI Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="font-bold text-xl">Soncresity Industries</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors hover-lift"
                        >
                            {item.name}
                        </a>
                    ))}
                    <ThemeToggle/>
                </nav>

                {/* Mobile Navigation Button */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle/>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X/> : <Menu/>}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <motion.div
                    className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b-4 border-border"
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity: 0, height: 0}}
                >
                    <nav className="container py-4 flex flex-col">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="py-3 text-foreground/80 hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </header>
    )
}
