import {z} from 'zod';

export const userLoginSchema = z.object({
  email: z.string().min(1, {message: 'Provide valid email'}).email(),
  password: z.string().min(1, {message: 'Password must be provided'}),
});
// extracting the type
export type UserLogin = z.infer<typeof userLoginSchema>;
