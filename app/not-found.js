'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import {ArrowLeft, Home} from 'lucide-react'
import {motion, useScroll} from 'framer-motion'
import {Button} from '@/components/ui/button'
import {useTheme} from "next-themes";
import Header from '@/app/header'
import Footer from '@/app/footer'

export default function NotFound() {
    const [mounted, setMounted] = useState(false)
    const {theme} = useTheme()
    const {scrollYProgress} = useScroll()
    const [activeTab, setActiveTab] = useState("All")

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const handleBack = () => {
        if (window.history.length > 1) {
            window.history.back()
        } else {
            window.location.href = '/'
        }
    }

    return (
        <div className="min-h-screen flex flex-col">

            <main className="flex-grow flex items-center justify-center p-6 relative pt-16 overflow-hidden">
                <Header scrollProgress={scrollYProgress}/>

                <div className="max-w-md w-full mx-auto pt-18 mt-8 text-center">
                    <motion.div
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 4, opacity: 1}}
                        transition={{duration: 0.5}}
                        className="mb-8 relative mx-auto"
                    >
                        <h1 className="text-9xl font-bold text-primary">404</h1>
                    </motion.div>

                    <motion.div
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 0.2, duration: 0.5}}
                    >
                        <h1 className="text-3xl font-bold mb-2 text-primary">Page not found</h1>
                        <p className="text-muted-foreground mb-6">
                            The requested page could not be found. It may have been removed, renamed, or is temporarily
                            unavailable.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={handleBack}
                                variant="outline"
                                className="gap-2 hover-lift"
                            >
                                <ArrowLeft className="h-4 w-4"/>
                                Back
                            </Button>
                            <Link href="/">
                                <Button className="gap-2 bg-primary hover:bg-primary/90 hover-lift w-full">
                                    <Home className="h-4 w-4"/>
                                    Home
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}