import { Helmet } from 'react-helmet-async';
import { Linkedin, Target, Users2, Rocket } from 'lucide-react';
import { useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Story Section Animation
        gsap.from('.story-content', {
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
                trigger: '.story-section',
                start: 'top 70%',
            }
        });

        gsap.from('.story-image', {
            opacity: 0,
            x: 50,
            duration: 1,
            scrollTrigger: {
                trigger: '.story-section',
                start: 'top 70%',
            }
        });

        // Team Cards Animation
        gsap.from('.team-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.team-card',
                start: 'top 85%',
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500">
            <Helmet>
                <title>About {COMPANY_NAME} - Elite Engineering Shop</title>
                <meta name="description" content={`${COMPANY_NAME} is a specialized engineering shop that helps ambitious founders ship high-fidelity products at market-dominating speed.`} />
            </Helmet>

            {/* Hero Header */}
            <section className="relative pt-40 pb-24 overflow-hidden bg-zinc-50 dark:bg-zinc-950/50">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-violet-500/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-fuchsia-500/10 blur-[100px] rounded-full" />
                </div>

                <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-xs font-black uppercase tracking-widest mb-6"
                    >
                        Our Mission
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-8 tracking-tight">
                        We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">better</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed">
                        {COMPANY_NAME} is a specialized engineering shop dedicated to helping founders ship high-fidelity products at market-dominating speed.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="story-section flex flex-col lg:flex-row gap-16 items-center">
                        <div className="story-content flex-1 max-w-2xl">
                            <h2 className="text-4xl font-black text-zinc-900 dark:text-white mb-8 tracking-tight">Our Story</h2>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed font-medium">
                                Founded in 2024, {COMPANY_NAME} emerged to solve a critical bottleneck: the gap between ambitious product vision and elite engineering execution.
                            </p>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-medium">
                                We've moved beyond the traditional agency model. By combining strategic product management with a global network of senior developers, we provide the technical leverage that scaling startups require.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                                <div className="p-6 rounded-2xl glass dark:glass-dark border border-zinc-100 dark:border-zinc-800">
                                    <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white mb-4">
                                        <Target className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-4xl font-black text-zinc-900 dark:text-white mb-2 italic">50+</h3>
                                    <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Global Successes</p>
                                </div>
                                <div className="p-6 rounded-2xl glass dark:glass-dark border border-zinc-100 dark:border-zinc-800">
                                    <div className="w-10 h-10 rounded-xl bg-fuchsia-600 flex items-center justify-center text-white mb-4">
                                        <Users2 className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-4xl font-black text-zinc-900 dark:text-white mb-2 italic">95%</h3>
                                    <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Client Loyalty</p>
                                </div>
                            </div>
                        </div>
                        <div className="story-image flex-1 relative group">
                            <div className="absolute inset-0 bg-violet-600/20 rounded-3xl -rotate-3 scale-105 transition-transform group-hover:rotate-0" />
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Our Team"
                                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                            />
                            <div className="absolute -bottom-6 -right-6 p-6 glass dark:glass-dark rounded-2xl shadow-xl hidden md:block border border-violet-100 dark:border-violet-900">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Building since</p>
                                        <p className="text-lg font-black text-zinc-900 dark:text-white leading-none">2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-950/50 transition-colors">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">Our Leadership</h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto">
                            Guided by experienced engineers and product thinkers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { name: 'Sarthak Singh', role: 'Founder & CEO', initials: 'SS', label: 'Vision' },
                            { name: 'Sarthak Singh', role: 'Chief Technology Officer', initials: 'SS', label: 'Engineering' },
                            { name: 'Sarthak Singh', role: 'Head of Product', initials: 'SS', label: 'Strategy' },
                        ].map((member, index) => (
                            <div key={`${member.name}-${index}`} className="team-card group p-8 rounded-3xl glass dark:glass-dark text-center transition-all hover:-translate-y-2 duration-500 border border-zinc-100 dark:border-zinc-800 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/10">
                                <div className="relative w-32 h-32 mx-auto mb-8">
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full animate-pulse-glow opacity-50 group-hover:scale-110 transition-transform" />
                                    <div className="relative w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-white ring-4 ring-white dark:ring-zinc-800 group-hover:ring-violet-500 transition-all">
                                        <span className="text-3xl font-black tracking-tighter">{member.initials}</span>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-violet-600 text-white text-[8px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                        {member.label}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{member.name}</h3>
                                <p className="text-violet-600 dark:text-violet-400 mb-6 font-bold text-sm uppercase tracking-wide">{member.role}</p>

                                <div className="flex justify-center gap-4">
                                    <a href="#" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-400 hover:text-blue-600 transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
