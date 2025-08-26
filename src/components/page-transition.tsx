"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                {/* Overlay знизу вверх */}
                <motion.div
                    key={pathname}
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 origin-bottom bg-black/80"
                />
            </AnimatePresence>

            {/* Контент */}
            <motion.div
                key={pathname + "-content"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.6, // щоб дочекатися завершення оверлею
                }}
                className="relative z-10"
            >
                {children}
            </motion.div>
        </div>
    );
}




