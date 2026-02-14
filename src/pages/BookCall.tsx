import { Helmet } from 'react-helmet-async';
// import { InlineWidget } from 'react-calendly';

export default function BookCall() {
    return (
        <>
            <Helmet>
                <title>Book a Strategy Call | Agency</title>
                <meta name="description" content="Schedule a free consultation with our SaaS experts to discuss your project." />
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

                        <div className="p-6 h-[700px]">
                            {/* Note: In a real implementation, you would need to install react-calendly or use an iframe */}
                            {/* For now, we will use a placeholder or assume the package is available/mocked */}
                            <div className="w-full h-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 transition-colors">
                                <div className="text-center">
                                    <p className="text-zinc-500 font-medium">Calendly Widget Area</p>
                                    <p className="text-xs text-zinc-400 mt-2">(Install react-calendly to render actual widget)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
