'use client';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, scale: 0.95 },
  enter: { opacity: 1, scale: 1 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial='hidden'
      exit='hidden'
      animate='enter'
      transition={{ delay: 0.2, ease: 'easeInOut' }}
      className='flex-grow'
    >
      {children}
    </motion.main>
  );
}
