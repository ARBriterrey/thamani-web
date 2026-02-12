'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ThamaniNetwork } from '@/lib/ThamaniNetwork';

export default function NetworkAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const animationRef = useRef<ThamaniNetwork | null>(null);
    const frameIdRef = useRef<number | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Capture container for cleanup
        const container = containerRef.current;

        // Initialize renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0); // Transparent background
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Initialize animation
        const animation = new ThamaniNetwork(renderer);
        animation.init();
        animationRef.current = animation;

        // Animation loop
        const animate = () => {
            frameIdRef.current = requestAnimationFrame(animate);
            animation.animate();
            animation.render();
        };
        animate();

        // Handle resize
        const handleResize = () => {
            if (!container || !renderer || !animation) return;

            const width = container.clientWidth;
            const height = container.clientHeight;

            renderer.setSize(width, height);
            animation.onResize();
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (frameIdRef.current !== null) {
                cancelAnimationFrame(frameIdRef.current);
            }
            if (animationRef.current) {
                animationRef.current.dispose();
            }
            if (rendererRef.current && container) {
                container.removeChild(rendererRef.current.domElement);
                rendererRef.current.dispose();
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full"
            style={{ minHeight: '600px' }}
        />
    );
}
