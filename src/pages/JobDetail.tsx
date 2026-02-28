import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, CheckCircle2, Globe, Clock,
    Send, User, Mail,
    Linkedin, MessageSquare, Sparkles, Zap,
    Phone
} from 'lucide-react';
import { jobs } from '../data/jobs';
import LoadingOverlay from '../components/ui/LoadingOverlay';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function JobDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const job = jobs.find(j => j.id === Number(id));

    if (!job) {
        return (
            <div className="min-h-screen pt-40 pb-20 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-4 italic">Directive Not Found</h2>
                    <p className="text-zinc-500 mb-8">The requested role identifier is invalid or has been decommissioned.</p>
                    <Link to="/careers" className="text-violet-600 font-black uppercase tracking-widest text-xs hover:opacity-70 transition-opacity">
                        [ BACK TO HUB ]
                    </Link>
                </div>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const webhookUrl = import.meta.env.VITE_FORM_WEBHOOK_URL;

        if (webhookUrl) {
            try {
                const formData = new FormData(formRef.current!);
                const data: any = Object.fromEntries(formData.entries());

                data.formType = 'Job Application';
                data.jobTitle = job.title;

                console.log('Transmitting data to master node...', {
                    ...data
                });

                await fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
            } catch (error) {
                console.error('Submission error:', error);
            }
        } else {
            // Simulator mode
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        setIsSubmitting(false);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-white dark:bg-zinc-950 transition-colors duration-500 min-h-screen pb-20 pt-40 overflow-hidden relative">
            <Helmet>
                <title>{job.title} | Careers at {COMPANY_NAME}</title>
                <meta name="description" content={`Apply for the ${job.title} position at ${COMPANY_NAME}. Shape the future of SaaS alongside elite engineers.`} />
            </Helmet>

            <LoadingOverlay isVisible={isSubmitting} message="Transmitting Directive..." />

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-violet-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-fuchsia-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container relative mx-auto px-4 md:px-6 z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link to="/careers" className="inline-flex items-center gap-2 text-zinc-500 hover:text-violet-600 transition-colors font-black text-[10px] uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Talent Hub
                    </Link>
                </motion.div>

                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.div
                            key="job-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className='my-10 grid grid-cols-1 lg:grid-cols-12 gap-12'
                        >
                            {/* Left Column: Job Info */}
                            <div className="lg:col-span-7 space-y-12">
                                <section>
                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                        <span className="bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-violet-200 dark:border-violet-800">
                                            {job.department}
                                        </span>
                                        <div className="flex items-center text-zinc-500 text-[10px] font-black uppercase tracking-widest gap-2">
                                            <Globe className="w-3 h-3 text-violet-500" /> {job.location}
                                        </div>
                                        <div className="flex items-center text-zinc-500 text-[10px] font-black uppercase tracking-widest gap-2">
                                            <Clock className="w-3 h-3 text-violet-500" /> {job.type}
                                        </div>
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter italic">
                                        {job.title}
                                    </h1>
                                    <p className="text-xl text-zinc-600 dark:text-zinc-400 font-bold leading-relaxed">
                                        {job.about}
                                    </p>
                                </section>

                                <div className="space-y-12 h-px bg-zinc-100 dark:bg-zinc-800 w-full" />

                                <section className="space-y-8">
                                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-3">
                                        <Sparkles className="w-4 h-4 text-violet-500" />
                                        Primary Responsibilities
                                    </h2>
                                    <ul className="space-y-6">
                                        {job.responsibilities.map((item, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start gap-4 group"
                                            >
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 group-hover:scale-150 transition-transform" />
                                                <span className="text-zinc-600 dark:text-zinc-400 font-bold leading-relaxed">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="space-y-8">
                                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-3">
                                        <Zap className="w-4 h-4 text-violet-500" />
                                        Operational Requirements
                                    </h2>
                                    <ul className="space-y-6">
                                        {job.requirements.map((item, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start gap-4 group"
                                            >
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fuchsia-500 group-hover:scale-150 transition-transform" />
                                                <span className="text-zinc-600 dark:text-zinc-400 font-bold leading-relaxed">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            {/* Right Column: Application Form */}
                            <div className="mt-10 lg:col-span-5 relative">
                                <div className="sticky top-40 glass dark:glass-dark border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-violet-500/5">
                                    <div className="mb-10">
                                        <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-2 italic">Initiate Application</h2>
                                        <p className="text-sm text-zinc-500 font-bold italic lowercase tracking-tight">System ready for credential transmission.</p>
                                    </div>

                                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Full Identity</label>
                                            <div className="relative">
                                                <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                <input
                                                    required
                                                    name="fullName"
                                                    type="text"
                                                    placeholder="Enter full name"
                                                    className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Communication Node</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                    <input
                                                        required
                                                        name="email"
                                                        type="email"
                                                        placeholder="Enter email address"
                                                        className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Secure Line (Phone)</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                    <input
                                                        required
                                                        name="phone"
                                                        type="tel"
                                                        placeholder="+91 (000) 000-0000"
                                                        className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Professional Hub (LinkedIn)</label>
                                                <div className="relative">
                                                    <Linkedin className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                    <input
                                                        required
                                                        name="professionalLink"
                                                        type="url"
                                                        placeholder="LinkedIn URL"
                                                        className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Source Code (GitHub)</label>
                                                <div className="relative">
                                                    <Globe className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                    <input
                                                        required
                                                        name="githubLink"
                                                        type="url"
                                                        placeholder="GitHub Profile URL"
                                                        className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Portfolio Link (Optional)</label>
                                            <div className="relative">
                                                <Globe className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                <input
                                                    name="portfolioLink"
                                                    type="url"
                                                    placeholder="Personal website or Portfolio"
                                                    className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Highest Qualification</label>
                                                <div className="relative">
                                                    <Sparkles className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                    <input
                                                        required
                                                        name="highestQualification"
                                                        type="text"
                                                        placeholder="e.g. B.Tech CS"
                                                        className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Current Backlogs</label>
                                                <div className="relative">
                                                    <Zap className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                    <input
                                                        required
                                                        name="currentBacklogs"
                                                        type="number"
                                                        min="0"
                                                        placeholder="0"
                                                        className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Current Salary (LPA)</label>
                                                <div className="relative">
                                                    <Sparkles className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                    <input
                                                        required
                                                        name="currentSalary"
                                                        type="text"
                                                        placeholder="e.g. 12 LPA"
                                                        className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Expected Salary (LPA)</label>
                                                <div className="relative">
                                                    <Zap className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                    <input
                                                        required
                                                        name="expectedSalary"
                                                        type="text"
                                                        placeholder="e.g. 18 LPA"
                                                        className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Notice Period</label>
                                            <div className="relative">
                                                <Clock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                <input
                                                    required
                                                    name="noticePeriod"
                                                    type="text"
                                                    placeholder="e.g. Immediate / 30 Days"
                                                    className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Resume Drive Link</label>
                                            <div className="relative">
                                                <Globe className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                <input
                                                    required
                                                    name="resumeLink"
                                                    type="url"
                                                    placeholder="Google Drive or Dropbox link"
                                                    className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">CV Optional Link</label>
                                            <div className="relative">
                                                <Globe className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                <input
                                                    name="cvLink"
                                                    type="url"
                                                    placeholder="Portfolio / CV link (Optional)"
                                                    className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500"
                                                />
                                            </div>
                                        </div>

                                        {/* Optional directives insight */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Directive Insight</label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-6 top-6 w-4 h-4 text-zinc-400" />
                                                <textarea
                                                    required
                                                    name="insight"
                                                    rows={4}
                                                    placeholder="Why is your architecture legendary?"
                                                    className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-violet-500 text-sm font-bold dark:text-white placeholder-zinc-500 resize-none"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                            ) : (
                                                <>
                                                    [ TRANSMIT DIRECTIVE ]
                                                    <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success-content"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-2xl mx-auto py-20 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 12 }}
                                className="w-32 h-32 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-violet-600/40"
                            >
                                <CheckCircle2 className="w-16 h-16 text-white" />
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6 italic tracking-tighter">Transmission Confirmed.</h2>
                            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-bold leading-relaxed mb-12">
                                Your credentials have been decentralized to our review task force. We will sync via secure channel if parameters match.
                            </p>
                            <button
                                onClick={() => navigate('/careers')}
                                className="glass dark:glass-dark border border-zinc-200 dark:border-zinc-800 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300 hover:bg-violet-600 hover:text-white transition-all shadow-xl"
                            >
                                [ RETURN TO HUB ]
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
