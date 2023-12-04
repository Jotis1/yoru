'use client';

import { motion } from 'framer-motion';

export default function LevelProgress({ level }: { level: number }) {
    return (
        <section className='h-5 w-full px-10 py-1.5'>
            <motion.section
                transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 0.8, delay: 0.8 }}
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                className='h-full rounded-lg bg-indigo-300'
            ></motion.section>
        </section>
    );
}
