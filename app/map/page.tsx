"use client"

import Header from "@/components/blocks/header";
import {useTheme} from "next-themes";
import {useScroll} from "framer-motion";
import Footer from "@/components/blocks/footer";
import {TiledMap} from "@/components/TiledMap";

export default function MapPage() {
    const {theme} = useTheme()
    const {scrollYProgress} = useScroll()

    const generateTileUrls = (rows: number, cols: number) => {
        return Array.from({ length: rows }, (_, row) =>
            Array.from({ length: cols }, (_, col) =>
                `tile-${row + 1}-${col + 1}.png`
            )
        );
    };

    const mapTiles = generateTileUrls(10, 10);

    return (
        <main className="min-h-screen">
            <Header scrollProgress={scrollYProgress}/>
            <section id="map" className="pt-20">
                <TiledMap tileSize={256} tiles={mapTiles} />
            </section>
            <Footer/>
        </main>
    )
}