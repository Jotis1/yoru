'use client';

import { AuthForm } from '@/app/ui/forms';

import { Alert, AlertContainer } from '@/app/ui/alert';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/lib/context/auth_context';

const initialState = {
  response: {
    ok: null,
    message: null,
  },
};

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter();

  const { loginWithEmailAndPassword, setCurrentUser, currentUser, loginWithGoogle, loginWithGithub } = useAuth();

  const handleSignInForm = async (formdata: FormData) => {
    try {
      if (currentUser) throw new Error('You are already logged in');

      const emailField: any = formdata.get('email');
      const passwordField: any = formdata.get('password');

      const user = await loginWithEmailAndPassword(
        emailField,
        passwordField
      );

      if (!user) throw new Error('Something went wrong');
    } catch (error: any) {
      if (error.code && error.code == 'auth/operation-not-allowed') {
        return setError(
          'Registrese con una cuenta de Google o Github',
        );
      }
      if (error.message == 'You are already logged in') return setError("Ya tienes una sesión iniciada")
      setError(error.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const user = await loginWithGithub();

      if (!user) throw new Error("Ha ocurrido un error");
      setCurrentUser(user.user);
      setSuccess('Inicio de sesión exitoso');
      setTimeout(() => {
        router.push('/news');
      }, 500);
    } catch (error: any) {
      if (error.code && (error.code == 'auth/cancelled-popup-request' || error.code == 'auth/popup-closed-by-user')) return setError('Cerraste la ventana de inicio de sesión');
      if (error.message == 'You are already logged in') return setError("Ya tienes una sesión iniciada");
      if (error.code && error.code == 'auth/account-exists-with-different-credential') return setError('Ya tienes una cuenta registrada con este correo');
      setError(error.message);
    }
  }

  const handleGoogleLogin = async () => {
    try {

      const user = await loginWithGoogle();
      if (!user) throw new Error("Ha ocurrido un error");

      setCurrentUser(user.user);
      setSuccess('Inicio de sesión exitoso');
      setTimeout(() => {
        router.push('/news');
      }, 500);

    } catch (error: any) {
      if (error.code && (error.code == 'auth/cancelled-popup-request' || error.code == 'auth/popup-closed-by-user')) return setError('Cerraste la ventana de inicio de sesión')
      setError(error.message);
    }
  };

  return (
    <form action={handleSignInForm}>
      <AlertContainer>
        {error && <Alert type='error' text={error} />}
        {success && <Alert type='success' text={success} />}
      </AlertContainer>
      <AuthForm handleGoogleLogin={handleGoogleLogin} handleGithubLogin={handleGithubLogin} type='login' />
    </form>
  );
}
