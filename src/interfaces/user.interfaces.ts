import { z } from "zod";
import { ICardReturn } from "./card.interfaces";

export const schemaLogin = z.object({
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export type LoginData = z.infer<typeof schemaLogin>;

export const schemaResgister = z.object({
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
  name: z.string(),
  decks: ICardReturn.array().optional(),
});
export type RegisterData = z.infer<typeof schemaResgister>;
