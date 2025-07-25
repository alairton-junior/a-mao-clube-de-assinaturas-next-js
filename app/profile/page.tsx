"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/header/header";
import api from "@/lib/api";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    api
      .get("/auth/me/")
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  function handleLogout() {
    localStorage.removeItem("acess");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
    router.push("/login");
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="flex flex-col items-center justify-center min-h-screen p-8">
          <p>Carregando...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4">Meu Perfil</h1>
        {user ? (
          <>
            <p className="text-lg text-gray-600 mb-2">
              Bem-vindo, {user.username || "usuário"}!
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={handleLogout}
            >
              Sair
            </button>
          </>
        ) : (
          <p className="text-lg text-gray-600">Você não está autenticado.</p>
        )}
      </main>
    </>
  );
}
