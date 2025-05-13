import { AxiosResponse } from "axios";
import api from "./axios";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  id: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

export const login = (credentials: ILoginRequest): Promise<AxiosResponse> => {
  return api.post("/users/login", credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
