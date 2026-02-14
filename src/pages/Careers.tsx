import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Search, MapPin, Clock, ArrowRight, Briefcase, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const jobs = [
    {
        id: 1,
        title: 'Senior Full Stack Engineer',
        department: 'Engineering',
        location: 'Remote (India)',
        type: 'Full-time',
        tags: ['React', 'Node.js', 'TypeScript', 'AWS'],
        description: 'We are looking for a Senior Full Stack Engineer to lead our core product team. You will be responsible for architecting scalable solutions and mentoring junior developers.',
    },
    {
        id: 2,
        title: 'React Native Developer',
        department: 'Mobile',
        location: 'Remote (India)',
        type: 'Contract',
        tags: ['React Native', 'iOS', 'Android', 'Redux'],
        description: 'Join our mobile team to build high-performance cross-platform applications. Experience with native modules and performance optimization is a plus.',
    },
    {
        id: 3,
        title: 'UX/UI Designer',
        department: 'Design',
        location: 'Remote (India)',
        type: 'Full-time',
        tags: ['Figma', 'Prototyping', 'Design Systems'],
        description: 'Create intuitive and visually stunning user experiences for our enterprise SaaS clients. You will work closely with product managers and engineers.',
    },
    {
        id: 4,
        title: 'DevOps Engineer',
        department: 'Infrastructure',
        location: 'Remote (India)',
        type: 'Full-time',
        tags: ['Kubernetes', 'Docker', 'CI/CD', 'Terraform'],
        description: 'Help us build and maintain our cloud infrastructure. You will be automating deployment pipelines and ensuring high availability.',
    },
    {
        id: 5,
        title: 'Project Manager',
        department: 'Management',
        location: 'Remote (India)',
        type: 'Full-time',
        tags: ['Agile', 'Scrum', 'Client Relations'],
        description: 'Oversee project timelines and deliverables. You will be the primary point of contact for our key clients and ensure their success.',
    },
    {
        id: 6,
        title: 'Marketing Specialist',
        department: 'Marketing',
        location: 'Remote (India)',
        type: 'Part-time',
        tags: ['SEO', 'Content Marketing', 'Social Media'],
        description: 'Drive our inbound marketing strategy. You will create compelling content and manage our social media channels to generate leads.',
    },
];

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
        <>
            <Helmet>
                <title>Careers - Join Our Team</title>
                <meta name="description" content="Join our team of passionate problem solvers. View our open positions and help us build the future of SaaS." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
                        Build the <span className="text-violet-600 dark:text-violet-400">Future</span> With Us
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12">
                        We're on a mission to empower startups with world-class engineering.
                        If you're passionate about code, design, and innovation, we want to hear from you.
                    </p>

                    {/* Search & Filter */}
                    <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl shadow-violet-500/5 border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                            <input
                                type="text"
                                placeholder="Search roles, skills, or keywords..."
                                className="w-full pl-12 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800 border-none rounded-xl focus:ring-2 focus:ring-violet-500 dark:text-white placeholder-zinc-500 transition-all font-medium"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="relative md:w-48">
                            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                            <select
                                className="w-full pl-12 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800 border-none rounded-xl focus:ring-2 focus:ring-violet-500 dark:text-white font-medium appearance-none cursor-pointer"
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
            </section>

            {/* Job Listings */}
            <section className="py-20 bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-end mb-8">
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                                Open Positions <span className="text-zinc-400 dark:text-zinc-600 ml-2 text-lg font-normal">({filteredJobs.length})</span>
                            </h2>
                        </div>

                        {filteredJobs.length > 0 ? (
                            <div className="space-y-6">
                                {filteredJobs.map((job) => (
                                    <div key={job.id} className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 cursor-pointer">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                                            <div>
                                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                                    <span className="bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                                        {job.department}
                                                    </span>
                                                    <span className="flex items-center text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                                                        <MapPin className="w-4 h-4 mr-1" /> {job.location}
                                                    </span>
                                                    <span className="flex items-center text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                                                        <Clock className="w-4 h-4 mr-1" /> {job.type}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                                    {job.title}
                                                </h3>
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-300">
                                                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                            {job.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {job.tags.map(tag => (
                                                <span key={tag} className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-md text-sm font-medium border border-zinc-200 dark:border-zinc-700">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-8 md:hidden">
                                            <Link to={`/careers/${job.id}`} className="block w-full text-center bg-violet-600 text-white font-bold py-3 rounded-xl">
                                                Apply Now
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800">
                                <Briefcase className="w-16 h-16 text-zinc-300 dark:text-zinc-700 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">No roles found</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    Try adjusting your search filters or check back later.
                                </p>
                                <button
                                    onClick={() => { setSearchTerm(''); setSelectedDepartment('All'); }}
                                    className="mt-6 text-violet-600 dark:text-violet-400 font-bold hover:underline"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}

                        {/* Perks Section Preview */}
                        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'Remote-First', desc: 'Work from anywhere in the world. We focus on output, not hours.' },
                                { title: 'Competitive Pay', desc: 'Top-tier salary packages with equity options for every role.' },
                                { title: 'Learning Budget', desc: '$2,000 annual stipend for courses, conferences, and books.' }
                            ].map((perk, i) => (
                                <div key={i} className="text-center p-6">
                                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{perk.title}</h4>
                                    <p className="text-zinc-500 dark:text-zinc-400">{perk.desc}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
