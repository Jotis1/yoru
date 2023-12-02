"use client"
import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    enter: { opacity: 1, y: 0, scale: 1 }
}

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main
            variants={variants}
            initial="hidden"
            exit="hidden"
            animate="enter"
            transition={{ delay: .2, ease: "easeInOut" }}
        >
            {children}
        </motion.main>
    )
}