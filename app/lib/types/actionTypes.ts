export interface HandleSubmitProps {
    type: "login" | "signup",
    email: string,
    password: string,
    confirmPassword?: string
}