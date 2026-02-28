import { Helmet } from 'react-helmet-async';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

const steps = [
    {
        number: '01',
        title: 'Deep Discovery',
        description: 'We dive deep into your vision, market, and user needs to validate assumptions and define clear success metrics.',
        details: ['High-Fidelity Workshops', 'Competitor Landscape', 'Tech Feasibility', 'User Journey Mapping']
    },
    {
        number: '02',
        title: 'Strategic Design',
        description: 'We architect a scalable solution and design intuitive, high-converting user experiences that founders love.',
        details: ['SaaS Architecting', 'Modern UI/UX Systems', 'Interactive Prototypes', 'Design Tokens']
    },
    {
        number: '03',
        title: 'Elite Engineering',
        description: 'Our senior engineers build your product in rapid sprints, delivering production-ready features every two weeks.',
        details: ['Clean Code Standards', 'AI-Driven Development', 'Automated CI/CD', 'Real-time Staging']
    },
    {
        number: '04',
        title: 'Launch & Iterate',
        description: 'We deploy your product with zero downtime and monitor real-world usage to iterate based on performance.',
        details: ['Zero-Downtime Push', 'Full-Stack Monitoring', 'User Analytics', 'Behavioral Feedback']
    },
    {
        number: '05',
        title: 'Infinite Scaling',
        description: 'As you grow, we optimize infrastructure, add features, and ensure your tech can handle millions of users effortlessly.',
        details: ['Cloud Orchestration', 'Feature Acceleration', 'Security Hardening', 'Priority Support']
    }
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            }
        });

        tl.from('.process-header', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
            .from('.process-step', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            }, '-=0.4');

    }, { scope: containerRef });

    return (
        <div className="bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
            <Helmet>
                <title>Our Process | {COMPANY_NAME} - Battle-Tested Engineering</title>
                <meta name="description" content={`Discover how ${COMPANY_NAME} bridges the gap between vision and execution using our high-fidelity agile methodology.`} />
            </Helmet>

            <div ref={containerRef} className="pt-40 pb-24 min-h-screen">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="process-header max-w-4xl mx-auto text-center mb-20 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-violet-200 dark:border-violet-800"
                        >
                            <Sparkles className="w-3 h-3" />
                            Battle-Tested Framework
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-8 tracking-tight">
                            From Vision to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 font-black italic">Execution</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed">
                            We bridge the gap between idea and scale using a high-fidelity agile methodology that prioritizes speed and ship quality.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-16 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-violet-600/0 via-violet-600/30 to-violet-600/0 -translate-x-1/2" />

                        {steps.map((step, index) => (
                            <div key={index} className={`process-step flex flex-col md:flex-row gap-8 md:gap-24 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                                {/* Content Side */}
                                <div className="flex-1 w-full md:w-auto text-center md:text-left">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="glass dark:glass-dark p-10 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-2xl shadow-violet-500/5 hover:border-violet-500/30 transition-all group"
                                    >
                                        <div className="text-6xl font-black text-zinc-900 dark:text-white opacity-5 mb-4 italic tracking-tighter group-hover:opacity-10 transition-opacity">{step.number}</div>
                                        <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">{step.title}</h2>
                                        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {step.details.map((detail, i) => (
                                                <div key={i} className="flex items-center text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
                                                    <CheckCircle2 className="w-4 h-4 text-violet-600 mr-2 flex-shrink-0" />
                                                    {detail}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Center Marker (Desktop) */}
                                <div className="hidden md:flex flex-col items-center justify-center w-16 relative z-10 h-full">
                                    <div className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-white border-4 border-violet-600 shadow-xl shadow-violet-500/40 transform group-hover:scale-125 transition-transform" />
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="hidden md:block flex-1" />

                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-32 text-center relative z-10"
                    >
                        <div className="absolute inset-0 bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
                        <Link
                            to="/contact"
                            className="group inline-flex items-center justify-center px-12 py-5 text-lg font-black text-white transition-all bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-full hover:bg-violet-600 dark:hover:bg-violet-400 dark:hover:text-white hover:shadow-2xl hover:shadow-violet-600/20 active:scale-95"
                        >
                            Start Your Roadmap
                            <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
