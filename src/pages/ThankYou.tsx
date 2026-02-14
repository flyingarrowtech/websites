import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
    return (
        <>
            <Helmet>
                <title>Thank You | Agency</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 transition-colors duration-300">
                <div className="max-w-md w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 text-center transition-colors">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-500" />
                    </div>

                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Message Sent!</h1>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                        Thanks for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                    </p>

                    <div className="space-y-4">
                        <Link
                            to="/"
                            className="block w-full py-3 px-4 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors"
                        >
                            Back to Home
                        </Link>
                        <Link
                            to="/blog"
                            className="block w-full py-3 px-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
                        >
                            Read Our Blog
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
