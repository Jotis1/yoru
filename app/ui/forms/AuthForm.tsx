'use client';

import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Button, Link } from '@/app/ui/buttons';
import { PasswordAnimation } from '@/app/ui/animations';
import { AuthInput } from '@/app/ui/forms';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

import { useAuth } from '@/app/lib/context/auth_context';

import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import {
    faDiscord,
    faGithub,
    faGoogle,
    faTwitch,
} from '@fortawesome/free-brands-svg-icons';

export default function AuthForm({
    type,
    handleGoogleLogin,
    handleGithubLogin,
}: {
    type: 'login' | 'signup';
    handleGoogleLogin?: () => any;
    handleGithubLogin?: () => any;
}) {
    const { pending } = useFormStatus();

    const header: string =
        type === 'login'
            ? 'Iniciar Sesión'
            : type === 'signup'
                ? 'Registrarse'
                : '';
    const returnHref: string =
        type === 'login' ? '/signup' : type === 'signup' ? '/login' : '';

    const [password, setPassword] = useState('');
    const [showPasswordAnimation, setShowPasswordAnimation] = useState(false);

    return (
        <motion.section
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragSnapToOrigin
            className='relative flex w-full flex-col items-center gap-12 rounded-lg bg-zinc-900 px-5 pb-5 pt-20 sm:px-10 sm:pb-20 md:w-500 '
        >
            <h1 className='select-none text-2xl font-bold uppercase text-zinc-50'>
                {header}
            </h1>
            <section className='flex flex-col gap-10'>
                <PasswordAnimation showEclipse={showPasswordAnimation} />
                <section className='flex items-center justify-center gap-2.5'>
                    <Button onClick={handleGoogleLogin} isIcon>
                        <I icon={faGoogle}></I>
                    </Button>
                    <Button onClick={handleGithubLogin} isIcon>
                        <I icon={faGithub}></I>
                    </Button>
                </section>
            </section>
            <section className='flex w-full flex-col gap-5'>
                <AuthInput
                    name='email'
                    label='Correo electrónico'
                    placeholder='ejemplo@tumail.com'
                    type='email'
                    required
                />
                <AuthInput
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    handleBlur={() => setShowPasswordAnimation(!!password)}
                    handleFocus={() => setShowPasswordAnimation(true)}
                    label='Contraseña'
                    type='password'
                    required
                    placeholder='Introduzca una contraseña'
                />
                {type === 'signup' && (
                    <AuthInput
                        name='confirm_password'
                        onChange={(e) => setPassword(e.target.value)}
                        handleBlur={() => setShowPasswordAnimation(!!password)}
                        handleFocus={() => setShowPasswordAnimation(true)}
                        label='Confirmar contraseña'
                        type='password'
                        required
                        placeholder='Otra vez (para estar seguros)'
                    />
                )}
                <section className='flex w-full items-center justify-between'>
                    <Link href={returnHref}>
                        {type === 'login'
                            ? 'No tengo cuenta'
                            : type === 'signup'
                                ? 'Ya tengo cuenta'
                                : ''}
                    </Link>
                    {type === 'login' && (
                        <Link href={`#`}>He olvidado la contraseña</Link>
                    )}
                </section>
            </section>
            <section className='text-center'>
                <Button loading={pending} submit type='outlined' text='Continuar' />
            </section>
            <section className='absolute left-2.5 top-2.5'>
                <Button isIcon type='light' isLink href='/welcome'>
                    <ChevronLeftIcon className='h-5 w-5' />
                </Button>
            </section>
        </motion.section>
    );
}
