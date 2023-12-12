import { ubuntuMono } from '@/app/lib/fonts';

import {
  WelcomeLayoutAnimation,
  PageTransitionAnimation,
} from '@/app/ui/animations';

import { HeartIcon } from '@heroicons/react/24/solid';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
      <section className='absolute left-0 top-0 -z-[1]'>
        <WelcomeLayoutAnimation />
      </section>
      <PageTransitionAnimation>{children}</PageTransitionAnimation>
      <section className='absolute bottom-0 left-1/2 -z-[1] flex -translate-x-1/2 select-none items-center justify-center gap-1 p-5 text-zinc-50 drop-shadow-[0_0_10px_#E4E4E760]'>
        <p className={`${ubuntuMono.className} whitespace-nowrap text-sm`}>
          Desarrollado por SanKai con
        </p>
        <HeartIcon className='h-5 w-5' />
      </section>
    </main>
  );
}
