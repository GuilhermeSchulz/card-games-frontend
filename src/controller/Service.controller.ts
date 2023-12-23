import { LoginData } from "@/app/login/validator";

export class Service {
  constructor() {}
  baseURL = "http://localhost:3333/";
  headers = {
    "Content-Type": "application/json; charset=utf-8",
  };

  async login(loginData: LoginData): Promise<string | undefined> {
    try {
      const res = await fetch(`${this.baseURL}user/login`, {
        body: JSON.stringify(loginData),
        method: "POST",
        headers: this.headers,
      });
      const token = await res.json();
      if (token.token) {
        return token.token;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
