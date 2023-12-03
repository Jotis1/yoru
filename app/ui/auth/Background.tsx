'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function Background() {
  const pathname = usePathname();
  const getVariant: string = pathname.split('/')[1];
  const [appear, setAppear] = useState(true);

  const variants: any = {
    welcome: {
      opacity: 1,
      top: 'calc(-50% + 100px)',
      bottom: 'auto',
      left: '-50%',
      right: 'auto',
    },
    signUp: {
      opacity: 1,
      top: 'auto',
      bottom: 'calc(-50% - 100px)',
      right: '-50%',
      left: 'auto',
    },
    login: {
      opacity: 1,
      top: 'auto',
      bottom: 'calc(-50% - 100px)',
      right: '50%',
      left: 'auto',
    },
    changeName: {
      opacity: 1,
      top: 'calc(-50% + 100px)',
      bottom: 'auto',
      right: '-50%',
      left: 'auto',
    },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAppear(!appear);
    }, 15000);

    return () => clearInterval(intervalId);
  }, [appear]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.8, duration: 1 } }}
      className='relative h-screen w-screen overflow-hidden'
    >
      <motion.section
        initial={{
          opacity: 0,
          bottom: 'calc(-50% - 100px)',
          right: '-50%',
        }}
        exit={{ opacity: 0 }}
        animate={variants[getVariant]}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 100,
        }}
        className='absolute -z-[1] h-full w-full scale-[2]'
      >
        <section className='relative h-full w-full'>
          <Image
            className='animate-spin-slow select-none object-cover'
            alt='Background'
            fill
            src={`/SpaceBgWithMoon.svg`}
          />
        </section>
      </motion.section>
      {appear && (
        <motion.span
          initial={{ bottom: -100, left: `30%` }}
          animate={{ top: -20, left: `60%` }}
          transition={{
            ease: 'easeInOut',
            duration: 2,
            delay: 2 + Math.random() * 0.5,
          }}
          className='absolute h-2.5 w-2.5 rounded-full bg-white shadow-[0_0px_10px_#e4e4e7]'
        />
      )}
    </motion.section>
  );
}

export default Background;
