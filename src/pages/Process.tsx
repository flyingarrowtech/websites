import { Helmet } from 'react-helmet-async';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: '01',
        title: 'Discovery & Validation',
        description: 'We dive deep into your vision, market, and user needs to validate assumptions and define clear success metrics.',
        details: ['Stakeholder Workshops', 'Competitor Analysis', 'User Personas', 'Technical Feasibility']
    },
    {
        number: '02',
        title: 'Strategy & Design',
        description: 'We architect a scalable solution and design intuitive, high-converting user experiences.',
        details: ['System Architecture', 'UI/UX Design', 'Wireframing', 'Tech Stack Selection']
    },
    {
        number: '03',
        title: 'Agile Development',
        description: 'Our senior engineers build your product in rapid sprints, delivering testable features every two weeks.',
        details: ['Sprint Planning', 'Code Reviews', 'CI/CD Setup', 'Automated Testing']
    },
    {
        number: '04',
        title: 'Launch & Iterate',
        description: 'We deploy your product with zero downtime and monitor real-world usage to iterate based on feedback.',
        details: ['Production Deployment', 'Performance Monitoring', 'User Analytics', 'Hotjar Heatmaps']
    },
    {
        number: '05',
        title: 'Scale & Growth',
        description: 'As you grow, we optimize infrastructure, add features, and ensure your tech can handle millions of users.',
        details: ['Infrastructure Scaling', 'Feature Expansion', 'Security Audits', '24/7 Support']
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
        <>
            <Helmet>
                <title>Our Process | Agency</title>
                <meta name="description" content="Discover our proven 5-step process for building and scaling SaaS products for ambitious startups." />
            </Helmet>

            <div ref={containerRef} className="pt-32 pb-24 bg-zinc-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="process-header max-w-4xl mx-auto text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
                            From Concept to <span className="text-violet-600 dark:text-violet-400">Scale</span>
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            We follow a battle-tested agile methodology designed to de-risk development and accelerate time-to-market.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600/0 via-violet-600/20 to-violet-600/0 -translate-x-1/2" />

                        {steps.map((step, index) => (
                            <div key={index} className={`process-step flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                                {/* Content Side */}
                                <div className="flex-1 w-full md:w-auto text-center md:text-left">
                                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none hover:border-violet-500/30 transition-colors duration-300">
                                        <div className="text-5xl font-bold text-violet-100 dark:text-violet-900/20 mb-4">{step.number}</div>
                                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{step.title}</h2>
                                        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                            {step.description}
                                        </p>
                                        <ul className="text-left space-y-2">
                                            {step.details.map((detail, i) => (
                                                <li key={i} className="flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-500">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-2" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Center Marker (Desktop) */}
                                <div className="hidden md:flex flex-col items-center justify-center w-12 relative z-10">
                                    <div className="w-4 h-4 rounded-full bg-violet-600 border-4 border-zinc-50 dark:border-zinc-950 shadow-sm" />
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="hidden md:block flex-1" />

                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-violet-600 rounded-lg hover:bg-violet-700 hover:shadow-lg hover:-translate-y-1"
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
