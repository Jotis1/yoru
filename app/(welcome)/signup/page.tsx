'use client';

import { useState } from 'react';

import { Alert, AlertContainer } from '@/app/ui/alert';

import { useRouter } from 'next/navigation';

import { AuthForm } from '@/app/ui/forms';
import { useAuth } from '@/app/lib/context/auth_context';

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter();

  const { signUpWithEmailAndPassword, setCurrentUser, currentUser, loginWithGoogle, loginWithGithub } = useAuth();

  const handleSignUpForm = async (formdata: FormData) => {
    try {
      if (currentUser) throw new Error('You are already logged in');

      const emailField: any = formdata.get('email');
      const passwordField: any = formdata.get('password');
      const confirmPassword: any = formdata.get('confirm_password');

      const user = await signUpWithEmailAndPassword(
        emailField,
        passwordField,
        confirmPassword,
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
    <form action={handleSignUpForm}>
      <AlertContainer>
        {error && <Alert type='error' text={error} />}
        {success && <Alert type='success' text={success} />}
      </AlertContainer>
      <AuthForm handleGoogleLogin={handleGoogleLogin} handleGithubLogin={handleGithubLogin} type='signup' />
    </form>
  );
}
