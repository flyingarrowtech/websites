
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const blob1Ref = useRef<HTMLDivElement>(null);
    const blob2Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate blobs
        gsap.to(blob1Ref.current, {
            y: 100,
            rotation: 90,
            scrollTrigger: {
                trigger: containerRef.current,
                scrub: 1,
            }
        });
        gsap.to(blob2Ref.current, {
            y: -100,
            rotation: -90,
            scrollTrigger: {
                trigger: containerRef.current,
                scrub: 1,
            }
        });

        // Animate content
        gsap.from('.cta-content', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-zinc-900 relative overflow-hidden">
            {/* Background Elements */}
            <div ref={blob1Ref} className="absolute top-0 right-0 w-1/3 h-full bg-violet-600/20 blur-3xl rounded-full translate-x-1/2" />
            <div ref={blob2Ref} className="absolute bottom-0 left-0 w-1/3 h-full bg-fuchsia-600/20 blur-3xl rounded-full -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center cta-content">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                    Ready to scale your vision?
                </h2>
                <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
                    Stop struggling with hiring and technical debt. Partner with a team that delivers velocity and quality.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-zinc-900 transition-all bg-white rounded-lg hover:bg-zinc-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                    >
                        Book Your Free Strategy Call
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
                <p className="mt-6 text-sm text-zinc-500">
                    No commitment required. 100% free consultation.
                </p>
            </div>
        </section>
    );
}
