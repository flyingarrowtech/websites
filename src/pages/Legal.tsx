import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function Legal() {
    const { type } = useParams();

    const titles: Record<string, string> = {
        'privacy': 'Privacy Policy',
        'terms': 'Terms of Service',
        'cookies': 'Cookie Policy',
    };

    const title = titles[type || 'privacy'] || 'Legal Disclaimer';

    return (
        <div className="bg-white dark:bg-zinc-950 transition-colors duration-500 min-h-screen pt-40 pb-20 overflow-hidden">
            <Helmet>
                <title>{title} | {COMPANY_NAME} Legal</title>
            </Helmet>

            <div className="container relative mx-auto px-4 md:px-6 z-10">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-10 tracking-tight italic"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass dark:glass-dark p-8 md:p-12 rounded-3xl border border-zinc-100 dark:border-zinc-800 prose prose-zinc dark:prose-invert max-w-none shadow-2xl shadow-violet-500/5"
                >
                    <p className="text-sm font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-10">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                    <p className="text-lg font-medium">
                        This document serves as the regulatory framework for <strong>{COMPANY_NAME}</strong> services.
                        In a production environment, this text would be replaced with official legal documentation prepared by authorized counsel.
                    </p>
                    <h3 className="text-2xl font-black tracking-tight mt-12 mb-6 uppercase tracking-widest text-[10px] text-zinc-400">01. Service Scope</h3>
                    <p className="font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        We represent a distributed engineering collective providing high-fidelity technical services. All engagements are governed by the specific master service agreements (MSA) signed upon project commencement.
                    </p>
                    <h3 className="text-2xl font-black tracking-tight mt-12 mb-6 uppercase tracking-widest text-[10px] text-zinc-400">02. Data Governance</h3>
                    <p className="font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        User data security is a primary architectural requirement for all {COMPANY_NAME} builds. We adhere to industry-standard encryption and data handling protocols.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
