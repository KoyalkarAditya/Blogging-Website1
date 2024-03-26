import { z } from "zod";
export const signupInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});
export const signinInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().default(true),
});
export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});

export type SignupInput = z.infer<typeof signupInputSchema>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type SigninInput = z.infer<typeof signinInputSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
