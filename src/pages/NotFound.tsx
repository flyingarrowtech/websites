import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 Not Found - Agency</title>
            </Helmet>
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
                <h1 className="text-6xl font-bold text-violet-600 dark:text-violet-500 mb-4">404</h1>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Page Not Found</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                </p>
                <Link to="/" className="inline-flex items-center bg-violet-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-violet-700 transition-colors">
                    <Home className="w-5 h-5 mr-2" />
                    Back to Home
                </Link>
            </div>
        </>
    );
}
