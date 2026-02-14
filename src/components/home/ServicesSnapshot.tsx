
import { Code2, Rocket, BrainCircuit, Users, Database } from 'lucide-react';
import { useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: Rocket,
        title: 'MVP Development',
        description: 'Go from idea to market-ready product in weeks, not months. We build scalable foundations.',
    },
    {
        icon: Code2,
        title: 'SaaS Development',
        description: 'Full-cycle SaaS development with modern tech stacks designed for high performance.',
    },
    {
        icon: BrainCircuit,
        title: 'AI Automation',
        description: 'Integrate LLMs and custom AI agents to automate workflows and add intelligence.',
    },
    {
        icon: Users,
        title: 'Dedicated Teams',
        description: 'Scale your engineering capacity with senior developers who integrate seamlessy.',
    },
    {
        icon: Code2,
        title: 'React Native Apps',
        description: 'Native-like mobile experiences for iOS and Android from a single codebase.',
    },
    {
        icon: Database,
        title: 'MERN Stack Dev',
        description: 'Full-stack web applications using MongoDB, Express, React, and Node.js.',
    },
];

export default function ServicesSnapshot() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.service-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover opacity-5"
                />
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                        Everything you need to <span className="text-violet-600 dark:text-violet-400">scale</span>
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300">
                        From rapid MVP validation to enterprise-grade AI integration, we provide the technical expertise to fuel your growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="service-card bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-zinc-100 dark:border-zinc-800 group"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-violet-50 dark:bg-violet-900/20 w-fit group-hover:bg-violet-600 dark:group-hover:bg-violet-600 transition-colors duration-300">
                                <service.icon className="w-8 h-8 text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{service.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
