'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!true) router.push('/welcome');
  });

  return <main className='text-zinc-50'></main>;
}
