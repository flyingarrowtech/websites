import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export default function Legal() {
    const { type } = useParams();

    const titles: Record<string, string> = {
        'privacy': 'Privacy Policy',
        'terms': 'Terms of Service',
        'cookies': 'Cookie Policy',
    };

    const title = titles[type || 'privacy'] || 'Legal';

    return (
        <>
            <Helmet>
                <title>{title} - Agency</title>
            </Helmet>

            <section className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8">{title}</h1>
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 prose prose-zinc dark:prose-invert max-w-none transition-colors">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <p>
                            This is a placeholder for the <strong>{title}</strong>.
                            In a real production environment, this page would contain the full legal text prepared by your legal counsel.
                        </p>
                        <h3>1. Introduction</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <h3>2. Data Collection</h3>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        {/* Add more legal text here */}
                    </div>
                </div>
            </section>
        </>
    );
}
