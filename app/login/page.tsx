"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { login } from "@/lib/auth";

type LoginFormData = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const router = useRouter();

  async function handleSignIn(data: LoginFormData) {
    try {
      await login(data.username, data.password);
      router.push("/profile");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <div
      className="p-8 flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background/Login.png')" }}
    >
      <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link href="/sign-in">Fazer Login</Link>
      </Button>
      <div className="flex flex-col justify-center items-center lg:w-1/3 md:w-1/2 sm:w-1/2 h-100 gap-6 bg-white rounded shadow">
        <h1
          className="text-2xl font-semibold tracking-tight text-start"
          style={{ color: "var(--text-blue)" }}
        >
          Login
        </h1>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Email"
              id="username"
              type="text"
              {...register("username", { required: "Informe o usuário" })}
            />
            {errors.username && (
              <span className="text-xs text-red-500">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Input
              placeholder="Senha"
              id="password"
              type="password"
              {...register("password", { required: "Informe a senha" })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
