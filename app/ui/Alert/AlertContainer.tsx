"use client";

import { motion } from "framer-motion";


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

export default function AlertContainer({ children }: { children: React.ReactNode }) {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={container} className="absolute bottom-0 right-0 p-5 flex flex-col justify-end items-end">
            <section className="flex flex-col-reverse w-auto gap-5 items-end">
                {children}
            </section>
        </motion.section>
    )
}