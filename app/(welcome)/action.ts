'use server';

import { UserSchema, UserProps } from "@/app/schema";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginWithEmailAndPassword(prevState: any, formdata: FormData) {
  try {

    const emailField = formdata.get("email");
    const passwordField = formdata.get("password");

    if (!emailField || !passwordField) throw new Error("No puede haber campos vacíos");
    if (emailField instanceof File || passwordField instanceof File) throw new Error("El campo no puede ser un archivo");

    let email: string = emailField;
    let password: string = passwordField;

    const userURL: URL = new URL("https://656e112cbcc5618d3c247c75.mockapi.io/api/v1/users");
    userURL.searchParams.append("email", email);

    const response: Response = await fetch(userURL);

    if (!response.ok) throw new Error("Ha ocurrido un error");

    const data: UserProps[] = await response.json();

    if (data.length === 0) throw new Error("No se encuentra este correo");

    UserSchema.parse(data[0]);
    const userData: UserProps = data[0]

    if (userData.password !== password) throw new Error("Las contraseñas no coinciden");

    revalidatePath("/login");

    return { response: { ok: true, message: "Sesión iniciada con éxito" } }

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
