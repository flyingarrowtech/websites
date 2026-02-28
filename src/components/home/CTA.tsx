
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const blob1Y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const blob1Rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const blob2Y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const blob2Rotate = useTransform(scrollYProgress, [0, 1], [0, -90]);

    return (
        <section ref={containerRef} className="py-24 bg-zinc-900 relative overflow-hidden">
            {/* Background Elements */}
            <motion.div
                style={{ y: blob1Y, rotate: blob1Rotate }}
                className="absolute top-0 right-0 w-1/3 h-full bg-violet-600/20 blur-3xl rounded-full translate-x-1/2"
            />
            <motion.div
                style={{ y: blob2Y, rotate: blob2Rotate }}
                className="absolute bottom-0 left-0 w-1/3 h-full bg-fuchsia-600/20 blur-3xl rounded-full -translate-x-1/2"
            />

            <motion.div
                className="container mx-auto px-4 md:px-6 relative z-10 text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                    Ready to scale your vision?
                </h2>
                <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
                    Stop struggling with hiring and technical debt. Partner with a team that delivers velocity and quality.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/book-call"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-zinc-900 transition-all bg-white rounded-lg hover:bg-zinc-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                    >
                        Book Your Free Strategy Call
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
                <p className="mt-6 text-sm text-zinc-500">
                    No commitment required. 100% free consultation.
                </p>
            </motion.div>
        </section>
    );
}
