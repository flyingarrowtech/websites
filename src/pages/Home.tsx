import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import SocialProof from '../components/home/SocialProof';
import ServicesSnapshot from '../components/home/ServicesSnapshot';
import Differentiation from '../components/home/Differentiation';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';
import PageTransition from '../components/ui/PageTransition';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function Home() {
    return (
        <PageTransition>
            <Helmet>
                <title>{COMPANY_NAME} - Premium SaaS & AI Development</title>
                <meta name="description" content={`${COMPANY_NAME} helps ambitious startups design, develop, and scale high-fidelity SaaS products using modern web technologies and AI integration. Elite engineering, accelerated.`} />
            </Helmet>

            <Hero />
            <SocialProof />
            <ServicesSnapshot />
            <Differentiation />
            <CaseStudiesPreview />
            <FAQ />
            <CTA />
        </PageTransition>
    );
}
