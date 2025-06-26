"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { login } from "@/lib/auth"; // Certifique-se de que o caminho está correto

type LoginFormData = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const router = useRouter();

  async function handleSignIn(data: LoginFormData) {
    try {
      await login(data.username, data.password);
      router.push("/profile"); // Redireciona para o perfil
    } catch (error) {
      alert("Usuário ou senha inválidos!");
    }
  }

  return (
    <div className="p-8 flex justify-center items-center min-h-screen">
      <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link href="/sign-in">Fazer Login</Link>
      </Button>
      <div className="flex w-[320px] flex-col justify-center gap-6 bg-white p-8 rounded shadow">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Login
          </h1>
        </div>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              {...register("username", { required: "Informe o usuário" })}
            />
            {errors.username && (
              <span className="text-xs text-red-500">{errors.username.message}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              {...register("password", { required: "Informe a senha" })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">{errors.password.message}</span>
            )}
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}