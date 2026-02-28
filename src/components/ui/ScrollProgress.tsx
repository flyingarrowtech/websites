
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll progress animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 origin-left z-[100]"
            style={{ scaleX }}
        />
    );
}
