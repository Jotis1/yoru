'use server';

import { HandleSubmitProps } from '../lib/types/actionTypes';

async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> {
  try {
    console.log(email, password);
    return email === 'example@mail.com' && password === '12345@Ab';
  } catch (error) {
    return false;
  }
}

export async function HandleSubmit({
  type,
  email,
  password,
  confirmPassword,
}: HandleSubmitProps): Promise<boolean> {
  if (type === 'login') {
    const res: boolean = await login({ email, password });
    return res;
  }

  return false;
}

export async function ChangeName({ name, user }: { name: string, user?: string }) {
  console.log(name);
}
