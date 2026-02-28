import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function CaseStudyDetail() {
    const { slug } = useParams();
    const title = slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Case Study';

    return (
        <>
            <Helmet>
                <title>{title} - Case Study | {COMPANY_NAME}</title>
                <meta name="description" content={`A deep dive into how ${COMPANY_NAME} solved complex technical challenges for ${title}.`} />
            </Helmet>

            {/* Hero */}
            <section className="bg-zinc-50 dark:bg-zinc-950 pt-32 pb-20 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <Link to="/case-studies" className="inline-flex items-center text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
                    </Link>
                    <div className="max-w-4xl">
                        <span className="text-violet-600 dark:text-violet-400 font-semibold tracking-wide uppercase text-sm mb-4 block">SaaS Development</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
                            {title}: Scaling to 10k Users with Modern Architecture
                        </h1>
                        <div className="flex gap-8 text-zinc-600 dark:text-zinc-300">
                            <div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">Client</p>
                                <p className="font-semibold text-zinc-900 dark:text-white">BioTech Inc.</p>
                            </div>
                            <div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">Timeline</p>
                                <p className="font-semibold text-zinc-900 dark:text-white">4 Months</p>
                            </div>
                            <div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">Service</p>
                                <p className="font-semibold text-zinc-900 dark:text-white">Full Scale-up</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        <div className="lg:col-span-8 space-y-16">
                            <div>
                                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">The Challenge</h2>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    The client faced performance bottlenecks with their legacy MVP. As user base grew, database queries became slow, and the frontend was unresponsive. They needed a complete re-architecture without downtime.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Our Approach</h2>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                    We migrated the backend to a microservices architecture using Node.js and optimized the database schema.
                                </p>
                                <ul className="space-y-2">
                                    {['Audit existing codebase', 'Design scalable schema', 'Migrate data in phases', 'Implement caching layers'].map(step => (
                                        <li key={step} className="flex items-center text-zinc-700 dark:text-zinc-300">
                                            <CheckCircle className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-3" /> {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-zinc-50 dark:bg-zinc-800 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-700 transition-colors">
                                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Key Results</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div>
                                        <p className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">300%</p>
                                        <p className="text-zinc-600 dark:text-zinc-400 font-medium">Faster Query Time</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">99.9%</p>
                                        <p className="text-zinc-600 dark:text-zinc-400 font-medium">Uptime Guarantee</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">Zero</p>
                                        <p className="text-zinc-600 dark:text-zinc-400 font-medium">Data Loss</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="sticky top-24">
                                <img
                                    src="https://via.placeholder.com/400x600?text=Mobile+App+Mockup"
                                    alt="Project Mockup"
                                    className="rounded-2xl shadow-xl w-full mb-8"
                                />
                                <div className="bg-zinc-900 text-white p-8 rounded-2xl">
                                    <h3 className="text-xl font-bold mb-4">Need similar results?</h3>
                                    <p className="text-zinc-400 mb-6">
                                        Let's discuss how we can help you achieve your technical goals.
                                    </p>
                                    <Link to="/contact" className="block w-full bg-violet-600 text-center py-3 rounded-lg font-bold hover:bg-violet-700 transition-colors">
                                        Book a Call
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
