"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { login, logout } from "@/lib/auth";
import api from "@/lib/api";

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  loginUser: (username: string, password: string) => Promise<void>;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const acess = localStorage.getItem("acess");
    const storedUser = localStorage.getItem("user");
    if (acess && storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
    } else if (acess) {
      api
        .get("/auth/me/")
        .then((res) => {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch(() => logoutUser())
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  async function loginUser(username: string, password: string) {
    const userData = await login(username, password);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  function logoutUser() {
    logout();
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, loading, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
