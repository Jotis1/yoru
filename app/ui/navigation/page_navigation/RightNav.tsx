'use client';

import Image from 'next/image';
import { Button } from '@/app/ui/buttons';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';

function getPreviousAndNextRoutes(currentRoute: string, routes: string[]) {
    const currentIndex = routes.indexOf(currentRoute);

    const previousRoute = currentIndex > 0 ? routes[currentIndex - 1] : null;
    const nextRoute =
        currentIndex < routes.length - 1 ? routes[currentIndex + 1] : null;

    return {
        previousRoute,
        nextRoute,
    };
}

export default function RightNav() {
    const pathname = usePathname();
    const routes = ['/news', '/achievements', '/poll', '/changelog'];

    const constraintsRef = useRef(null);

    const { previousRoute, nextRoute } = getPreviousAndNextRoutes(
        pathname,
        routes,
    );

    return (
        <section className='flex h-full w-250 flex-col items-center justify-between px-2.5 py-10'>
            <section className='flex w-full flex-col gap-5 px-9'>
                <figure
                    ref={constraintsRef}
                    className='relative h-[150px] w-[150px] border-spacing-2 rounded-lg border-4 border-zinc-50'
                >
                    <motion.section
                        whileDrag={{ cursor: 'grabbing' }}
                        whileFocus={{ cursor: 'grabbing' }}
                        drag
                        dragSnapToOrigin
                        dragConstraints={constraintsRef}
                        className='relative h-full w-full cursor-grab'
                    >
                        <Image
                            className='selec-none rounded-lg object-cover'
                            sizes='142'
                            fill
                            alt='Profile Picture'
                            src={`/Gato astronauta.jpg`}
                        ></Image>
                        <section className='absolute left-0 top-0 h-full w-full'></section>
                    </motion.section>
                </figure>
                <section className='flex h-10 w-[150px] items-center justify-between rounded-lg bg-zinc-900 pl-2.5 font-medium text-zinc-50'>
                    <p>@jotis</p>
                    <button className='flex h-full w-10 items-center justify-center text-zinc-500'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='h-5 w-5'
                        >
                            <path d='M16.5 6a3 3 0 00-3-3H6a3 3 0 00-3 3v7.5a3 3 0 003 3v-6A4.5 4.5 0 0110.5 6h6z' />
                            <path d='M18 7.5a3 3 0 013 3V18a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3H18z' />
                        </svg>
                    </button>
                </section>
            </section>
            <nav className='flex w-[108px] items-center justify-between gap-5'>
                <AnimatePresence>
                    {nextRoute && (
                        <motion.section
                            className='flex flex-grow justify-start'
                            key={'next'}
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                        >
                            <Button isLink isIcon href={nextRoute} type='outlined'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='h-5 w-5'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </Button>
                        </motion.section>
                    )}
                    {previousRoute && (
                        <motion.section
                            className='flex flex-grow justify-end'
                            key={'prev'}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                        >
                            <Button isLink isIcon href={previousRoute} type='outlined'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='h-6 w-6'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </Button>
                        </motion.section>
                    )}
                </AnimatePresence>
            </nav>
        </section>
    );
}
