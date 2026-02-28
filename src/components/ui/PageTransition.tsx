import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
            ease: "easeIn" as const,
        },
    },
};

export default function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}
