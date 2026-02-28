import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Code2, Database, Layout } from 'lucide-react';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function ServiceDetail() {
    const { slug } = useParams();

    // In a real app, fetch data based on slug. Using placeholder data.
    const serviceTitle = slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Service Detail';

    const images: Record<string, string> = {
        'mvp-development': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        'saas-development': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        'ai-integration': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
        'dedicated-teams': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
        'react-native-apps': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
        'mern-stack-development': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    };

    const currentImage = slug && images[slug] ? images[slug] : images['mvp-development'];

    return (
        <>
            <Helmet>
                <title>{serviceTitle} - {COMPANY_NAME}</title>
                <meta name="description" content={`Deep dive into ${serviceTitle} at ${COMPANY_NAME}. High-fidelity software engineering for ambitious founders.`} />
            </Helmet>

            <section className="bg-zinc-50 dark:bg-zinc-950 pt-32 pb-20 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <Link to="/services" className="inline-flex items-center text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
                                {serviceTitle}
                            </h1>
                            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
                                Comprehensive solutions tailored to your business goals.
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto h-64 lg:h-80">
                            <img
                                src={currentImage}
                                alt={serviceTitle}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Problem & Solution */}
                            <div>
                                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">The Challenge</h2>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                    Startups often struggle with technical debt, scalability issues, or lack of specialized AI expertise.
                                    Building internally is slow and expensive.
                                </p>
                                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Our Solution</h2>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                    We provide a dedicated, high-velocity engineering team that integrates seamlessly with your product vision.
                                    Using modern stacks and AI-first methodologies, we deliver scalable software faster.
                                </p>
                            </div>

                            {/* Deliverables */}
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">What We Deliver</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {['Scalable Architecture', 'Clean, Documented Code', 'Automated Testing', 'CI/CD Pipelines'].map((item) => (
                                        <li key={item} className="flex items-center text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg transition-colors">
                                            <Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Technology Stack</h3>
                                <div className="flex flex-wrap gap-4 text-zinc-700 dark:text-zinc-300">
                                    <div className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 transition-colors">
                                        <Layout className="w-5 h-5 text-blue-500" /> React / Next.js
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 transition-colors">
                                        <Code2 className="w-5 h-5 text-green-500" /> Node.js / Python
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 transition-colors">
                                        <Database className="w-5 h-5 text-purple-500" /> PostgreSQL / MongoDB
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar CTA */}
                        <div className="lg:col-span-1">
                            <div className="bg-zinc-50 dark:bg-zinc-800 p-8 rounded-2xl sticky top-24 border border-zinc-100 dark:border-zinc-700 transition-colors">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Ready to get started?</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                                    Book a free strategy call to discuss your {serviceTitle.toLowerCase()} needs.
                                </p>
                                <Link to="/contact" className="block w-full bg-violet-600 text-white text-center py-4 rounded-lg font-bold hover:bg-violet-700 transition-colors">
                                    Book a Strategy Call
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
