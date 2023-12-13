'use client';

import { Button } from '@/app/ui/buttons';
import { motion } from 'framer-motion';

import { signIn } from 'next-auth/react';

import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord,
  faGoogle,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons';

export default function AuthForm({}) {
  return (
    <motion.section
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragSnapToOrigin
      className='relative flex w-full flex-col items-center gap-20 rounded-lg bg-zinc-900 px-5 pb-5 pt-14 sm:px-10 sm:pb-14 md:w-500 '
    >
      <section className='flex flex-col items-center gap-10'>
        <header className='flex flex-col gap-2 text-center'>
          <p className='text-3xl font-black text-zinc-50'>
            ¿Cómo quieres empezar?
          </p>
          <p className='font-medium text-zinc-400'>
            Asegúrate de leer antes la política de Yoru
          </p>
        </header>
        <section className='flex items-center gap-5'>
          <Button isIcon onClick={() => signIn('google')}>
            <I icon={faGoogle} />
          </Button>
          <Button isIcon onClick={() => signIn('discord')}>
            <I icon={faDiscord} />
          </Button>
          <Button isIcon onClick={() => signIn('twitch')}>
            <I icon={faTwitch} />
          </Button>
        </section>
      </section>
      <Button isLink isIcon href='/welcome' type='light'>
        <I icon={faArrowDownLong}></I>
      </Button>
    </motion.section>
  );
}
