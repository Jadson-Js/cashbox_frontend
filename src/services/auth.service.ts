import { ILoginRequest, login } from "../api/user";

export interface IUser {
  id: string;
  email: string;
}

class AuthService {
  public async login(credentials: ILoginRequest): Promise<IUser> {
    try {
      const response = await login(credentials);

      if (!response || !response.data) {
        throw new Error("Invalid response from login API");
      }

      if (response.status !== 200) {
        throw new Error("Login failed");
      }

      return { id: response.data.id, email: response.data.email };
    } catch (error: any) {
      throw error;
    }
  }
}

export const authService = new AuthService();
