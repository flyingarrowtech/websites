
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'How do you handle time zones?',
        answer: 'We operate on a flexible schedule with significant overlap for global clients. Our project managers and lead developers ensure real-time collaboration, daily standups, and instant feedback loops.',
    },
    {
        question: 'Do you sign an NDA?',
        answer: 'Yes, absolutely. We sign a strict Mutual NDA before discussing your idea. Your intellectual property is protected from the very first conversation.',
    },
    {
        question: 'Who owns the code?',
        answer: 'You do. 100%. We work as "work-for-hire," meaning all source code, design assets, and IP rights belong to you immediately upon payment. We have no claim over your product.',
    },
    {
        question: 'How do payments work?',
        answer: 'We typically use a milestone-based payment structure for fixed-scope projects (e.g., 30% kickoff, 30% beta, 40% launch). For dedicated teams, we invoice monthly. We accept ACH, Wire Transfer, and Stripe.',
    },
    {
        question: 'What if I need post-launch support?',
        answer: 'We don\'t just build and leave. We offer 30 days of free bug support after launch. Afterward, we provide flexible maintenance retainers to keep your SaaS secure, updated, and growing.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
            <motion.div
                className="container mx-auto px-4 md:px-6 max-w-3xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="text-center mb-16">
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-zinc-400">
                        Everything you need to know about working with us.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-violet-400 dark:hover:border-violet-600 shadow-sm hover:shadow-md dark:shadow-zinc-900/50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                            >
                                <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-zinc-400 group-hover:text-violet-500 transition-colors" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
