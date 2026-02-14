
import { useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const logos = [
    { name: 'TechStart', url: 'https://via.placeholder.com/150x50?text=TechStart' },
    { name: 'InnovateAI', url: 'https://via.placeholder.com/150x50?text=InnovateAI' },
    { name: 'SaaSFlow', url: 'https://via.placeholder.com/150x50?text=SaaSFlow' },
    { name: 'DataScale', url: 'https://via.placeholder.com/150x50?text=DataScale' },
    { name: 'CloudNine', url: 'https://via.placeholder.com/150x50?text=CloudNine' },
];

export default function SocialProof() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to('.logo-item', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-12 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <p className="text-center text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-8">
                    Powering fast-growing companies globally
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 mb-16">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="logo-item h-8 md:h-12 w-auto flex items-center justify-center opacity-0"
                        >
                            <span className="text-xl font-bold text-zinc-400 hover:text-violet-600 transition-colors cursor-default">{logo.name}</span>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-8">
                    Built with modern stack
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'TensorFlow', 'OpenAI'].map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-600 dark:text-zinc-300 font-medium text-sm transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
