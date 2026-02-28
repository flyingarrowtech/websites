import type { ReactNode } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/ui/ScrollToTop';
import ScrollProgress from '../components/ui/ScrollProgress';

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
