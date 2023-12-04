import { z } from "zod";

export const EmailSchema = z.string().email();
export type EmailProps = z.infer<typeof EmailSchema>;

export const UserSchema = z.object({
    createdAt: z.string().datetime(),
    username: z.string(),
    avatar: z.string().url(),
    password: z.string(),
    email: EmailSchema,
    id: z.string(),
    uuid: z.string().uuid()
});
export type UserProps = z.infer<typeof UserSchema>
