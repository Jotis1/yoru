'use client';

import { ShieldCheckIcon } from '@heroicons/react/24/solid';

import { WelcomeForm } from '@/app/ui/forms';

export default function Page() {
  return (
    <form>
      <section className='flex w-full flex-col gap-10 rounded-lg border-2 border-indigo-300 bg-zinc-900 px-5 py-5 sm:w-500'>
        <header className='flex flex-col items-center gap-2.5 text-center text-indigo-300'>
          <ShieldCheckIcon className='h-5 w-5' />
          <p>Bienvenido usuario, ¿cómo quieres que te llamemos?</p>
        </header>
        <WelcomeForm />
      </section>
    </form>
  );
}
