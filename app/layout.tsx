import type React from "react"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./global.css"
import {ThemeProvider} from "@/components/theme-provider"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Soncresity Industries",
    description: "The official Website of Soncresity Industries",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
