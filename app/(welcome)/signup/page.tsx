'use client';

import { useState } from 'react';

import { Alert, AlertContainer } from '@/app/ui/alert';

import { AuthForm } from '@/app/ui/forms';

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  return (
    <form >
      <AlertContainer>
        {error && <Alert type='error' text={error} />}
        {success && <Alert type='success' text={success} />}
      </AlertContainer>
      <AuthForm type='signup' />
    </form>
  );
}
