"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../auth/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const ok = await login(form.username, form.password);
    setLoading(false);
    if (ok) {
      router.replace("/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 gap-4">
      <div className="bg-white p-8 rounded shadow-md w-80 space-y-4 border border-gray-200">
        <h1 className="text-2xl font-bold mb-1 text-gray-800">Credentials [Demo]</h1>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Username: <strong className="text-green-600">superadmin</strong>
          </p>
          <p className="text-sm text-gray-600">
            Password: <strong className="text-green-600">superpass</strong>
          </p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Username: <strong className="text-green-600">admin</strong>
          </p>
          <p className="text-sm text-gray-600">
            Password: <strong className="text-green-600">adminpass</strong>
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80 space-y-4 border border-gray-200">
        <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
        <Input
          placeholder="Username"
          value={form.username}
          onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
          required
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
