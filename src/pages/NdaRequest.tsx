import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Shield, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LoadingOverlay from '../components/ui/LoadingOverlay';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function NdaRequest() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const webhookUrl = import.meta.env.VITE_FORM_WEBHOOK_URL;

        if (webhookUrl) {
            try {
                await fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, formType: 'NDA Request' }),
                });
            } catch (error) {
                console.error('Submission error:', error);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setIsSubmitting(false);
        }

        setSubmitted(true);
    };

    return (
        <div className="bg-white dark:bg-zinc-950 transition-colors duration-500 min-h-screen pt-40 pb-20 overflow-hidden relative">
            <Helmet>
                <title>Secure NDA Request | {COMPANY_NAME} Protection</title>
                <meta name="description" content={`Your IP is our priority. Request a signed NDA from ${COMPANY_NAME} before sharing your sensitive project details.`} />
            </Helmet>

            <LoadingOverlay isVisible={isSubmitting} message="Securing Channel..." />

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-violet-500/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-fuchsia-500/5 blur-[100px] rounded-full" />
            </div>

            <div className="container relative mx-auto px-4 md:px-6 z-10">
                <div className="max-w-xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass dark:glass-dark rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-2xl shadow-violet-500/5 overflow-hidden"
                    >
                        <div className="bg-zinc-900 border-b border-white/5 p-10 text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Shield className="w-16 h-16 text-violet-400 mx-auto mb-6 relative" />
                            <h1 className="text-3xl font-black text-white mb-3 tracking-tight italic relative">IP Protection</h1>
                            <p className="text-zinc-400 font-medium relative italic">
                                We sign NDAs before every first call. Your vision is safe with us.
                            </p>
                        </div>

                        <div className="p-10">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-6"
                                >
                                    <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mx-auto mb-6 shadow-inner">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">Request Logged</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-8">Check your inbox for the automated NDA link.</p>
                                    <Link to="/" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-violet-600 dark:text-violet-400 hover:gap-2 transition-all">
                                        <ArrowLeft className="w-4 h-4 mr-2" /> Back Home
                                    </Link>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-3">
                                            Work Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full px-6 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all font-bold"
                                            placeholder="founder@venture.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-5 px-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-xs uppercase tracking-widest rounded-2xl transition-all hover:bg-violet-600 dark:hover:bg-violet-400 dark:hover:text-white shadow-xl hover:shadow-violet-600/20 active:scale-95"
                                    >
                                        Inquire Securely
                                    </button>

                                    <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                                        <p className="text-[10px] text-center font-bold text-zinc-400 tracking-wide uppercase">
                                            Trusted by 50+ Global Startups
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
