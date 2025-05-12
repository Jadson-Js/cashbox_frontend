import * as userApi from "../api/user";
import { ILoginRequest, ILoginResponse } from "../api/user";

export const loginService = async (
  credentials: ILoginRequest,
): Promise<ILoginResponse> => {
  const response = await userApi.login(credentials);
  return response.data;
};
