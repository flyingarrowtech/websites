import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Search, Clock, ArrowRight, Briefcase, Filter, Sparkles, Zap, Globe, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { jobs } from '../data/jobs';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function Careers() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('All');

    const departments = ['All', ...new Set(jobs.map(job => job.department))];

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;

        return matchesSearch && matchesDepartment;
    });

    return (
        <div className="bg-white dark:bg-zinc-950 transition-colors duration-500 min-h-screen pb-20 pt-40 overflow-hidden relative">
            <Helmet>
                <title>Careers | Join {COMPANY_NAME} - Elite Engineering Force</title>
                <meta name="description" content={`Join the elite engineering task force at ${COMPANY_NAME}. We're looking for visionary builders to architect the next generation of SaaS excellence.`} />
            </Helmet>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-violet-500/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-fuchsia-500/5 blur-[100px] rounded-full" />
            </div>

            <div className="container relative mx-auto px-4 md:px-6 z-10">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-violet-200 dark:border-violet-800"
                    >
                        <Zap className="w-3 h-3" />
                        Join the Elite
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter italic">Engineers of <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Legend.</span></h1>
                    <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                        We don't just hire; we assemble visionaries. Help us architect the next generation of SaaS excellence.
                    </p>

                    {/* Search & Filter */}
                    <div className="max-w-3xl mx-auto glass dark:glass-dark p-3 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row gap-3 shadow-2xl shadow-violet-500/10">
                        <div className="flex-1 relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                            <input
                                type="text"
                                placeholder="Search roles or skills..."
                                className="w-full pl-14 pr-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-[1.5rem] focus:ring-2 focus:ring-violet-500 dark:text-white placeholder-zinc-500 transition-all font-bold text-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="relative md:w-56">
                            <Filter className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                            <select
                                className="w-full pl-14 pr-10 py-4 bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-[1.5rem] focus:ring-2 focus:ring-violet-500 dark:text-white font-bold text-sm appearance-none cursor-pointer"
                                value={selectedDepartment}
                                onChange={(e) => setSelectedDepartment(e.target.value)}
                            >
                                {departments.map(dept => (
                                    <option key={dept} value={dept}>{dept}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Job Listings */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-10 px-4">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                            Available Directives <span className="text-violet-500 ml-2">[{filteredJobs.length}]</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <AnimatePresence mode="popLayout">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job, idx) => (
                                    <Link key={job.id} to={`/careers/${job.id}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="my-10 group glass dark:glass-dark border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] p-8 md:p-10 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/5 transition-all duration-500 cursor-pointer relative"
                                        >
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                                        <span className="bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-violet-200 dark:border-violet-800">
                                                            {job.department}
                                                        </span>
                                                        <div className="flex items-center text-zinc-500 text-[10px] font-black uppercase tracking-widest gap-2">
                                                            <Globe className="w-3 h-3 text-violet-500" /> {job.location}
                                                        </div>
                                                        <div className="flex items-center text-zinc-500 text-[10px] font-black uppercase tracking-widest gap-2">
                                                            <Clock className="w-3 h-3 text-violet-500" /> {job.type}
                                                        </div>
                                                    </div>
                                                    <h3 className="text-3xl font-black text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-4 italic tracking-tight">
                                                        {job.title}
                                                    </h3>
                                                    <p className="text-zinc-600 dark:text-zinc-400 font-bold leading-relaxed mb-8 max-w-2xl text-sm">
                                                        {job.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-3">
                                                        {job.tags.map(tag => (
                                                            <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-600 border border-zinc-100 dark:border-zinc-800 px-3 py-1 rounded-lg">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="hidden md:block">
                                                    <div className="w-16 h-16 glass dark:glass-dark rounded-3xl flex items-center justify-center group-hover:bg-violet-600 transition-all duration-500 border border-zinc-100 dark:border-zinc-800 group-hover:border-violet-400 group-hover:-rotate-12">
                                                        <ArrowRight className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Link>
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-24 glass dark:glass-dark rounded-[2.5rem] border border-dashed border-zinc-200 dark:border-zinc-800"
                                >
                                    <Briefcase className="w-16 h-16 text-zinc-300 dark:text-zinc-700 mx-auto mb-6 opacity-20" />
                                    <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-2 uppercase tracking-tight italic">No directivs found</h3>
                                    <p className="text-zinc-500 font-bold mb-8">System parameters yielded zero matches.</p>
                                    <button
                                        onClick={() => { setSearchTerm(''); setSelectedDepartment('All'); }}
                                        className="text-violet-600 dark:text-violet-400 font-black text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
                                    >
                                        [ RESET FILTERS ]
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Perks Section Preview */}
                    <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: 'Global Grid', desc: 'Sovereign remote operational paradigm.', icon: Globe },
                            { title: 'Premium Yield', desc: 'Top-tier capital allocation strategy.', icon: DollarSign },
                            { title: 'Evolution Fund', desc: 'Unrestricted growth potential stipend.', icon: Sparkles }
                        ].map((perk, i) => (
                            <div key={i} className="text-center group p-8 glass dark:glass-dark rounded-[2.5rem] border border-zinc-50 dark:border-zinc-900">
                                <perk.icon className="w-8 h-8 text-violet-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white mb-4">{perk.title}</h4>
                                <p className="text-zinc-500 text-xs font-bold leading-relaxed">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
