import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, Tag, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

const blogPosts = [
    {
        id: 1,
        title: 'The Future of AI in SaaS: Trends to Watch in 2024',
        category: 'AI Strategy',
        excerpt: 'Discover how Large Language Models and autonomous agents are reshaping the SaaS landscape and what founders need to know.',
        date: 'Oct 15, 2023',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Scaling from MVP to Enterprise: A Technical Roadmap',
        category: 'Engineering',
        excerpt: 'Avoid common pitfalls when transitioning from a prototype to a high-availability production system serving thousands of users.',
        date: 'Sep 28, 2023',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Why Dedicated Teams Outperform Freelancers for Startups',
        category: 'Scale Strategy',
        excerpt: 'An in-depth comparison of hiring models and why dedicated engineering teams offer better long-term value and velocity.',
        date: 'Sep 10, 2023',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'React vs. Vue: Choosing the Right Framework for your MVP',
        category: 'Dev Ops',
        excerpt: 'A pragmatic guide to selecting the frontend framework that aligns with your product goals and talent pool availability.',
        date: 'Aug 22, 2023',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 5,
        title: 'Optimizing Cloud Costs for High-Growth Startups',
        category: 'Cloud Arch',
        excerpt: 'Practical strategies to keep your AWS or Google Cloud bills in check without compromising on performance or reliability.',
        date: 'Aug 05, 2023',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
    },
    {
        id: 6,
        title: 'UX Best Practices for B2B SaaS Platforms',
        category: 'UX Design',
        excerpt: 'How to design complex interfaces that feel intuitive and drive user adoption in enterprise software environments.',
        date: 'Jul 18, 2023',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop'
    }
];

export default function Blog() {
    return (
        <div className="bg-white dark:bg-zinc-950 transition-colors duration-500 min-h-screen pb-20 pt-40 overflow-hidden relative">
            <Helmet>
                <title>Intelligence Hub | {COMPANY_NAME} Blog</title>
                <meta name="description" content={`Field notes and high-fidelity insights from ${COMPANY_NAME} on SaaS engineering, AI integration, and technical leadership.`} />
            </Helmet>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-violet-500/5 blur-[100px] rounded-full" />
                <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-fuchsia-500/5 blur-[100px] rounded-full" />
            </div>

            <div className="container relative mx-auto px-4 md:px-6 z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-violet-200 dark:border-violet-800"
                    >
                        <Sparkles className="w-3 h-3" />
                        Engineering Intelligence
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter italic">Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Insights</span></h1>
                    <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto">
                        High-fidelity research and tactical field notes for SaaS founders and technical leaders.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group glass dark:glass-dark rounded-[2.5rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-violet-500/30 transition-all duration-500 flex flex-col h-full shadow-2xl shadow-violet-500/5"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl text-[10px] font-black text-violet-600 dark:text-white px-4 py-2 rounded-2xl uppercase tracking-[0.2em] border border-white/20 shadow-xl">
                                        {post.category}
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center text-[10px] font-black text-zinc-400 dark:text-zinc-500 mb-4 uppercase tracking-[0.2em]">
                                    <Clock className="w-3 h-3 mr-2" />
                                    <span>{post.date}</span>
                                    <span className="mx-3 opacity-30">|</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2 italic tracking-tight">
                                    {post.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-8 line-clamp-3 leading-relaxed font-bold">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between">
                                    <a href="#" className="inline-flex items-center text-zinc-900 dark:text-white font-black text-xs uppercase tracking-widest hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                                        Open Report <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-2 transition-transform" />
                                    </a>
                                    <Tag className="w-4 h-4 text-zinc-300 dark:text-zinc-800" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
