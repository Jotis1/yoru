'use server';

import { revalidatePath } from 'next/cache';

export async function loginWithEmailAndPassword(
  prevState: any,
  formdata: FormData,
) {
  try {
    const emailField: any = formdata.get('email');
    const passwordField: any = formdata.get('password');

    revalidatePath('/login');

    return { response: { ok: true, message: 'Sesión iniciada con éxito' } };
  } catch (error: any) {
    return { response: { ok: false, message: error.message } };
  }
}

export async function ChangeName({
  name,
  user,
}: {
  name: string;
  user?: string;
}) {
  console.log(name);
}
