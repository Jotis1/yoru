'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const variantsSun = {
  isNotEclipse: {
    left: `0%`,
    opacity: 1,
  },
  isEclipse: {
    left: `50%`,
    opacity: 0,
  },
};

const variantsMoon = {
  isNotEclipse: {
    right: `0%`,
    backgroundColor: '#FAFAFA',
    borderRight: 'solid 10px #a1a1aa',
  },
  isEclipse: {
    right: `50%`,
    backgroundColor: '#27272a',
    borderRight: 'solid 10px #18181b',
  },
};

export default function PasswordAnimation({
  showEclipse,
}: {
  showEclipse: boolean;
}) {
  const [isEclipse, setIsEclipse] = useState(showEclipse);

  useEffect(() => {
    if (showEclipse !== isEclipse) {
      setIsEclipse(showEclipse);
    }
  }, [showEclipse, isEclipse]);

  return (
    <section className='relative h-14 w-40'>
      <motion.span
        initial={variantsSun.isNotEclipse}
        animate={isEclipse ? variantsSun.isEclipse : variantsSun.isNotEclipse}
        className='absolute h-full w-14 -translate-x-1/2 rounded-full bg-amber-500 drop-shadow-[0_0_10px_#F59E0B60]'
      />
      <motion.span
        initial={variantsMoon.isNotEclipse}
        animate={isEclipse ? variantsMoon.isEclipse : variantsMoon.isNotEclipse}
        className='absolute h-full w-14 translate-x-1/2 rounded-full border-r-[10px] border-zinc-300 bg-zinc-50 drop-shadow-[0_0_10px_#E4E4E760]'
      />
    </section>
  );
}
