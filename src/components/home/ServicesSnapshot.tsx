
import { Code2, Rocket, BrainCircuit, Users, Database, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
    {
        id: 'mvp-development',
        icon: Rocket,
        title: 'MVP Development',
        description: 'Go from idea to market-ready product in weeks. We build the scalable foundation your startup needs to thrive.',
        color: 'from-blue-500 to-violet-500'
    },
    {
        id: 'saas-development',
        icon: Code2,
        title: 'SaaS Development',
        description: 'Full-cycle SaaS development with modern tech stacks. Multi-tenant architecture and seamless scaling.',
        color: 'from-violet-500 to-fuchsia-500'
    },
    {
        id: 'ai-integration',
        icon: BrainCircuit,
        title: 'AI Automation',
        description: 'Integrate custom LLMs and AI agents into your business. Optimize workflows with intelligent automation.',
        color: 'from-fuchsia-500 to-pink-500'
    },
    {
        id: 'dedicated-teams',
        icon: Users,
        title: 'Dedicated Teams',
        description: 'Augment your capacity with senior engineers. We integrate seamlessly into your existing workflows.',
        color: 'from-pink-500 to-rose-500'
    },
    {
        id: 'react-native-apps',
        icon: Sparkles,
        title: 'React Native Apps',
        description: 'Native-quality cross-platform mobile apps. One codebase for iOS and Android without compromise.',
        color: 'from-rose-500 to-orange-500'
    },
    {
        id: 'mern-stack-development',
        icon: Database,
        title: 'MERN Stack Dev',
        description: 'Robust full-stack applications. High-performance backends and interactive, modern frontends.',
        color: 'from-orange-500 to-amber-500'
    },
];

export default function ServicesSnapshot() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };


    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-500">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-xs font-bold mb-6 tracking-widest uppercase"
                    >
                        Our Expertise
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight">
                        Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">scale</span>
                    </h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">
                        Focused on velocity, quality, and results. We provide the technical leverage that founders dream of.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="group p-8 rounded-3xl glass dark:glass-dark hover:animate-pulse-glow transition-all duration-500 relative overflow-hidden block"
                        >
                            {/* Card Background Gradient on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                            <div className={`mb-8 p-4 rounded-2xl bg-gradient-to-br ${service.color} w-fit shadow-lg shadow-zinc-500/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                <service.icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                                {service.description}
                            </p>

                            {/* Subtle Action Link */}
                            <div className="mt-8 flex items-center text-xs font-bold text-violet-600 dark:text-violet-400 tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                View Details
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
