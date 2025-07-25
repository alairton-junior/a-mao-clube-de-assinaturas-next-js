import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil } from "lucide-react";

export const PlansCatalogSection = () => {
  return (
    <section className="relative px-6 py-12 md:px-12 bg-primary overflow-hidden text-white">
      <div className="relative mx-auto container">
        <div className="flex flex-col items-center gap-4 mt-16">
          <h2 className="text-primary-foreground text-2xl md:text-4xl font-serif text-libre-caslon font-bold text-center">
            Catálago de Assinaturas
          </h2>
          <p className="max-w-xl text-center text-2xl">
            Nossa comunidade reúne pessoas em busca de bem-estar, foco e
            expressão.
          </p>
          <Tabs defaultValue="monthly" className="w-full mt-8">
            <TabsList className="mx-auto bg-white">
              <TabsTrigger value="aquarela">
                <Pencil />
                Aquarela
              </TabsTrigger>
              <TabsTrigger value="croche">Crochê</TabsTrigger>
              <TabsTrigger value="desenho">Desenho</TabsTrigger>
              <TabsTrigger value="bordado">Bordado</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
