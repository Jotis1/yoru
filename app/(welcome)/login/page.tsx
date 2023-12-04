"use client";

import { loginWithEmailAndPassword } from '../action';
import { AuthForm } from '@/app/ui/forms';

import { useFormState, useFormStatus } from 'react-dom';
import { Alert, AlertContainer } from '@/app/ui/alert';
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

const initialState = {
  response: {
    ok: null,
    message: null
  }
}

export default function Page() {

  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(loginWithEmailAndPassword, initialState)

  const router = useRouter();

  useEffect(() => {
    if (state.response.ok) router.push("/news");
  })

  return (
    <form action={formAction}>
      <AuthForm type="login" />
      <AlertContainer>
        {state.response?.ok === false && (
          <Alert type='error' text={state?.response?.message}></Alert>
        )}
      </AlertContainer>
    </form>
  );
}
