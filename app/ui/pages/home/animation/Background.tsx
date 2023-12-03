'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const variables: any = {
  news: {
    opacity: 1,
    top: 0,
    bottom: 'auto',
  },
  achievements: {
    opacity: 1,
    top: '-100%',
    bottom: 'auto',
  },
  poll: {
    opacity: 1,
    top: 'auto',
    bottom: '-100%',
  },
  changelog: {
    opacity: 1,
    top: 'auto',
    bottom: 0,
  },
};

function Background() {
  const pathname = usePathname();
  const getVariant: string = pathname.split('/')[1];
  const [appear, setAppear] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAppear(!appear);
    }, 15000);

    return () => clearInterval(intervalId);
  }, [appear]);

  return (
    <motion.section>
      <motion.section
        initial={{
          opacity: 0,
          top: 0,
          bottom: 'auto',
        }}
        animate={variables[getVariant]}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 100,
        }}
        className='absolute h-fit w-full'
      >
        {[0, 1, 2, 3].map((index) => (
          <section
            key={index}
            className={`relative h-screen w-full animate-spin-slow`}
          >
            <Image
              fill
              className={`select-none object-cover ${index % 2 == 0 && 'rotate-180'}`}
              alt='Background'
              src={`/SpaceForHome.svg`}
            ></Image>
          </section>
        ))}
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
