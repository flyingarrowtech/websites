
import { Helmet } from 'react-helmet-async';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
    return (
        <>
            <Helmet>
                <title>Pricing - Agency</title>
                <meta name="description" content="Transparent pricing models for SaaS development and dedicated engineering teams." />
            </Helmet>

            <section className="bg-zinc-50 dark:bg-zinc-950 pt-32 pb-20 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Choose the engagement model that fits your stage and budget.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* MVP / Project Based */}
                        <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-violet-200 dark:hover:border-violet-800 transition-colors bg-white dark:bg-zinc-900">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">MVP / Fixed Scope</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-6 h-12">Perfect for validating ideas and launching initial versions.</p>
                            <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                                Custom Quote
                                <span className="text-sm font-normal text-zinc-500 dark:text-zinc-500 block">Based on requirements</span>
                            </div>
                            <Link to="/contact" className="block w-full py-3 px-6 border border-violet-600 text-violet-600 font-bold text-center rounded-lg hover:bg-violet-50 transition-colors mb-8">
                                Get Estimate
                            </Link>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start text-zinc-700 dark:text-zinc-300"><Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2 shrink-0" /> Fixed timeline & budget</li>
                                <li className="flex items-start text-zinc-700 dark:text-zinc-300"><Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2 shrink-0" /> Clear deliverables</li>
                                <li className="flex items-start text-zinc-700 dark:text-zinc-300"><Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2 shrink-0" /> Project management included</li>
                                <li className="flex items-start text-zinc-700 dark:text-zinc-300"><Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2 shrink-0" /> Milestone-based payments</li>
                                <li className="flex items-start text-zinc-700 dark:text-zinc-300"><Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2 shrink-0" /> 30-day bug fix support</li>
                            </ul>
                        </div>

                        {/* Hybrid / Retainer - Recommended */}
                        <div className="p-8 rounded-2xl border-2 border-violet-600 bg-violet-50/50 dark:bg-violet-900/10 relative transform md:-translate-y-4 shadow-xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-4 py-1 rounded-b-lg text-sm font-bold uppercase tracking-wide">
                                Most Popular
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 mt-4">Hybrid Retainer</h3>
                            <p className="text-zinc-600 dark:text-zinc-300 mb-6 h-12">Flexible resources for growing products. Scale up or down.</p>
                            <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                                $4,000+
                                <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400 block">per month / dev</span>
                            </div>
                            <Link to="/contact" className="block w-full py-3 px-6 bg-violet-600 text-white font-bold text-center rounded-lg hover:bg-violet-700 transition-colors mb-8 shadow-lg hover:shadow-xl">
                                Start Hybrid Team
                            </Link>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start text-zinc-700 dark:text-zinc-200"><Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2 shrink-0" /> Dedicated engineers</li>
                                <li className="flex items-start text-zinc-700 dark:text-zinc-200"><Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2 shrink-0" /> Flex up/down monthly</li>
                                <li className="flex items-start text-zinc-700 dark:text-zinc-200"><Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2 shrink-0" /> Direct Slack access</li>
                                <li className="flex items-start text-zinc-700 dark:text-zinc-200"><Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2 shrink-0" /> Senior Lead Architect</li>
                            </ul>
                        </div>

                        {/* Enterprise */}
                        <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-violet-200 dark:hover:border-violet-800 transition-colors bg-white dark:bg-zinc-900">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Dedicated Team</h3>
                            <p className="text-zinc-600 mb-6 h-12">Full engineering pod for scale-ups and enterprises.</p>
                            <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                                Contact Us
                                <span className="text-sm font-normal text-zinc-500 block">Volume pricing</span>
                            </div>
                            <Link to="/contact" className="block w-full py-3 px-6 border border-zinc-300 text-zinc-700 font-bold text-center rounded-lg hover:bg-zinc-50 transition-colors mb-8">
                                Contact Sales
                            </Link>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start text-zinc-700 dark:text-zinc-300"><Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2 shrink-0" /> Full cross-functional pod</li>
                                <li className="flex items-start text-zinc-700 dark:text-zinc-300"><Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2 shrink-0" /> QA & DevOps included</li>
                                <li className="flex items-start text-zinc-700 dark:text-zinc-300"><Check className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2 shrink-0" /> SLA & 24/7 Support</li>
                            </ul>
                        </div>

                    </div>

                    <div className="text-center mt-16 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">What affects the cost?</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                            Pricing depends on tech stack complexity, team seniority, and timeline urgency.
                            We always provide a detailed breakdown before starting.
                        </p>
                        <Link to="/faq" className="text-violet-600 dark:text-violet-400 font-bold hover:underline inline-flex items-center">
                            Read our FAQs <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
