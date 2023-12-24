import { LoginData, RegisterData } from "@/interfaces/user.interfaces";
import { userStore } from "@/store/user.store";
import { parseCookies } from "nookies";

export class Service {
  constructor() {}
  baseURL = "http://localhost:3333/";
  headers = {
    "Content-Type": "application/json; charset=utf-8",
  };
  setToken = userStore().setToken;
  cookies = parseCookies();
  async login(loginData: LoginData): Promise<string | undefined> {
    try {
      const res = await fetch(`${this.baseURL}user/login`, {
        body: JSON.stringify(loginData),
        method: "POST",
        headers: this.headers,
      });
      const token = await res.json();
      if (token.token) {
        this.setToken(token.token);
        return token.token;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async register(registerData: RegisterData) {
    if (!registerData.decks) {
      registerData.decks = [];
    }
    try {
      const res = await fetch(`${this.baseURL}user`, {
        body: JSON.stringify(registerData),
        method: "POST",
        headers: this.headers,
      });

      if (res.ok) {
        return res.json();
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
