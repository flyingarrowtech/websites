
import { Check, X } from 'lucide-react';
import { useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Differentiation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
            }
        });

        tl.from('.diff-title', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
            .from('.diff-row', {
                x: -20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out'
            }, '-=0.4');

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 diff-title">
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                        Why chosen by Founders?
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        We bridge the gap between premium agencies and cost-effective distributed teams.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr>
                                <th className="p-4 border-b-2 border-zinc-100 dark:border-zinc-800 w-1/5"></th>
                                <th className="p-6 border-b-2 border-violet-100 dark:border-violet-900 bg-violet-50/50 dark:bg-violet-900/20 rounded-t-xl w-1/5 shadow-sm dark:shadow-none">
                                    <span className="text-xl font-bold text-violet-600 dark:text-violet-400 block text-center tracking-tight">
                                        {import.meta.env.VITE_COMPANY_NAME}<span className="text-violet-600 dark:text-violet-400">.</span>
                                    </span>
                                </th>
                                <th className="p-4 border-b-2 border-zinc-100 dark:border-zinc-800 text-center w-1/5 font-semibold text-zinc-500 dark:text-zinc-400">Freelancers</th>
                                <th className="p-4 border-b-2 border-zinc-100 dark:border-zinc-800 text-center w-1/5 font-semibold text-zinc-500 dark:text-zinc-400">Traditional Agency</th>
                                <th className="p-4 border-b-2 border-zinc-100 dark:border-zinc-800 text-center w-1/5 font-semibold text-zinc-500 dark:text-zinc-400">Generic Offshore</th>
                            </tr>
                        </thead>
                        <tbody className="text-zinc-700 dark:text-zinc-300">
                            {[
                                ['Cost Efficiency', true, true, false, true],
                                ['Reliability & Uptime', true, false, true, false],
                                ['Timezone Alignment', true, false, true, false],
                                ['Scalable Team', true, false, true, true],
                                ['Code Ownership', true, true, true, 'Risky'],
                                ['AI Integration', true, 'Variable', true, 'Rare'],
                            ].map((row, i) => (
                                <tr key={i} className="diff-row group border-b border-zinc-100 dark:border-zinc-800 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                                    <td className="p-6 font-semibold text-zinc-900 dark:text-zinc-100 border-r border-zinc-100 dark:border-zinc-800">{row[0]}</td>
                                    {/* Us */}
                                    <td className="p-6 bg-violet-50/30 dark:bg-violet-900/10 border-x border-violet-100 dark:border-violet-900 group-hover:bg-violet-100/30 dark:group-hover:bg-violet-900/20 transition-colors">
                                        <div className="flex justify-center">
                                            <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400">
                                                <Check className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </td>
                                    {/* Freelancers */}
                                    <td className="p-6 border-r border-zinc-100 dark:border-zinc-800 text-center text-zinc-500 dark:text-zinc-500">
                                        <div className="flex justify-center">
                                            {row[2] === true ? <Check className="w-5 h-5 text-zinc-400 dark:text-zinc-600" /> :
                                                row[2] === false ? <X className="w-5 h-5 text-red-400/70 dark:text-red-500/70" /> :
                                                    <span className="text-sm font-medium text-amber-500">{row[2]}</span>}
                                        </div>
                                    </td>
                                    {/* Traditional Agency */}
                                    <td className="p-6 border-r border-zinc-100 dark:border-zinc-800 text-center text-zinc-500 dark:text-zinc-500">
                                        <div className="flex justify-center">
                                            {row[3] === true ? <Check className="w-5 h-5 text-zinc-400 dark:text-zinc-600" /> :
                                                row[3] === false ? <X className="w-5 h-5 text-red-400/70 dark:text-red-500/70" /> :
                                                    <span className="text-sm font-medium text-amber-500">{row[3]}</span>}
                                        </div>
                                    </td>
                                    {/* Generic Offshore */}
                                    <td className="p-6 text-center text-zinc-500 dark:text-zinc-500">
                                        <div className="flex justify-center">
                                            {row[4] === true ? <Check className="w-5 h-5 text-zinc-400 dark:text-zinc-600" /> :
                                                row[4] === false ? <X className="w-5 h-5 text-red-400/70 dark:text-red-500/70" /> :
                                                    <span className="text-sm font-medium text-amber-500">{row[4]}</span>}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
