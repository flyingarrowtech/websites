
import { CheckCircle2, Ban, Info, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

const comparisonData = [
    { feature: 'Cost Efficiency', us: true, freelancers: true, agency: false, offshore: true },
    { feature: 'Reliability & Uptime', us: true, freelancers: false, agency: true, offshore: false },
    { feature: 'Timezone Alignment', us: true, freelancers: false, agency: true, offshore: false },
    { feature: 'Scalable Team', us: true, freelancers: false, agency: true, offshore: true },
    { feature: 'Code Ownership', us: true, freelancers: true, agency: true, offshore: 'Risky' },
    { feature: 'AI Integration', us: true, freelancers: 'Variable', agency: true, offshore: 'Rare' },
];

export default function Differentiation() {
    return (
        <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-500 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-amber-200 dark:border-amber-800"
                    >
                        <Star className="w-3 h-3 fill-current" />
                        Founder Choice
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight">
                        Why founders <span className="text-violet-600">choose us</span>
                    </h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
                        We provide agency-grade quality with the speed and cost-effectiveness of an elite distributed team.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Comparison Header */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 items-end px-4">
                        <div className="hidden md:block pb-6">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Key Features</span>
                        </div>
                        <div className="bg-violet-600 rounded-t-3xl p-6 text-center shadow-xl shadow-violet-500/20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative text-lg font-black text-white italic tracking-tighter">{COMPANY_NAME}</span>
                        </div>
                        <div className="hidden md:block pb-6 text-center">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Freelancers</span>
                        </div>
                        <div className="hidden md:block pb-6 text-center">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Agencies</span>
                        </div>
                        <div className="hidden md:block pb-6 text-center">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Offshore</span>
                        </div>
                    </div>

                    {/* Comparison Rows */}
                    <div className="space-y-3">
                        {comparisonData.map((row, i) => (
                            <motion.div
                                key={row.feature}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center group"
                            >
                                <div className="p-4 md:p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors">
                                    <span className="text-sm md:text-base font-bold text-zinc-900 dark:text-white">{row.feature}</span>
                                </div>

                                {/* Us */}
                                <div className="p-4 md:p-6 rounded-2xl bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800 flex justify-center group-hover:bg-violet-100 dark:group-hover:bg-violet-900/30 transition-colors shadow-sm">
                                    <CheckCircle2 className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                                </div>

                                {/* Others (Desktop) */}
                                <div className="hidden md:flex p-6 justify-center">
                                    {renderValue(row.freelancers)}
                                </div>
                                <div className="hidden md:flex p-6 justify-center">
                                    {renderValue(row.agency)}
                                </div>
                                <div className="hidden md:flex p-6 justify-center">
                                    {renderValue(row.offshore)}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-xs font-medium">
                            <Info className="w-4 h-4" />
                            Based on median market performance and founder surveys as of 2024.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function renderValue(val: boolean | string) {
    if (val === true) return <CheckCircle2 className="w-5 h-5 text-zinc-300 dark:text-zinc-700" />;
    if (val === false) return <Ban className="w-5 h-5 text-zinc-200 dark:text-zinc-800" />;
    return <span className="text-[10px] font-bold text-amber-500/70 border border-amber-500/20 px-2 py-0.5 rounded-full uppercase">{val}</span>;
}
