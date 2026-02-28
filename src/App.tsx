import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingFallback from './components/LoadingFallback';
import './App.css';

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const Industries = lazy(() => import('./pages/Industries'));
const About = lazy(() => import('./pages/About'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Process = lazy(() => import('./pages/Process'));
const Blog = lazy(() => import('./pages/Blog'));
const BookCall = lazy(() => import('./pages/BookCall'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const NdaRequest = lazy(() => import('./pages/NdaRequest'));
const Careers = lazy(() => import('./pages/Careers'));
const JobDetail = lazy(() => import('./pages/JobDetail'));

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <MainLayout>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/process" element={<Process />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/book-call" element={<BookCall />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/request-nda" element={<NdaRequest />} />
                <Route path="/legal/:type" element={<Legal />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/:id" element={<JobDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </MainLayout>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App
