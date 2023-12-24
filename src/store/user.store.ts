import { parseCookies, setCookie } from "nookies";
import { create } from "zustand";
interface UserStore {
  token: string;
  setToken: (newToken: string) => void;
}
const cookies = parseCookies();
export const userStore = create<UserStore>()((set) => ({
  token: cookies["@cardGame-token"] ?? "",

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
