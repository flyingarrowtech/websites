import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingOverlay from '../components/ui/LoadingOverlay';

export default function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const webhookUrl = import.meta.env.VITE_FORM_WEBHOOK_URL;

        if (webhookUrl) {
            try {
                const data = { ...formData, formType: 'Contact' };
                await fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
            } catch (error) {
                console.error('Submission error:', error);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            // Simulate delay if no webhook
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsSubmitting(false);
        }

        navigate('/thank-you');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const companyName = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

    return (
        <>
            <Helmet>
                <title>Contact {companyName} - Start Your Next Project</title>
                <meta name="description" content={`Ready to build something legendary? Contact ${companyName} to discuss your SaaS or AI project with our expert engineering team.`} />
            </Helmet>

            <LoadingOverlay isVisible={isSubmitting} message="Syncing with Command..." />

            <section className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                        Let's Build Something Great
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Ready to start? Send us a message and we'll get back to you within 24 hours.
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
                                            <a href={`mailto:zyentric@gmail.com`} className="text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400">
                                                zyentric@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <MapPin className="w-6 h-6 text-violet-600 dark:text-violet-400 mt-1 mr-4" />
                                        <div>
                                            <p className="font-semibold text-zinc-900 dark:text-white">Office</p>
                                            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Rajgarh, Mirzapur<br />Uttar Pradesh, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="w-6 h-6 text-violet-600 dark:text-violet-400 mt-1 mr-4" />
                                        <div>
                                            <p className="font-semibold text-zinc-900 dark:text-white">Call Us</p>
                                            <a href="tel:+919026960933" className="text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400">+91 9026 960 933</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">How we help?</h3>
                                <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                                    <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full mr-3"></span>Get a rough estimate on timeline and budget</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full mr-3"></span>Discuss technical feasibility of your idea</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full mr-3"></span>Plan your MVP and scaling strategy</li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-colors">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-zinc-900 dark:text-white">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-zinc-900 dark:text-white">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-zinc-900 dark:text-white">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 outline-none transition-all"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-zinc-900 dark:text-white">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 outline-none transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg flex items-center justify-center transition-all group"
                                >
                                    Send Message
                                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
