import { Helmet } from 'react-helmet-async';
import { Linkedin } from 'lucide-react';

import { useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Story Section Animation
        gsap.from('.story-content', {
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
                trigger: '.story-section',
                start: 'top 70%',
            }
        });

        gsap.from('.story-image', {
            opacity: 0,
            x: 50,
            duration: 1,
            scrollTrigger: {
                trigger: '.story-section',
                start: 'top 70%',
            }
        });

        // Team Cards Animation
        gsap.from('.team-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.team-card',
                start: 'top 85%',
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef}>
            <Helmet>
                <title>About Us - Agency</title>
                <meta name="description" content="Meet the team behind Agency. Expert leadership with global engineering talent." />
            </Helmet>

            <section className="bg-zinc-50 dark:bg-zinc-950 pt-32 pb-20 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
                        About Agency.
                    </h1>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                        We are a team of expert product strategists and global engineers dedicated to building the next generation of SaaS.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="story-section flex flex-col md:flex-row gap-16 items-center">
                        <div className="story-content flex-1">
                            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Our Story</h2>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                Founded in 2024, Agency was born from a simple observation: Startups struggle to find reliable, high-quality engineering partners who understand their business context.
                            </p>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                We bridge that gap by combining expert project management and product strategy with elite global engineering talent. This hybrid model ensures you get the best of both worlds: clear communication, aligned incentives, and cost-effective execution.
                            </p>
                            <div className="grid grid-cols-2 gap-8 mt-12">
                                <div>
                                    <h3 className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">50+</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">Projects Delivered</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">95%</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">Client Retention</p>
                                </div>
                            </div>
                        </div>
                        <div className="story-image flex-1">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Our Team"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Sarthak Singh', role: 'Founder & CEO, B.Tech', initials: 'SS', bgColor: 'bg-violet-600' },
                            { name: 'Sarthak Singh', role: 'Chief Technology Officer', initials: 'SS', bgColor: 'bg-blue-600' },
                            { name: 'Sarthak Singh', role: 'Head of Product', initials: 'SS', bgColor: 'bg-fuchsia-600' },
                        ].map((member, index) => (
                            <div key={`${member.name}-${index}`} className="team-card bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm text-center transition-all hover:shadow-xl duration-300 border border-zinc-100 dark:border-zinc-800">
                                <div className={`w-32 h-32 rounded-full mx-auto mb-6 ${member.bgColor} flex items-center justify-center ring-4 ring-violet-100 dark:ring-violet-900/30`}>
                                    <span className="text-4xl font-bold text-white">{member.initials}</span>
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{member.name}</h3>
                                <p className="text-violet-600 dark:text-violet-400 mb-4 font-medium">{member.role}</p>
                                <a href="#" className="inline-flex items-center text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
