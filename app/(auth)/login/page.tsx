'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { HandleSubmit } from '../action';

import Link from 'next/link';

import AuthForm from '@/app/ui/auth/AuthForm';
import FormInput from '@/app/ui/FormInput';

import { AlertContainer, Alert } from '@/app/ui/Alert';
import LinkComponent from '@/app/ui/Link';

export default function Page() {
  const router = useRouter();
  const [handleEclipse, setHandleEclipse] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [alert, setAlert] = useState<
    { type: 'error' | 'info' | 'success'; text: string }[] | []
  >([]);

  const handleLoginSubmit = async () => {
    const isLoggedIn = await HandleSubmit({
      type: 'login',
      email: email,
      password: password,
    });

    if (!isLoggedIn) {
      return setAlert((prev) => [
        { type: 'error', text: 'Error: Este usuario no existe' },
      ]);
    }

    router.push(`/changeName`);
  };

  const handleFocus = () => {
    setHandleEclipse(false);
  };

  const handleBlur = () => {
    setHandleEclipse(true);
  };

  return (
    <form action={handleLoginSubmit}>
      <AuthForm
        headerText='Inicia sesión'
        animate={handleEclipse}
        returnHref='/welcome'
      >
        <section className='flex w-full flex-col gap-5'>
          <FormInput
            onChange={(e) => setEmail(e.target.value)}
            label='Correo electrónico'
            placeholder='yoru@catmail.com'
            type='email'
            required
          />
          <FormInput
            onChange={(e) => setPassword(e.target.value)}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            label='Contraseña'
            type='password'
            required
            placeholder='••••••••••'
          />
          <section className='flex w-full items-center justify-between'>
            <LinkComponent href={`#`}>He olvidado la contraseña</LinkComponent>
            <LinkComponent href={`/signUp`}>No tengo cuenta</LinkComponent>
          </section>
        </section>
      </AuthForm>
      <AlertContainer>
        {alert.map((alertItem, index) => (
          <Alert
            key={index}
            text={alertItem.text}
            type={alertItem.type}
            close
          ></Alert>
        ))}
      </AlertContainer>
    </form>
  );
}
