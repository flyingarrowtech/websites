
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const companyName = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

    return (
        <section ref={containerRef} className="relative pt-32 pb-24 md:pt-40 md:pb-40 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 min-h-screen flex items-center">
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-violet-500/20 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -50, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-fuchsia-500/20 blur-[120px] rounded-full"
                />
            </div>

            {/* Content */}
            <div className="container relative mx-auto px-4 md:px-6 z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass dark:glass-dark text-violet-600 dark:text-violet-400 text-sm font-bold mb-8 border border-violet-100 dark:border-violet-900/30 shadow-xl shadow-violet-500/5 group cursor-default"
                    >
                        <Sparkles className="w-4 h-4 animate-pulse" />
                        <span className="tracking-wide uppercase text-[10px]">Premium Software Engineering</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-ping"></div>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl sm:text-6xl md:text-8xl font-black text-zinc-900 dark:text-white tracking-tight mb-8 leading-[1.05]"
                    >
                        Build Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 animate-gradient-x bg-[length:200%_auto] text-glow">
                            Digital Empire
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl leading-relaxed font-medium"
                    >
                        {companyName} is your elite engineering partner. We combine deep technical expertise with AI-driven velocity to ship products that dominate markets.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
                    >
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] active:scale-95 group"
                        >
                            Start Your Journey
                            <Calendar className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform" />
                        </Link>
                        <Link
                            to="/case-studies"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-zinc-700 dark:text-zinc-300 transition-all glass dark:glass-dark rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 group"
                        >
                            Our Portfolio
                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Discover More</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-6 h-6 text-violet-500" />
                </motion.div>
            </motion.div>

            {/* Side Floating Element Decor (Only Desktop) */}
            <div className="absolute top-1/2 -right-40 -translate-y-1/2 hidden xl:block w-96 h-96 animate-float opacity-50 pointer-events-none">
                <div className="w-full h-full rounded-2xl border-2 border-dashed border-violet-500/20 rotate-12 scale-150" />
            </div>
            <div className="absolute top-1/2 -left-40 -translate-y-1/2 hidden xl:block w-96 h-96 animate-float opacity-50 pointer-events-none" style={{ animationDelay: '1s' }}>
                <div className="w-full h-full rounded-full border-2 border-dashed border-fuchsia-500/20 -rotate-12 scale-150" />
            </div>
        </section>
    );
}
