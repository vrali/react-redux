import { appConfig } from "../appConfig";
import { BaseService } from "./baseService";

const authEndpoints = {
  login: `auth/login`,
  signup: `auth/signup`
};

export class AuthService extends BaseService {
  login(email: string, password: string) {
    return this.fetch(authEndpoints.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
  }
}
