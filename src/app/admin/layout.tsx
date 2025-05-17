import { ReactNode } from "react";
import { AuthProvider } from "../auth/AuthContext";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
