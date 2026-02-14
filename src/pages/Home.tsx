import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import SocialProof from '../components/home/SocialProof';
import ServicesSnapshot from '../components/home/ServicesSnapshot';
import Differentiation from '../components/home/Differentiation';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Agency - Modern SaaS & AI Development</title>
                <meta name="description" content="We help ambitious startups design, develop, and scale SaaS products using modern web technologies and AI integration. Focus on growth while we handle the tech." />
            </Helmet>

            <Hero />
            <SocialProof />
            <ServicesSnapshot />
            <Differentiation />
            <CaseStudiesPreview />
            <FAQ />
            <CTA />
        </>
    );
}
