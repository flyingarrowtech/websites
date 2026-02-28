import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function ThankYou() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950 px-4 transition-colors duration-500 overflow-hidden relative">
            <Helmet>
                <title>Transmission Confirmed | {COMPANY_NAME}</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-violet-500/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-fuchsia-500/5 blur-[100px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full glass dark:glass-dark rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 p-10 text-center relative z-10 shadow-2xl shadow-violet-500/5"
            >
                <div className="w-20 h-20 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle2 className="w-10 h-10 text-violet-600 dark:text-violet-400" />
                </div>

                <h1 className="text-4xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight italic">Message Sent.</h1>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-10 leading-relaxed">
                    Requirement parameters received. Our lead architect will review and reach out within 24 operational hours.
                </p>

                <div className="space-y-4">
                    <Link
                        to="/"
                        className="group flex items-center justify-center w-full py-5 px-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-violet-600 dark:hover:bg-violet-400 dark:hover:text-white transition-all shadow-xl hover:shadow-violet-600/20 active:scale-95"
                    >
                        Return to Hub
                        <ArrowLeft className="w-4 h-4 ml-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                    <Link
                        to="/blog"
                        className="group flex items-center justify-center w-full py-5 px-6 glass dark:glass-dark border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:border-violet-500/50 transition-all"
                    >
                        Explore Research
                        <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
