'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const variantsSun: any = {
  isNotEclipse: {
    left: `0%`,
    opacity: 1,
  },
  isEclipse: {
    left: `50%`,
    opacity: 0,
  },
};

const variantsMoon: any = {
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

/**
 *
 * Animación que se ejecuta cuando showEclipse es true que hace que una luna eclipse al sol.
 *
 * Usos: input de contraseña de un formulario
 *
 * @param showEclipse - Determina si la animación del eclipse debe de ejecutarse
 * @author Jotis
 * @returns
 */
export default function PlanetsAnimation({
  showEclipse,
}: {
  showEclipse: boolean;
}) {
  const [wetherIsEclipse, setWetherIsEclipse] = useState<
    'isEclipse' | 'isNotEclipse'
  >(showEclipse ? 'isEclipse' : 'isNotEclipse');

  useEffect(() => {
    if (wetherIsEclipse === 'isEclipse')
      return setWetherIsEclipse('isNotEclipse');

    setWetherIsEclipse('isEclipse');
  }, [showEclipse]);

  return (
    <section className='relative h-14 w-40'>
      <motion.span
        initial={variantsSun.isNotEclipse}
        animate={variantsSun[wetherIsEclipse]}
        className='absolute h-full w-14 -translate-x-1/2 rounded-full bg-amber-500 drop-shadow-[0_0_10px_#F59E0B60]'
      />
      <motion.span
        initial={variantsMoon.isNotEclipse}
        animate={variantsMoon[wetherIsEclipse]}
        className='absolute h-full w-14 translate-x-1/2 rounded-full border-r-[10px] border-zinc-300 bg-zinc-50 drop-shadow-[0_0_10px_#E4E4E760]'
      />
    </section>
  );
}
