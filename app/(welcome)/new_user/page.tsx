'use client';

import Avatar from '@/app/ui/avatar';

import { useSession } from 'next-auth/react';
import { Button } from '@/app/ui/buttons';

export default function Page() {

  const { data: session, status } = useSession() as any;

  return (
    <main className='relative flex w-full flex-col items-center gap-20 rounded-lg bg-zinc-900 px-5 pb-5 pt-14 sm:px-10 sm:pb-14 md:w-500 '>
      {status !== "loading" && session?.user && (
        <>
          <Avatar rounded="full" size='md' alt='' src={`${session?.user?.image}`}></Avatar>
          <header className='flex flex-col gap-2 text-center'>
            <p className='text-3xl font-black text-zinc-50'>
              ¡Bienvenido {session?.user?.nickname || session?.user?.name}!
            </p>
            <p className='font-medium text-zinc-400'>
              Ya puedes empezar a usar Yoru
            </p>
          </header>
          <Button isLink href='/news' text='Continuar'></Button>
        </>
      )}
    </main>
  );
}
