
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    // Refs for GSAP
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Background Parallax
        gsap.to(bgRef.current, {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

        // Content Entry
        tl.fromTo(
            '.hero-badge',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 }
        )
            .fromTo(
                '.hero-title',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                '-=0.4'
            )
            .fromTo(
                '.hero-desc',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                '-=0.6'
            )
            .fromTo(
                '.hero-btns',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                '-=0.4'
            );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative pt-32 pb-32 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 min-h-[90vh] flex items-center">
            <div ref={bgRef} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] dark:opacity-[0.1]" />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/80 via-zinc-50/50 to-zinc-50 dark:from-zinc-950 dark:via-zinc-950/90 dark:to-zinc-950 transition-colors duration-300" />
            </div>

            <div className="container relative mx-auto px-4 md:px-6 text-center z-10" ref={textRef}>
                <div className="hero-badge inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white dark:bg-zinc-900/50 backdrop-blur-sm text-violet-600 dark:text-violet-400 text-sm font-semibold mb-8 border border-violet-100 dark:border-violet-900/30 shadow-sm dark:shadow-none hover:shadow-md transition-all cursor-default">
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                    Powering High-Growth Startups
                </div>
                <h1 className="hero-title text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-8 leading-tight">
                    Ship Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 animate-gradient-x bg-[length:200%_auto]">SaaS Product</span> <br className="hidden md:block" /> Faster with AI.
                </h1>
                <p className="hero-desc text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                    We are {import.meta.env.VITE_COMPANY_NAME}. A specialized dev shop building scalable software for ambitious founders. No fluff, just code that converts.
                </p>

                <div className="hero-btns flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 hover:-translate-y-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:to-fuchsia-700 shadow-lg shadow-violet-500/20"
                    >
                        Book a Strategy Call
                        <Calendar className="w-5 h-5 ml-2" />
                    </Link>
                    <Link
                        to="/case-studies"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-zinc-700 dark:text-zinc-300 transition-all bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                    >
                        View Case Studies
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-screen bg-violet-500/10 dark:bg-violet-900/20 blur-3xl -z-10 rounded-full opacity-60 pointer-events-none transition-colors duration-300" />
        </section>
    );
}
