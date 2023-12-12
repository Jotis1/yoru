'use client';

import { Button } from '@/app/ui/buttons';

export default function WelcomeForm() {
  return (
    <>
      <section className='px-10'>
        <input
          name='name'
          onPointerDownCapture={(e) => e.stopPropagation()}
          autoComplete='off'
          type='text'
          className='h-10 w-full border-b-2 border-indigo-300 bg-transparent px-2.5 text-center text-zinc-50 outline-none'
        />
      </section>
      <section className='flex w-full justify-center text-center'>
        <Button submit text='Continuar'></Button>
      </section>
    </>
  );
}
