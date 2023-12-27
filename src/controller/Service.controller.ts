import { IDeck, createDeck } from "@/interfaces/deck.interfaces";
import { LoginData, RegisterData } from "@/interfaces/user.interfaces";
import { userStore } from "@/store/user.store";
import { parseCookies } from "nookies";
import { config } from "../../app.config";
let endpoint = config.endpoints.producao;

switch (process.env.NODE_ENV) {
  case "development":
    endpoint = config.endpoints.developer;
    break;
  case "production":
    endpoint = config.endpoints.producao;
    break;
}

export class Service {
  constructor() {}
  baseURL = endpoint;

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
    console.log(this.baseURL);
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
  async getAllDecks() {
    try {
      const res = await fetch(`${this.baseURL}deck/all`, {
        headers: { ...this.headers, Authorization: `Bearer ${this.token}` },
      });
      console.log(res);
      if (res.ok) {
        const decks = await res.json();
        return decks;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getDeck(id: string) {
    try {
      const res = await fetch(`${this.baseURL}deck/${id}`, {
        headers: { ...this.headers, Authorization: `Bearer ${this.token}` },
      });
      console.log(res);
      if (res.ok) {
        const deck: Promise<IDeck | null> = await res.json();
        return deck;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async updateDeck(deckData: createDeck, id: string) {
    try {
      const res = await fetch(`${this.baseURL}deck/${id}`, {
        headers: { ...this.headers, Authorization: `Bearer ${this.token}` },
        method: "PATCH",
        body: JSON.stringify(deckData),
      });
      console.log(res);
      if (res.ok) {
        const deck: Promise<IDeck | null> = await res.json();
        return deck;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async deleteDeck(id: string) {
    try {
      const res = await fetch(`${this.baseURL}deck/${id}`, {
        headers: { ...this.headers, Authorization: `Bearer ${this.token}` },
        method: "DELETE",
      });
      console.log(res);
      if (res.ok) {
        const response = await res.json();
        return response;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
