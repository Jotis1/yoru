'use client';

import Link from 'next/link';
import { clsx } from 'clsx';

import { motion } from 'framer-motion';

import { CloudIcon } from '@heroicons/react/24/solid';

export default function Button({
  text,
  isLink,
  href,
  onClick,
  loading,
  type = 'outlined',
  isIcon,
  submit,
  children,
}: {
  loading?: boolean;
  isLink?: boolean;
  href?: string;
  text?: string;
  onClick?: () => any;
  type?: 'outlined' | 'light';
  children?: React.ReactNode;
  submit?: boolean;
  isIcon?: boolean;
}) {
  const classN = clsx('flex h-10 items-center rounded-lg text-zinc-50 transition-all', [
    {
      'px-5': !isIcon,
      'min-w-[40px] flex items-center justify-center': isIcon,
      'border-2 border-zinc-50': type === 'outlined',
      '': type === 'light',
    },
  ]);

  let scale = type === 'light' ? 1 : 1.1;

  return (
    <motion.section
      transition={{ ease: 'easeInOut', duration: 0.2 }}
      whileHover={{ scale: scale }}
    >
      {isLink && href ? (
        <Link className={classN} href={href}>
          {children || text}
        </Link>
      ) : (
        <button
          type={submit ? 'submit' : 'button'}
          onClick={onClick}
          className={classN}
        >
          {loading ? (
            <svg height="16" className='text-zinc-50 w-5 h-5 animate-spin' fill='currentColor' width="16" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" /></svg>
          ) : (
            <>{children || text}</>
          )}
        </button>
      )}
    </motion.section>
  );
}
