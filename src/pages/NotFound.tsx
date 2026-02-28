import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 px-4 transition-colors duration-500 overflow-hidden relative">
            <Helmet>
                <title>404 | Error resolving parameters | {COMPANY_NAME}</title>
            </Helmet>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-violet-600/5 blur-[120px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center relative z-10"
            >
                <div className="relative mb-8">
                    <h1 className="text-[10rem] md:text-[15rem] font-black text-zinc-900 dark:text-white opacity-[0.03] leading-none select-none italic tracking-tighter">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight italic">
                            Lost in <span className="text-violet-600 dark:text-violet-400">Space.</span>
                        </h2>
                    </div>
                </div>

                <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium mb-12 max-w-md mx-auto leading-relaxed">
                    The requested architectural parameters could not be resolved. This endpoint might have been deprecated or relocated.
                </p>

                <Link
                    to="/"
                    className="group inline-flex items-center px-10 py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-xs uppercase tracking-widest rounded-full hover:bg-violet-600 dark:hover:bg-violet-400 dark:hover:text-white transition-all shadow-2xl hover:shadow-violet-600/20 active:scale-95"
                >
                    <Home className="w-4 h-4 mr-3" />
                    Secure Re-entry
                    <ArrowRight className="w-4 h-4 ml-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
            </motion.div>
        </div>
    );
}
