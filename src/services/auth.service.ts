import { ILoginRequest, ILoginResponse, login } from "../api/user";

export interface IUser {
  id: string;
  email: string;
}

class AuthService {
  private readonly TOKEN_KEY = "accessToken";
  private readonly REFRESH_TOKEN_KEY = "refreshToken";
  private readonly USER_KEY = "user";

  public async login(
    credentials: ILoginRequest,
  ): Promise<ILoginResponse | any> {
    try {
      const response = await login(credentials);
      this.setToken(response.accessToken);
      this.setRefreshToken(response.refreshToken);
      this.setUser({
        id: response.id,
        email: response.email,
      });
      return response;
    } catch (error: any) {
      throw new Error(error.message || "Login failed");
    }
  }

  /* public async register(userData: IRegisterRequest): Promise<IUser> {
    try {
      return await userApi.register(userData);
    } catch (error: any) {
      throw new Error(error.message || "Registration failed");
    }
  } */

  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  public setRefreshToken(token: string): void {
    localStorage.setItem(this.REFRESH_TOKEN_KEY, token);
  }

  public getUser(): IUser | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }

  public setUser(user: IUser): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  /* public async refreshToken(): Promise<boolean> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) return false;

    try {
      const response = await userApi.refreshToken(refreshToken);
      this.setToken(response.accessToken);
      this.setRefreshToken(response.refreshToken);
      return true;
    } catch (error) {
      this.logout();
      return false;
    }
  } */
}

export const authService = new AuthService();
