"use client";
import { useAuth } from "../auth/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AdminAuthGuard({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user && pathname !== "/admin/login") {
      router.replace("/admin/login");
    }
  }, [user, pathname, router]);

  if (!user && pathname !== "/admin/login") {
    return null;
  }
  return <>{children}</>;
}
