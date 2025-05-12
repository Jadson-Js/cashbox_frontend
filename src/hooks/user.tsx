import { useState } from "react";
import { ILoginRequest, ILoginResponse } from "../api/user";
import { loginService } from "../services/user";

export function useLogin() {
  const [user, setUser] = useState<ILoginResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: ILoginRequest) => {
    setLoading(true);
    try {
      const loggedInUser = await loginService(credentials);
      setUser(loggedInUser);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, login };
}
