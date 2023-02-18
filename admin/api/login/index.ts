import { httpClient } from "../../config/httpClient";
import { appRoutes } from "../../config/app.routes";
import {SignInRequest, SignInResponse} from "./types";

export class LoginAPI {
  static async signIn(payload: SignInRequest) {
    const res = await httpClient.post<SignInResponse>(`${appRoutes.auth["sign-in"]}`, payload);
    return res.data;
  }
}
