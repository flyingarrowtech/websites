import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
    };

    handleGoHome = () => {
        this.setState({ hasError: false, error: null });
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center px-4">
                    <div className="max-w-md w-full text-center">
                        <div className="mb-8">
                            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
                            </div>
                            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                                Oops! Something went wrong
                            </h1>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                                We encountered an unexpected error. Don't worry, it's not your fault.
                            </p>
                            {this.state.error && (
                                <details className="mt-4 text-left">
                                    <summary className="cursor-pointer text-sm text-zinc-500 dark:text-zinc-500 hover:text-violet-600 dark:hover:text-violet-400">
                                        Technical details
                                    </summary>
                                    <pre className="mt-2 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-xs text-red-600 dark:text-red-400 overflow-auto">
                                        {this.state.error.toString()}
                                    </pre>
                                </details>
                            )}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={this.handleReset}
                                className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 transition-colors"
                            >
                                <RefreshCw className="w-5 h-5 mr-2" />
                                Try Again
                            </button>
                            <button
                                onClick={this.handleGoHome}
                                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
                            >
                                <Home className="w-5 h-5 mr-2" />
                                Go Home
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
