'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default function AlertContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial='hidden'
      animate='visible'
      variants={container}
      className='absolute right-0 top-0 flex flex-col items-end justify-end p-5 lg:bottom-0'
    >
      <section className='flex w-auto flex-col-reverse items-end gap-5'>
        {children}
      </section>
    </motion.section>
  );
}
