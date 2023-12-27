import { z } from "zod";
import { ICardReturn } from "./card.interfaces";

export const deckSchema = z.object({
  name: z.string(),
  cards: ICardReturn.pick({ id: true }).array(),
});
export const returnDeckSchema = deckSchema.extend({
  id: z.string(),
});

export type createDeck = z.infer<typeof deckSchema>;
export type IDeck = z.infer<typeof returnDeckSchema>;
