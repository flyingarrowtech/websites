import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
    {
        id: 'fintech-dashboard',
        title: 'FinTech Analytics Dashboard',
        category: 'SaaS Development',
        description: 'Built a real-time analytics dashboard for a high-growth FinTech startup, processing millions of transactions daily.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71', // Data dashboard
        results: ['200% Increase in User Engagement', 'Sub-second Data Latency', 'SOC2 Compliant Architecture'],
    },
    {
        id: 'health-ai',
        title: 'AI Diagnostic Assistant',
        category: 'AI Integration',
        description: 'Developed an AI-powered diagnostic tool for healthcare providers to assist in early detection of anomalies.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d', // Medical technology
        results: ['98% Diagnostic Accuracy', 'HIPAA Compliant', 'Reduced Review Time by 40%'],
    },
    {
        id: 'ecommerce-scale',
        title: 'E-commerce Platform Migration',
        category: 'Dedicated Team',
        description: 'Led the migration of a legacy e-commerce platform to a modern headless architecture for a global retailer.',
        image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad', // Alternative Shopping/Payment image
        results: ['40% Faster Page Loads', '30% Increase in Conversion', 'Zero Downtime Migration'],
    },
    {
        id: 'edtech-lms',
        title: 'Adaptive Learning LMS',
        category: 'EdTech',
        description: 'Created a personalized learning management system that adapts content based on student performance.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8', // Education/Learning
        results: ['50k+ Active Students', '15% Improvement in Test Scores', 'Scalable Video Streaming'],
    },
];

export default function CaseStudies() {
    return (
        <>
            <Helmet>
                <title>Case Studies - Agency</title>
                <meta name="description" content="View our portfolio of successful projects for startups in FinTech, HealthTech, and more." />
            </Helmet>

            <section className="bg-zinc-50 dark:bg-zinc-950 pt-32 pb-20 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
                        Our Work
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        See how we've helped ambitious founders solve complex problems and drive measurable growth.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {caseStudies.map((study) => (
                            <div key={study.id} className="group cursor-pointer">
                                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden aspect-[4/3] mb-6 relative">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-violet-600 uppercase tracking-wider">
                                        {study.category}
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                    {study.title}
                                    <ArrowUpRight className="w-5 h-5 ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                </h2>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-2">
                                    {study.description}
                                </p>
                                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4">
                                    <ul className="space-y-2">
                                        {study.results.map((result, i) => (
                                            <li key={i} className="text-sm font-medium text-zinc-800 dark:text-zinc-200 flex items-center">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-zinc-950 text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-white mb-6">Have a similar project in mind?</h2>
                    <Link
                        to="/contact"
                        className="inline-block bg-violet-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-violet-700 transition-colors"
                    >
                        Let's Discuss It
                    </Link>
                </div>
            </section>
        </>
    );
}
