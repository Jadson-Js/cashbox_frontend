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

export const login = (
  credentials: ILoginRequest,
): Promise<ILoginResponse | any> => {
  return api.post<ILoginResponse>("/users/login", credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
