import { ubuntuMono } from '../lib/fonts';
import Template from './template';
import Background from '@/app/ui/auth/Background';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <section className="absolute left-0 top-0 -z-[1]">
        <Background />
      </section>
      <Template>{children}</Template>
      <section className="absolute bottom-0 left-1/2 flex -translate-x-1/2 select-none items-center justify-center gap-1 p-5 text-zinc-50 drop-shadow-[0_0_10px_#E4E4E760]">
        <p className={`${ubuntuMono.className} text-sm `}>
          Desarrollado por SanKai con
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      </section>
    </main>
  );
}
