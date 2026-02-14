
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`
                relative flex items-center justify-between w-14 h-7 rounded-full p-1 cursor-pointer transition-all duration-300 shadow-inner
                ${theme === 'dark' ? 'bg-zinc-800 border border-zinc-700' : 'bg-zinc-100 border border-zinc-200'}
            `}
            aria-label="Toggle theme"
        >
            <span className="sr-only">Toggle theme</span>

            {/* Sun Icon (Left) */}
            <div className={`z-10 flex items-center justify-center w-5 h-5 transition-all duration-300 ${theme === 'dark' ? 'opacity-40 scale-75' : 'opacity-100 scale-100'}`}>
                <Sun className="w-3.5 h-3.5 text-amber-500" strokeWidth={2.5} />
            </div>

            {/* Moon Icon (Right) */}
            <div className={`z-10 flex items-center justify-center w-5 h-5 transition-all duration-300 ${theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-40 scale-75'}`}>
                <Moon className="w-3.5 h-3.5 text-violet-400" strokeWidth={2.5} />
            </div>

            {/* Sliding Thumb */}
            <motion.div
                className="absolute w-5 h-5 bg-white rounded-full shadow-md z-0"
                initial={false}
                animate={{
                    x: theme === 'dark' ? 28 : 0,
                    backgroundColor: theme === 'dark' ? '#3f3f46' : '#ffffff' // zinc-700 vs white
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
        </button>
    );
}
