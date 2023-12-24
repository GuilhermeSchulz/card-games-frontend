import { LoginData, RegisterData } from "@/interfaces/user.interfaces";
import { userStore } from "@/store/user.store";
import { parseCookies } from "nookies";

export class Service {
  constructor() {}
  baseURL = "http://localhost:3333/";
  headers = {
    "Content-Type": "application/json; charset=utf-8",
  };
  token = userStore().token;
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
  async getCards() {
    try {
      const res = await fetch(`${this.baseURL}cards`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      console.log(res);
      if (res.ok) {
        const cards = await res.json();
        return cards;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async userRetriever() {
    try {
      const res = await fetch(`${this.baseURL}user`, {
        headers: { ...this.headers, Authorization: `Bearer ${this.token}` },
      });
      console.log(res);
      if (res.ok) {
        const user = await res.json();
        return user;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
