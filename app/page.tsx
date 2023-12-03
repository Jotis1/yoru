'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from './ui/components/Button';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!true) router.push('/welcome');
  }, []);

  return <main className='text-zinc-50'></main>;
}
