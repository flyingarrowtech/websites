import { Helmet } from 'react-helmet-async';
import { Check, ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function Pricing() {
    return (
        <div className="bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
            <Helmet>
                <title>Pricing & Engagement Models | {COMPANY_NAME}</title>
                <meta name="description" content={`Transparent, ROI-focused pricing for SaaS development and dedicated engineering pods at ${COMPANY_NAME}. No hidden fees, just elite engineering.`} />
            </Helmet>

            {/* Header Section */}
            <section className="relative pt-40 pb-20 bg-zinc-50 dark:bg-zinc-950/50">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-violet-500/5 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-fuchsia-500/5 blur-[100px] rounded-full" />
                </div>

                <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-amber-200 dark:border-amber-800"
                    >
                        <ShieldCheck className="w-3 h-3" />
                        Transparent Engagement
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-8 tracking-tight">
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 font-black">ROI</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed">
                        Simple, performance-driven pricing models. No hidden fees, no complexity. Just elite engineering.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* MVP / Project Based */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-violet-500/30 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100 dark:bg-zinc-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:bg-violet-500/20 transition-colors" />
                            <div className="relative mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white mb-6">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight mb-2">MVP Builder</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">Perfect for rapid validation.</p>
                            </div>

                            <div className="mb-10">
                                <span className="text-4xl font-black text-zinc-900 dark:text-white italic tracking-tighter">Custom</span>
                                <span className="text-sm font-bold text-zinc-400 block mt-1 uppercase tracking-widest">Fixed Scope</span>
                            </div>

                            <Link to="/contact" className="block w-full py-4 px-6 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-black text-sm uppercase tracking-widest text-center rounded-2xl hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all mb-10">
                                Get Estimate
                            </Link>

                            <ul className="space-y-4">
                                {['Fixed timeline & budget', 'Clear deliverables', 'PM included', '30-day bug support'].map(f => (
                                    <li key={f} className="flex items-center text-zinc-600 dark:text-zinc-300 font-bold text-xs uppercase tracking-wide">
                                        <Check className="w-4 h-4 text-violet-600 mr-3 shrink-0" /> {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Hybrid / Retainer - Recommended */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-zinc-900 dark:bg-white border-4 border-violet-600 relative md:-translate-y-8 shadow-2xl shadow-violet-600/20 z-20 group"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-6 py-2 rounded-b-2xl text-[10px] font-black uppercase tracking-widest">
                                Most Popular
                            </div>
                            <div className="relative mb-8 mt-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 dark:bg-zinc-950/5 flex items-center justify-center text-white dark:text-zinc-900 mb-6">
                                    <Star className="w-6 h-6 fill-current" />
                                </div>
                                <h3 className="text-2xl font-black text-white dark:text-zinc-900 tracking-tight mb-2">Scale Up</h3>
                                <p className="text-zinc-400 dark:text-zinc-500 font-medium text-sm">Flexible engineering pods.</p>
                            </div>

                            <div className="mb-10">
                                <span className="text-4xl font-black text-white dark:text-zinc-900 italic tracking-tighter">$4,000+</span>
                                <span className="text-sm font-bold text-zinc-400 dark:text-zinc-500 block mt-1 uppercase tracking-widest">per mo / engineer</span>
                            </div>

                            <Link to="/contact" className="block w-full py-4 px-6 bg-violet-600 text-white font-black text-sm uppercase tracking-widest text-center rounded-2xl hover:bg-violet-700 transition-all mb-10 shadow-xl shadow-violet-600/40 group-hover:scale-105">
                                Start Scaling
                            </Link>

                            <ul className="space-y-4">
                                {['Dedicated senior devs', 'Flex up/down monthly', 'Direct Slack access', 'Architect oversight'].map(f => (
                                    <li key={f} className="flex items-center text-zinc-300 dark:text-zinc-600 font-bold text-xs uppercase tracking-wide">
                                        <Check className="w-4 h-4 text-violet-600 mr-3 shrink-0" /> {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Enterprise */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-violet-500/30 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100 dark:bg-zinc-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:bg-violet-500/20 transition-colors" />
                            <div className="relative mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white mb-6">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight mb-2">Enterprise</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">Full pods for complex builds.</p>
                            </div>

                            <div className="mb-10">
                                <span className="text-4xl font-black text-zinc-900 dark:text-white italic tracking-tighter">Volume</span>
                                <span className="text-sm font-bold text-zinc-400 block mt-1 uppercase tracking-widest">Contact Sales</span>
                            </div>

                            <Link to="/contact" className="block w-full py-4 px-6 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-black text-sm uppercase tracking-widest text-center rounded-2xl hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all mb-10">
                                Contact Us
                            </Link>

                            <ul className="space-y-4">
                                {['Cross-functional pod', 'QA & DevOps included', 'SLA guaranteed', '24/7 Support'].map(f => (
                                    <li key={f} className="flex items-center text-zinc-600 dark:text-zinc-300 font-bold text-xs uppercase tracking-wide">
                                        <Check className="w-4 h-4 text-violet-600 mr-3 shrink-0" /> {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>

                    <div className="text-center mt-24 max-w-2xl mx-auto p-10 rounded-3xl glass dark:glass-dark border border-zinc-100 dark:border-zinc-800">
                        <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight uppercase tracking-widest text-xs">Cost Optimization</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-8">
                            Pricing depends on tech complexity and urgency. We specialize in high-leverage engineering that actually saves you money by avoiding technical debt.
                        </p>
                        <Link to="/ faq" className="text-violet-600 dark:text-violet-400 font-black text-sm uppercase tracking-widest hover:underline inline-flex items-center">
                            Read Pricing FAQ <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
