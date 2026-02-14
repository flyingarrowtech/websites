export default function LoadingFallback() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center">
            <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 border-4 border-violet-200 dark:border-violet-900 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-violet-600 dark:border-violet-400 rounded-full border-t-transparent animate-spin"></div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium">Loading...</p>
            </div>
        </div>
    );
}
