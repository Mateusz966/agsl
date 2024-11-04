import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
    nick: z.string().optional(),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
});


export type RegisterPayload = z.infer<typeof registerSchema>;

export type LoginPayload = z.infer<typeof loginSchema>;
