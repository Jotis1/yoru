"use client";

import { ubuntuMono } from '../lib/fonts';
import Template from './template';
import Background from '@/app/ui/auth/Background';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <section className="absolute left-0 top-0 -z-[1]">
        <Background></Background>
      </section>
      <Template>
        {children}
      </Template>
    </main>
  );
}
