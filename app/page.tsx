import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center">Clube À Mão</h1>
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            Um clube de assinaturas de manualidades para quem busca bem-estar,
            criatividade e expressão com as próprias mãos. A cada mês, você
            recebe um kit completo com materiais de alta qualidade, escolhidos
            com carinho e propósito.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"></div>

          <div className="mt-10 flex justify-center">
            <Button size="lg">Escolha seu Kit</Button>
          </div>
        </div>
      </main>

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        {/* Espaço para futuras seções ou destaques */}
      </div>
    </>
  );
}
