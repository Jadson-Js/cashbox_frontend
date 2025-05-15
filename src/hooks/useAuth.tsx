import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { ILoginRequest } from "../api/user";
import { authService, IUser } from "../services/auth.service";

export function useAuth() {
  const [data, setData] = React.useState<IUser>({ id: "", email: "" });
  const [error, setError] = React.useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(
    null,
  );

  React.useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("accessToken");

      setIsAuthenticated(!!token);
    };

    checkAuth();
  }, []);

  const login = async (credentials: ILoginRequest): Promise<void> => {
    try {
      const response = await authService.login(credentials);

      setData(response);
    } catch (error) {
      setError(true);
      throw error;
    }
  };

  const signup = async (credentials: ILoginRequest): Promise<void> => {
    try {
      const response = await authService.signup(credentials);

      setData(response);
    } catch (error) {
      setError(true);
      throw error;
    }
  };

  return { data, error, login, signup, isAuthenticated };
}
