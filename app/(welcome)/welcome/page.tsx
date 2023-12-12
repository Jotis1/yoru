'use client';

import { Button } from '@/app/ui/buttons';

import { useAuth } from '@/app/lib/context/auth_context';
import { useEffect } from 'react';

export default function Page() {
  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      return console.log(currentUser.uid);
    }
  }, [currentUser]);

  return (
    <section className='flex h-full w-full flex-col items-center justify-center gap-24 text-zinc-50'>
      <header className='select-none text-center drop-shadow-[0_0_10px_#E4E4E740]'>
        <p className='text-3xl font-bold sm:text-5xl md:text-7xl lg:text-96 '>
          BIENVENIDO A YORU
        </p>
        <p className='sm:text-md text-xs font-medium text-zinc-400 md:text-lg lg:text-20'>
          La red social diseñada por y para gamers
        </p>
      </header>
      <section className='text-center'>
        <Button isLink href={`/signup`} text=' Comenzar la aventura' />
      </section>
    </section>
  );
}
