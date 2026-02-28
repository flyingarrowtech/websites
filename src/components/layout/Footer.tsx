import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, ArrowRight, Shield, Code2, CreditCard, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 text-zinc-400 pt-24 pb-12 border-t border-zinc-900 overflow-hidden relative">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative mx-auto px-4 md:px-6 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center gap-4 mb-8 group">
                            <div className="relative group-hover:scale-105 transition-transform duration-500">
                                <img
                                    src="/logo.png"
                                    alt={`${COMPANY_NAME} Logo`}
                                    className="h-14 md:h-16 w-auto object-contain filter drop-shadow-2xl shadow-violet-500/40"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const parent = e.currentTarget.parentElement!;
                                        parent.classList.add('w-14', 'h-14', 'bg-gradient-to-br', 'from-violet-600', 'to-fuchsia-600', 'flex', 'items-center', 'justify-center', 'text-white', 'font-black', 'text-2xl', 'rounded-xl');
                                        parent.innerHTML = COMPANY_NAME.charAt(0);
                                    }}
                                />
                            </div>
                            <span className="text-3xl font-black tracking-tighter text-white group-hover:text-violet-400 transition-colors">
                                {COMPANY_NAME}
                            </span>
                        </Link>
                        <p className="mb-10 text-zinc-500 leading-relaxed font-medium">
                            We architect high-fidelity SaaS products for the next generation of founders. Elite engineering, accelerated.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white transition-colors hover:border-violet-500/50"
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-2 md:col-span-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Ecosystem</h4>
                        <ul className="space-y-4">
                            {['About', 'Careers', 'Blog', 'Contact', 'Process', 'Request NDA'].map(link => (
                                <li key={link}>
                                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold hover:text-violet-400 transition-colors uppercase tracking-wider">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="lg:col-span-2 md:col-span-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Solutions</h4>
                        <ul className="space-y-4">
                            {['MVP Development', 'SaaS Scale-up', 'AI Integration', 'Book Call'].map(s => (
                                <li key={s}>
                                    <Link to={s === 'Book Call' ? '/book-call' : '/services'} className="text-sm font-bold hover:text-violet-400 transition-colors uppercase tracking-wider whitespace-nowrap">{s}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Widget */}
                    <div className="lg:col-span-4 md:col-span-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Intelligence</h4>
                        <p className="text-zinc-500 mb-6 text-sm font-medium">
                            Join 5,000+ founders receiving our weekly deep-dives.
                        </p>
                        <form className="flex gap-3 relative group">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-all font-bold text-sm"
                            />
                            <button
                                type="button"
                                className="p-4 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl transition-all shadow-xl shadow-violet-600/20"
                                aria-label="Subscribe"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Trust Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-zinc-900">
                    {[
                        { icon: Shield, label: 'NDA Priority', path: '/request-nda' },
                        { icon: Code2, label: 'IP Retention', path: '/legal/terms' },
                        { icon: CreditCard, label: 'Verified Flow', path: '/process' },
                        { icon: Star, label: 'Global Tier', path: '/about' }
                    ].map((item, i) => (
                        <Link key={i} to={item.path} className="flex flex-col items-center gap-3 text-center group">
                            <item.icon className="w-6 h-6 text-violet-500 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">{item.label}</span>
                        </Link>
                    ))}
                </div>

                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        >
                            <Sparkles className="w-4 h-4 text-violet-500" />
                        </motion.div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                            &copy; {currentYear} {COMPANY_NAME}. All parameters reserved.
                        </p>
                    </div>
                    <div className="flex gap-8">
                        {['Privacy', 'Terms', 'Cookies'].map(link => (
                            <Link
                                key={link}
                                to={`/legal/${link.toLowerCase()}`}
                                className="text-[10px] font-black uppercase tracking-widest text-zinc-600 hover:text-white transition-colors"
                            >
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
