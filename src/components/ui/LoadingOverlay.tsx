import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadingOverlayProps {
    isVisible: boolean;
    message?: string;
}

export default function LoadingOverlay({ isVisible, message = "Transmitting Credentials..." }: LoadingOverlayProps) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950/60 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="text-center px-6"
                    >
                        <div className="relative w-20 h-20 mx-auto mb-8">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                className="absolute inset-0 border-4 border-violet-500/20 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                className="absolute inset-0 border-4 border-violet-500 rounded-full border-t-transparent"
                            />
                            <Loader2 className="absolute inset-0 m-auto w-8 h-8 text-violet-400 animate-pulse" />
                        </div>

                        <motion.h3
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-white text-xl font-black italic tracking-tighter mb-2"
                        >
                            {message}
                        </motion.h3>
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            Please maintain connection
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
