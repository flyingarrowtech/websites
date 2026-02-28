import { Helmet } from 'react-helmet-async';
import { Landmark, HeartPulse, GraduationCap, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
    {
        icon: <Landmark className="w-12 h-12 text-violet-600" />,
        title: 'FinTech',
        description: 'We build secure, compliant, and high-performance financial platforms. From payment gateways to trading algorithms, we handle the complexity.',
        features: ['PCI DSS Compliance', 'Real-time Analytics', 'Blockchain Integration'],
    },
    {
        icon: <HeartPulse className="w-12 h-12 text-red-500" />,
        title: 'HealthTech',
        description: 'HIPAA-compliant solutions that improve patient outcomes and streamline operations for healthcare providers.',
        features: ['Telemedicine Platforms', 'EHR Integration', 'AI Diagnostics'],
    },
    {
        icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
        title: 'EdTech',
        description: 'Scalable learning management systems and interactive educational tools that engage students and empower educators.',
        features: ['LMS Development', 'Video Streaming', 'Gamification'],
    },
    {
        icon: <ShoppingBag className="w-12 h-12 text-emerald-500" />,
        title: 'E-commerce',
        description: 'High-conversion e-commerce experiences and headless solutions for modern retail brands.',
        features: ['Headless Shopify', 'Custom Cart Logic', 'Inventory Management'],
    },
];

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function Industries() {
    return (
        <>
            <Helmet>
                <title>Specialized Industries | {COMPANY_NAME} Expertise</title>
                <meta name="description" content={`${COMPANY_NAME} delivers deep domain expertise in FinTech, HealthTech, EdTech, and E-commerce. We build high-performance, compliant software for modern industries.`} />
            </Helmet>

            <section className="bg-zinc-50 dark:bg-zinc-950 pt-32 pb-20 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
                        Industries
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Deep domain expertise where it matters most.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {industries.map((industry) => (
                            <div key={industry.title} className="p-8 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:shadow-xl transition-all">
                                <div className="mb-6 p-4 rounded-full bg-zinc-50 dark:bg-zinc-800 w-fit transition-colors">
                                    {industry.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{industry.title}</h2>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                                    {industry.description}
                                </p>
                                <ul className="space-y-2 mb-8">
                                    {industry.features.map((feature) => (
                                        <li key={feature} className="text-zinc-500 dark:text-zinc-400 text-sm font-medium bg-zinc-50 dark:bg-zinc-800 inline-block px-3 py-1 rounded-full mr-2 mb-2 transition-colors">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="text-violet-600 dark:text-violet-400 font-bold hover:underline">
                                    View Solutions
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
