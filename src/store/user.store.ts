import { ICard } from "@/interfaces/card.interfaces";
import { parseCookies, setCookie } from "nookies";
import { create } from "zustand";
interface UserStore {
  id: "";
  token: string;
  setToken: (newToken: string) => void;
}
interface DeckStore {
  id: string;
  name: string;
  card: ICard[];
  setDeck: (deck: DeckStore) => void;
}
interface DeckData {}
const cookies = parseCookies();
export const userStore = create<UserStore>()((set) => ({
  token: cookies["@cardGame-token"] ?? "",
  id: "",
  setToken: (newToken: string) =>
    set(
      () => (
        setCookie(null, "@cardGame-token", newToken, {
          maxAge: 24 * 60 * 60,
          path: "/",
        }),
        { token: newToken }
      )
    ),
}));
export const deckStore = create<DeckStore>()((set) => ({
  id: "",
  name: "",
  card: [] as ICard[],
  setDeck: ({ card, id, name }: DeckStore) =>
    set(() => ({ card: card, id: id, name: name })),
}));
