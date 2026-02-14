import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);
    return (
        <>
            <Helmet>
                <title>Contact Us - Agency</title>
                <meta name="description" content="Book a free strategy call with our expert team to discuss your SaaS or AI project." />
            </Helmet>

            <section className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                        Let's Build Something Great
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Ready to start? Book a free 30-minute strategy call to discuss your project.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-white dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-violet-50 dark:bg-violet-900/20 p-8 rounded-2xl transition-colors">
                                <h3 className="text-2xl font-bold text-violet-900 dark:text-violet-200 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <Mail className="w-6 h-6 text-violet-600 dark:text-violet-400 mt-1 mr-4" />
                                        <div>
                                            <p className="font-semibold text-zinc-900 dark:text-white">Email Us</p>
                                            <a href="mailto:hello@agency.com" className="text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400">hello@agency.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <MapPin className="w-6 h-6 text-violet-600 dark:text-violet-400 mt-1 mr-4" />
                                        <div>
                                            <p className="font-semibold text-zinc-900 dark:text-white">Office</p>
                                            <p className="text-zinc-600 dark:text-zinc-400">Semari, Marihan<br />Mirzapur, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="w-6 h-6 text-violet-600 dark:text-violet-400 mt-1 mr-4" />
                                        <div>
                                            <p className="font-semibold text-zinc-900 dark:text-white">Call Us</p>
                                            <a href="tel:+15551234567" className="text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400">+1 (555) 123-4567</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Why Book a Call?</h3>
                                <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                                    <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full mr-3"></span>Get a rough estimate on timeline and budget</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full mr-3"></span>Discuss technical feasibility</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full mr-3"></span>See relevant case studies</li>
                                </ul>
                            </div>
                        </div>

                        {/* Calendly Embed */}
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden transition-colors">
                            <div
                                className="calendly-inline-widget"
                                data-url="https://calendly.com/d/demo/30min?primary_color=7c3aed"
                                style={{ minWidth: '320px', height: '700px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
