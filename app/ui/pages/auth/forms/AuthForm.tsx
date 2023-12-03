'use client';

import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Button from '../../../components/Button';

import PlanetsAnimation from '../animation/PlanetsAnimation';
import { motion } from 'framer-motion';

export default function AuthForm({
  children,
  headerText,
  animate,
  returnHref,
  onClick,
}: {
  children: React.ReactNode;
  headerText: string;
  animate: boolean;
  returnHref: string;
  onClick?: () => any;
}) {
  return (
    <motion.section
      drag
      dragConstraints={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      dragSnapToOrigin
      className='relative flex w-full flex-col items-center gap-20 rounded-lg bg-zinc-900 px-5 pb-5 pt-20 sm:px-10 sm:pb-20 md:w-500 '
    >
      <p className='select-none text-2xl font-bold uppercase text-zinc-50'>
        {headerText}
      </p>
      <PlanetsAnimation showEclipse={animate} />
      {children}
      <section className='text-center'>
        <button
          type='submit'
          onClick={onClick}
          className='flex h-10 items-center rounded-lg border-2 border-zinc-50 px-5 text-zinc-50'
        >
          Continuar
        </button>
      </section>
      <section className='absolute left-2.5 top-2.5'>
        <Button isIcon type='light' isLink href={returnHref}>
          <ChevronLeftIcon className='h-5 w-5' />
        </Button>
      </section>
    </motion.section>
  );
}
