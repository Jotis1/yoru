'use client';

import Link from 'next/link';
import { clsx } from 'clsx';

import { motion } from 'framer-motion';

export default function Button({
  text,
  isLink,
  href,
  onClick,
  type = 'outlined',
  isIcon,
  submit,
  children,
}: {
  isLink?: boolean;
  href?: string;
  text?: string;
  onClick?: () => any;
  type?: 'outlined' | 'light';
  children?: React.ReactNode;
  submit?: boolean;
  isIcon?: boolean;
}) {
  const classN = clsx('flex h-10 items-center rounded-lg text-zinc-50', [
    {
      'px-5': !isIcon,
      'min-w-[40px] flex items-center justify-center': isIcon,
      'border-2 border-zinc-50': type === 'outlined',
      '': type === 'light',
    },
  ]);

  let scale = type === 'light' ? 1 : 1.1;

  return (
    <motion.section transition={{ ease: "easeInOut", duration: .2 }} whileHover={{ scale: scale }}>
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
          {children || text}
        </button>
      )}
    </motion.section>
  );
}
