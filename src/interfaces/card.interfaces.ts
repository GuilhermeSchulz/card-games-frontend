import { z } from "zod";

export interface ICardData {
  name: string;
  attack: number;
  defense: number;
  image: string;
}
export const ICardReturn = z.object({
  name: z.string(),
  attack: z.number(),
  defense: z.number(),

  image: z.string(),
  id: z.string(),
});
export type IDeck = z.infer<typeof ICardReturn>;
