'use client';

import { useState } from 'react';

import { HandleSubmit } from '../action';

import Link from 'next/link';

import AuthForm from '@/app/ui/auth/AuthForm';
import FormInput from '@/app/ui/FormInput';

export default function Page() {
    const [handleEclipse, setHandleEclipse] = useState<boolean>(true);

    const handleSignUpSubmit = HandleSubmit.bind(null, { type: "login", email: "123", password: "1234", confirmPassword: "1234" });

    const handleFocus = () => {
        setHandleEclipse(false);
    };

    const handleBlur = () => {
        setHandleEclipse(true);
    };

    return (
        <form action={handleSignUpSubmit}>
            <AuthForm
                headerText="Registrarse"
                animate={handleEclipse}
                returnHref="/welcome"
            >
                <section className="flex w-full flex-col gap-5">
                    <FormInput
                        label="Correo electrónico"
                        placeholder="yoru@catmail.com"
                        type="email"
                        required
                    />
                    <FormInput
                        handleBlur={handleBlur}
                        handleFocus={handleFocus}
                        label="Contraseña"
                        type="password"
                        required
                        placeholder="••••••••••"
                    />
                    <FormInput
                        handleBlur={handleBlur}
                        handleFocus={handleFocus}
                        label="Repetir Contraseña"
                        name='passwordConfirm'
                        type="password"
                        required
                        placeholder="••••••••••"
                    />
                    <section className="flex w-full items-center justify-end text-indigo-300">
                        <Link className='md:text-base text-xs' href={`/login`}>Ya tengo cuenta</Link>
                    </section>
                </section>
            </AuthForm>
        </form>
    );
}
