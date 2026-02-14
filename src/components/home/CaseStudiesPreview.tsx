
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71', // Dashboard/Data visualization
        title: 'FinTech Dashboard Scaling',
        category: 'SaaS Development',
        metric: 'Reduced processing time by 60%',
        metricLabel: 'Performance',
    },
    {
        image: 'https://images.unsplash.com/photo-1576091160550-2187d80a1a44', // Medical/Tech interface
        title: 'HealthTech AI Diagnostic Tool',
        category: 'AI Integration',
        metric: '98% Accuracy',
        metricLabel: 'Model Precision',
    },
    {
        image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad', // Alternative Shopping/Payment image
        title: 'Global E-commerce Revamp',
        category: 'Dedicated Team',
        metric: '$2M+ Monthly Revenue',
        metricLabel: 'Scale Achieved',
    },
];

export default function CaseStudiesPreview() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
            }
        });

        tl.from('.case-study-header', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
            .from('.case-study-card', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            }, '-=0.4');

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="case-study-header flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-violet-600 dark:text-violet-400 font-semibold tracking-wide uppercase text-sm mb-2 block">Proven Results</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">
                            We deliver impact, not just code.
                        </h2>
                    </div>
                    <Link to="/case-studies" className="hidden md:inline-flex items-center text-violet-600 dark:text-violet-400 font-semibold hover:text-violet-700 dark:hover:text-violet-300 transition-colors group">
                        View All Case Studies <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="case-study-card group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl dark:hover:shadow-violet-900/20 transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-video overflow-hidden bg-zinc-200 dark:bg-zinc-800 relative">
                                <div className="absolute inset-0 bg-violet-900/10 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/95 dark:bg-zinc-900/90 backdrop-blur text-xs font-bold text-violet-600 dark:text-violet-400 px-3 py-1.5 rounded-full uppercase tracking-wider z-20 shadow-sm border border-zinc-100 dark:border-zinc-800">
                                    {study.category}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                    {study.title}
                                </h3>
                                <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">{study.metricLabel}</p>
                                    <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">{study.metric}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/case-studies" className="inline-flex items-center text-violet-600 dark:text-violet-400 font-semibold hover:text-violet-700 dark:hover:text-violet-300 transition-colors group">
                        View All Case Studies <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
