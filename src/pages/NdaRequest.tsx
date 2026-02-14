import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Shield } from 'lucide-react';

export default function NdaRequest() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Handle form submission logic here
    };

    return (
        <>
            <Helmet>
                <title>Request NDA | Agency</title>
                <meta name="description" content="Your IP is safe with us. Request a signed NDA before sharing your project details." />
            </Helmet>

            <div className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden transition-colors">
                        <div className="bg-zinc-900 p-8 text-center">
                            <Shield className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                            <h1 className="text-3xl font-bold text-white mb-2">Intellectual Property Protection</h1>
                            <p className="text-zinc-400">
                                We understand the value of your ideas. We are happy to sign an NDA before our first call.
                            </p>
                        </div>

                        <div className="p-8">
                            {submitted ? (
                                <div className="text-center py-8">
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Request Received</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">Check your email for the signed NDA document.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                                            Business Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all"
                                            placeholder="you@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 transition-colors shadow-lg hover:shadow-violet-500/30"
                                    >
                                        Send me the NDA
                                    </button>

                                    <p className="text-xs text-center text-zinc-500 mt-4">
                                        By submitting this form, you agree to our Privacy Policy.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
