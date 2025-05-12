import { useCallback, useEffect, useState } from "react";
import { ILoginRequest } from "../api/user";
import { authService, IUser } from "../services/auth.service";

interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = authService.getUser();
        const token = authService.getToken();

        if (user && token) {
          setState({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          setState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        console.log(error);
        setState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: "Failed to check authentication status",
        });
      }
    };

    checkAuth();
  }, []);

  const login = useCallback(async (credentials: ILoginRequest) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await authService.login(credentials);
      setState({
        user: {
          id: response.id,
          email: response.email,
        },
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      return response;
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message || "Login failed",
      }));
      throw error;
    }
  }, []);

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    login,
    clearError,
  };
}
