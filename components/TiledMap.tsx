import {useState, useRef, useEffect} from 'react';
import {MinusIcon, PlusIcon} from "lucide-react";

interface TiledMapProps {
    tileSize: number;
    tiles: string[][];
}

export function TiledMap({tileSize, tiles}: TiledMapProps) {
    const [transform, setTransform] = useState({x: 0, y: 0, scale: 1});
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const lastPosition = useRef({x: 0, y: 0});
    const ZOOM_STEP = 0.1;
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 1.5;

    const [tileDimensions, setTileDimensions] = useState<{width: number, height: number}>({
        width: tileSize,
        height: tileSize
    });

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            const maxDimension = 256;
            let newWidth, newHeight;

            if (img.naturalWidth > img.naturalHeight) {
                newWidth = maxDimension;
                newHeight = (maxDimension * img.naturalHeight) / img.naturalWidth;
            } else {
                newHeight = maxDimension;
                newWidth = (maxDimension * img.naturalWidth) / img.naturalHeight;
            }

            setTileDimensions({
                width: newWidth,
                height: newHeight
            });
        };
        img.src = `/assets/map/${tiles[0][0]}`;
    }, [tiles]);

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        lastPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;

        const deltaX = e.clientX - lastPosition.current.x;
        const deltaY = e.clientY - lastPosition.current.y;

        setTransform(prev => ({
            ...prev,
            x: prev.x + deltaX,
            y: prev.y + deltaY
        }));

        lastPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleZoom = (delta: number) => {
        setTransform(prev => ({
            ...prev,
            scale: Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, prev.scale + delta))
        }));
    };

    const totalWidth = tileDimensions.width * tiles[0].length;
    const totalHeight = tileDimensions.height * tiles.length;

    return (
        <div className="relative p-8">
            <div className="absolute right-12 top-12 z-10 flex flex-col gap-2">
                <button
                    onClick={() => handleZoom(ZOOM_STEP)}
                    className="bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center border border-gray-200"
                >
                    <PlusIcon className="h-4 w-4 invert-on-dark"/>
                </button>
                <button
                    onClick={() => handleZoom(-ZOOM_STEP)}
                    className="bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center border border-gray-200"
                >
                    <MinusIcon className="h-4 w-4 invert-on-dark"/>
                </button>
            </div>
            <div
                ref={containerRef}
                className="relative w-full h-[80vh] overflow-hidden border border-gray-300 rounded-lg"
                style={{ minHeight: '600px', cursor: isDragging.current ? 'grabbing' : 'grab' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <div
                        style={{
                            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                            position: 'relative',
                            width: `${totalWidth}px`,
                            height: `${totalHeight}px`,
                            transformOrigin: 'center',
                            willChange: 'transform'
                        }}
                    >
                        {tiles.map((row, rowIndex) =>
                            row.map((tile, colIndex) => (
                                <img
                                    key={`${rowIndex}-${colIndex}`}
                                    src={`/assets/map/${tile}`}
                                    alt={`Map tile ${rowIndex+1}-${colIndex+1}`}
                                    style={{
                                        position: 'absolute',
                                        top: `${rowIndex * tileDimensions.height}px`,
                                        left: `${colIndex * tileDimensions.width}px`,
                                        width: `${tileDimensions.width}px`,
                                        height: `${tileDimensions.height}px`,
                                        objectFit: 'fill',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        backgroundColor: 'rgba(200,200,200,0.2)',
                                        userSelect: 'none',
                                        pointerEvents: 'none'
                                    }}
                                    loading="lazy"
                                />
                            ))
                        )}
                    </div>
                </div>
                <div className="absolute left-4 bottom-4 bg-white/80 px-3 py-1 rounded-md shadow-sm border border-gray-200">
                    <span className="text-sm text-primary">Sodonia World Map</span>
                    <p className="text-xs text-muted-foreground">By Soncresity Industries</p>
                </div>
            </div>
        </div>
    );
}
