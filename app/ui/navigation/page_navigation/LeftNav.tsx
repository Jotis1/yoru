'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function LeftNav() {
  const pathname = usePathname();

  const routes = [
    { href: '/news', name: 'Noticias' },
    { href: '/achievements', name: 'Logros recientes' },
    { href: '/poll', name: 'Encuestas activas' },
    { href: '/changelog', name: 'Changelog' },
  ];

  return (
    <section className='flex h-full w-250 items-center gap-2.5 px-10 py-10'>
      <nav className='flex flex-col gap-10 text-zinc-50'>
        <motion.p
          initial={item.hidden}
          animate={item.visible}
          className='text-2xl font-bold uppercase drop-shadow-[0_0_5px_#E4E4E760]'
        >
          Inicio
        </motion.p>
        <motion.section
          variants={container}
          initial='hidden'
          animate='visible'
          className='flex flex-col gap-5'
        >
          {routes.map((route, index) => (
            <motion.section key={index} variants={item}>
              <Link
                href={route.href}
                className={clsx([
                  'font-medium transition-colors',
                  {
                    'text-zinc-50': pathname === route.href,
                    'text-zinc-500': pathname !== route.href,
                  },
                ])}
              >
                {route.name}
              </Link>
            </motion.section>
          ))}
        </motion.section>
      </nav>
    </section>
  );
}
