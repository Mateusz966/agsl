import {z} from 'zod';

export const userRegisterSchema = z.object({
  nick: z
    .string()
    .min(5, {message: 'Nick name must have at least 5 characters'}),
  email: z.string().min(1, {message: 'Provide valid email'}).email(),
  password: z.string().min(1, {message: 'Password must be provided'}),
});
// extracting the type
export type UserRegister = z.infer<typeof userRegisterSchema>;
