import { ILoginRequest, login, signup } from "../api/user";

export interface IUser {
  id: string;
  email: string;
}

class AuthService {
  public async login(credentials: ILoginRequest): Promise<IUser> {
    try {
      const response = await login(credentials);

      if (response.status !== 200) {
        throw new Error("Login failed");
      }

      return { id: response.data.id, email: response.data.email };
    } catch (error: any) {
      throw error;
    }
  }

  public async signup(credentials: ILoginRequest): Promise<IUser> {
    try {
      const response = await signup(credentials);

      if (response.status !== 201) {
        throw new Error("Signup failed");
      }

      return { id: response.data.id, email: response.data.email };
    } catch (error: any) {
      throw error;
    }
  }
}

export const authService = new AuthService();
