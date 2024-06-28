import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username Must be atleast two characters")
  .max(20, "Username shuldnt be more than 20")
  .regex(/^[a-zA-z0-9_]+$/, "Username must not have any special characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email address" }),
  password: z
    .string()
    .min(6, { message: "Password Must be atleast 6 charactors" })
    .max(25),
});
