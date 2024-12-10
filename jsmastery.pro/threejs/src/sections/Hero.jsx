import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Leva, useControls } from "leva"; 
import { useMediaQuery } from 'react-responsive'; // Import useMediaQuery
import CanvasLoader from '../components/CanvasLoader';
import HackerRoom from '../components/HackerRoom';

const Hero = () => {
    // Define media query breakpoints
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    // Calculate the scale based on screen size
    const scale = isSmall ? 0.05 : isMobile ? 0.07 : 0.1;

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            {/* Text content */}
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Kenny <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Building Products & Brands
                </p>
            </div>

            {/* 3D Canvas */}
            <div className="w-full h-full absolute inset-0">
                <Leva />
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        {/* Perspective Camera */}
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        
                        {/* 3D Model or Scene */}
                        <HackerRoom 
                            position={[2, -8, 2]}
                            rotation={[0, -Math.PI, 0]}
                            scale={[scale, scale, scale]} // Apply the calculated scale
                        />
                        
                        {/* Lights */}
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;

