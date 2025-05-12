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

export const login = (credentials: ILoginRequest) => {
  return api.post("/users/login", credentials);
};
