"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export type Role = "superadmin" | "admin";

export type AuthUser = {
  username: string;
  role: Role;
};

// RBAC utility
export const hasPermission = (user: AuthUser | null, action: string): boolean => {
  if (!user) return false;
  const rolePermissions: Record<Role, string[]> = {
    superadmin: [
      "user:add", "user:edit", "user:delete", "service:add", "service:edit", "service:delete", "settings:edit"
    ],
    admin: [
      "user:add", "user:edit", "service:add", "service:edit"
    ]
  };
  return rolePermissions[user.role]?.includes(action) ?? false;
};

interface AuthContextType {
  user: AuthUser | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const USERS: Record<string, { password: string; role: Role }> = {
  superadmin: { password: "superpass", role: "superadmin" },
  admin: { password: "adminpass", role: "admin" },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(
    typeof window !== "undefined" ? JSON.parse(localStorage.getItem("authUser") || "null") : null
  );

  const login = async (username: string, password: string) => {
    const found = USERS[username];
    if (found && found.password === password) {
      const authUser = { username, role: found.role };
      setUser(authUser);
      if (typeof window !== "undefined") {
        localStorage.setItem("authUser", JSON.stringify(authUser));
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("authUser");
    }
  };

  // Keep user in sync with localStorage on mount (for SSR/CSR hydration)
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("authUser");
      if (stored) setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
