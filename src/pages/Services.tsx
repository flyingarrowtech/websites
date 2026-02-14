import { Helmet } from 'react-helmet-async';
import { Code2, Rocket, BrainCircuit, Users, CheckCircle, ArrowRight, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'mvp-development',
        icon: <Rocket className="w-12 h-12 text-violet-600" />,
        title: 'MVP Development',
        description: 'Launch your startup in weeks, not months. We focus on core value propositions to validate your idea fast.',
        features: ['Rapid Prototyping', 'User-Centric Design', 'Scalable Architecture', 'Go-to-Market Strategy'],
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'saas-development',
        icon: <Code2 className="w-12 h-12 text-fuchsia-600" />,
        title: 'SaaS Development',
        description: 'Enterprise-grade SaaS platforms built for scale, security, and performance.',
        features: ['Multi-tenant Architecture', 'API Development', 'Cloud Infrastructure', 'Payment Integration'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
    },
    {
        id: 'ai-integration',
        icon: <BrainCircuit className="w-12 h-12 text-pink-600" />,
        title: 'AI Automation & Integration',
        description: 'Leverage the power of LLMs and AI agents to automate workflows and enhance user experience.',
        features: ['Custom AI Agents', 'LLM Integration', 'Process Automation', 'Smart Analytics'],
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop'
    },
    {
        id: 'dedicated-teams',
        icon: <Users className="w-12 h-12 text-blue-600" />,
        title: 'Dedicated Engineering Teams',
        description: 'Extend your in-house capabilities with our senior developers who integrate seamlessly into your workflow.',
        features: ['Vetted Talent', 'Global Timezone Overlap', 'Agile Methodology', 'Complete IP Ownership'],
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'react-native-apps',
        icon: <Code2 className="w-12 h-12 text-teal-500" />,
        title: 'React Native App Development',
        description: 'Build native-like mobile applications for iOS and Android using a single codebase.',
        features: ['Cross-Platform Compatibility', 'Native Performance', 'Fast Development Cycle', 'Offline Support'],
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop'
    },
    {
        id: 'mern-stack-development',
        icon: <Database className="w-12 h-12 text-green-600" />,
        title: 'MERN Stack Web Development',
        description: 'Full-stack web applications using MongoDB, Express.js, React, and Node.js for modern, scalable solutions.',
        features: ['Single Page Applications', 'Real-time Data', 'RESTful APIs', 'High Performance'],
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop'
    },
];

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Services - Agency</title>
                <meta name="description" content="Explore our SaaS development, AI integration, and dedicated team services tailored for ambitious startups." />
            </Helmet>

            <section className="bg-zinc-50 dark:bg-zinc-950 pt-32 pb-20 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
                        Our Expertise
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        We provide end-to-end technical solutions to help you build, scale, and automate your business.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 gap-16">
                        {services.map((service, index) => (
                            <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1">
                                    <div className="mb-6 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 w-fit transition-colors">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">{service.title}</h2>
                                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-zinc-700 dark:text-zinc-300">
                                                <CheckCircle className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-3 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to={`/contact`}
                                        className="inline-flex items-center text-violet-600 dark:text-violet-400 font-bold hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                                    >
                                        Discuss your project <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="rounded-2xl overflow-hidden aspect-video w-full shadow-2xl shadow-violet-500/10">
                                        <img
                                            src={service.image}
                                            alt={`${service.title} Illustration`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-violet-600 py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Not sure what you need?
                    </h2>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-violet-600 px-8 py-4 rounded-lg font-bold hover:bg-violet-50 transition-colors shadow-lg"
                    >
                        Get a Free Consultation
                    </Link>
                </div>
            </section>
        </>
    );
}
