'use server';

import { HandleSubmitProps } from "../lib/types/actionTypes";

async function login({ email, password }: { email: string, password: string }): Promise<boolean> {
    try {
        console.log(email, password)
        return (email === "example@mail.com") && (password === "12345@Ab");
    } catch (error) {
        console.log(error)
        return false;
    }
}

export async function HandleSubmit({
    type,
    email,
    password,
    confirmPassword
}: HandleSubmitProps): Promise<boolean> {


    if (type === "login") {
        const res: boolean = await login({ email, password });
        console.log(res);
        return res; // Devolvemos el resultado de login()
    }

    // Puedes manejar otros casos según sea necesario

    return false;
}
