import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function BookCall() {
    const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

    return (
        <>
            <Helmet>
                <title>Book a Strategy Call | {COMPANY_NAME}</title>
                <meta name="description" content={`Schedule a free consultation with ${COMPANY_NAME}'s SaaS experts to discuss your technical roadmap and scaling strategy.`} />
            </Helmet>

            <div className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden transition-colors duration-300">
                        <div className="p-8 md:p-12 text-center border-b border-zinc-100 dark:border-zinc-800">
                            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Book Your Free Discovery Call</h1>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400">
                                Let's discuss your SaaS idea and how we can bring it to life.
                            </p>
                        </div>

                        <div className="p-12 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 mb-8">
                                <MessageSquare className="w-10 h-10" />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Ready to get started?</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
                                We've moved our booking process to a direct inquiry system to better serve our clients. Please fill out our contact form, and we'll reach out to schedule your call.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg transition-all group"
                            >
                                Contact Us to Schedule
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
