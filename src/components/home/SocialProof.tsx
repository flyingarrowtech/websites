
import { motion } from 'framer-motion';

const logos = [
    { name: 'TechStart', tint: 'group-hover:text-blue-500' },
    { name: 'InnovateAI', tint: 'group-hover:text-purple-500' },
    { name: 'SaaSFlow', tint: 'group-hover:text-emerald-500' },
    { name: 'DataScale', tint: 'group-hover:text-orange-500' },
    { name: 'CloudNine', tint: 'group-hover:text-cyan-500' },
    { name: 'NextGen', tint: 'group-hover:text-indigo-500' },
    { name: 'AlphaDev', tint: 'group-hover:text-rose-500' },
];

const technologies = [
    { name: 'React', level: 'Core' },
    { name: 'TypeScript', level: 'Core' },
    { name: 'Node.js', level: 'Backend' },
    { name: 'Python', level: 'AI/ML' },
    { name: 'AWS', level: 'Infra' },
    { name: 'OpenAI', level: 'AI' },
    { name: 'Tailwind', level: 'UI' },
];

export default function SocialProof() {
    return (
        <section className="py-20 bg-white dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900 transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-16">
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-4"
                    >
                        Trusted by industry leaders
                    </motion.p>
                </div>

                {/* Logo Marquee */}
                <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee flex whitespace-nowrap gap-16 md:gap-24 items-center py-4">
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="group cursor-default flex items-center justify-center">
                                <span className={`text-2xl md:text-3xl font-black text-zinc-300 dark:text-zinc-800 transition-all duration-500 ${logo.tint} group-hover:scale-110`}>
                                    {logo.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Gradient Overlays for smooth edges */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10" />
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {technologies.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative"
                            >
                                <div className="p-4 rounded-2xl glass dark:glass-dark text-center transition-all duration-300 group-hover:border-violet-500/50 group-hover:shadow-lg group-hover:shadow-violet-500/10 group-hover:-translate-y-1">
                                    <span className="block text-sm font-bold text-zinc-900 dark:text-white mb-1">{tech.name}</span>
                                    <span className="block text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">{tech.level}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
