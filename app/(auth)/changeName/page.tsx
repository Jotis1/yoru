'use client';

import { useState } from 'react';
import { ChangeName } from '../action';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

import { PageComponents } from '@/app/ui';
const { ChangeNameForm } = PageComponents.AuthComponents;

export default function Page() {
  const [name, setName] = useState<string>('');

  const handleChangeName = async () => {
    ChangeName({ name: name });
  };

  return (
    <form action={handleChangeName}>
      <section className='flex w-full flex-col gap-10 rounded-lg border-2 border-indigo-300 bg-zinc-900 px-5 py-5 sm:w-500'>
        <header className='flex flex-col items-center gap-2.5 text-center text-indigo-300'>
          <ShieldCheckIcon className='h-5 w-5' />
          <p>Bienvenido usuario, ¿cómo quieres que te llamemos?</p>
        </header>
        <ChangeNameForm onChange={(e: any) => setName(e.target.value)} />
      </section>
    </form>
  );
}
