import { Helmet } from 'react-helmet-async';
import { Code2, Rocket, BrainCircuit, Users, CheckCircle, ArrowRight, Database, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

const services = [
    {
        id: 'mvp-development',
        icon: <Rocket className="w-10 h-10 text-white" />,
        title: 'MVP Development',
        description: 'Launch your startup in weeks, not months. We focus on core value propositions to validate your idea fast and efficiently.',
        features: ['Rapid Prototyping', 'User-Centric Design', 'Scalable Architecture', 'Go-to-Market Strategy'],
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        color: 'from-blue-600 to-violet-600'
    },
    {
        id: 'saas-development',
        icon: <Code2 className="w-10 h-10 text-white" />,
        title: 'SaaS Development',
        description: 'Enterprise-grade SaaS platforms built for extreme scale, security, and world-class performance.',
        features: ['Multi-tenant Architecture', 'API-First Development', 'Cloud Infrastructure', 'Payment Integration'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        color: 'from-violet-600 to-fuchsia-600'
    },
    {
        id: 'ai-integration',
        icon: <BrainCircuit className="w-10 h-10 text-white" />,
        title: 'AI Automation',
        description: 'Leverage the power of LLMs and custom AI agents to automate complex workflows and 10x your output.',
        features: ['Custom AI Agents', 'LLM Integration', 'Process Automation', 'Smart Analytics'],
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
        color: 'from-fuchsia-600 to-pink-600'
    },
    {
        id: 'dedicated-teams',
        icon: <Users className="w-10 h-10 text-white" />,
        title: 'Engineering Teams',
        description: 'Extend your in-house capabilities with our senior developers who integrate seamlessly into your existing stack.',
        features: ['Senior Vetted Talent', 'Global Timezone Overlap', 'Agile Methodology', 'Complete IP Ownership'],
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
        color: 'from-pink-600 to-rose-600'
    },
    {
        id: 'react-native-apps',
        icon: <Sparkles className="w-10 h-10 text-white" />,
        title: 'React Native Apps',
        description: 'Build native-performance mobile applications for iOS and Android using a clean, unified codebase.',
        features: ['Cross-Platform Unity', 'Native Performance', 'Fast Iteration Cycle', 'Offline-First Support'],
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
        color: 'from-rose-600 to-orange-600'
    },
    {
        id: 'mern-stack-development',
        icon: <Database className="w-10 h-10 text-white" />,
        title: 'MERN Stack Web',
        description: 'Robust full-stack web applications using the modern MERN stack for high-performance interactive sessions.',
        features: ['Modern SPAs', 'Real-time WebSocket Data', 'RESTful/GraphQL APIs', 'Optimized Backends'],
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        color: 'from-orange-600 to-amber-600'
    },
];

export default function Services() {
    return (
        <div className="bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
            <Helmet>
                <title>Services - {COMPANY_NAME}</title>
                <meta name="description" content={`Explore our specialized engineering services including MVP development, AI automation, and dedicated teams at ${COMPANY_NAME}.`} />
            </Helmet>

            {/* Header Section */}
            <section className="relative pt-40 pb-20 bg-zinc-50 dark:bg-zinc-950/50">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-violet-500/5 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-fuchsia-500/5 blur-[100px] rounded-full" />
                </div>

                <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-violet-200 dark:border-violet-800"
                    >
                        Capabilities
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-8 tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Expertise</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed">
                        Precision engineering for the most ambitious founders. We turn complex technical challenges into competitive advantages.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 w-full">
                                    <div className={`mb-8 p-5 rounded-2xl bg-gradient-to-br ${service.color} w-fit shadow-2xl shadow-violet-500/20`}>
                                        {service.icon}
                                    </div>
                                    <h2 className="text-4xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight">{service.title}</h2>
                                    <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-zinc-700 dark:text-zinc-200 font-bold text-sm">
                                                <div className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center mr-3 flex-shrink-0">
                                                    <CheckCircle className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-4">
                                        <Link
                                            to={`/services/${service.id}`}
                                            className="group inline-flex items-center px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-sm uppercase tracking-widest transition-all hover:bg-violet-600 dark:hover:bg-violet-400 dark:hover:text-white hover:shadow-xl hover:shadow-violet-500/20"
                                        >
                                            Explore Solutions
                                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="group inline-flex items-center px-8 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-black text-sm uppercase tracking-widest transition-all hover:border-violet-500 hover:text-violet-600"
                                        >
                                            Inquire Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex-1 w-full relative group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition-opacity animate-pulse-glow`} />
                                    <div className="relative rounded-3xl overflow-hidden aspect-[16/10] w-full border border-zinc-200 dark:border-zinc-800 shadow-2xl">
                                        <img
                                            src={service.image}
                                            alt={`${service.title} Illustration`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-700" />
                <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 skew-x-12 translate-x-1/2" />
                <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
                        Ready to accelerate your <br /> <span className="underline decoration-white/30">product roadmap</span>?
                    </h2>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-10 py-5 bg-white text-zinc-900 rounded-full font-black text-lg uppercase tracking-widest transition-all hover:scale-110 hover:shadow-2xl active:scale-95 group"
                    >
                        Get Free Consultation
                        <Sparkles className="w-6 h-6 ml-3 text-violet-600 group-hover:rotate-12 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
