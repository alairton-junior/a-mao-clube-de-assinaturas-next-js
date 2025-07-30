import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Aquarela } from "./aquarela";
import { Croche } from "./croche";
import { Bordado } from "./bordado";
import { Desenho } from "./desenho";

export const PlansCatalogSection = () => {
  return (
    <section className="relative px-6 py-24 md:px-12 bg-primary overflow-hidden text-white">
      <Image
        src={"/images/plans-catalog-section/pink-decor.png"}
        alt="Formas Orgânicas"
        width={250}
        height={150}
        className="absolute top-0 right-0 z-0"
      />
      <Image
        src={"/images/plans-catalog-section/yellow-decor.png"}
        alt="Formas Orgânicas"
        width={250}
        height={150}
        className="absolute top-0 left-0 z-0"
      />
      <Image
        src={"/images/plans-catalog-section/blue-decor.png"}
        alt="Formas Orgânicas"
        width={150}
        height={50}
        className="absolute top-20 left-0 z-0"
      />
      <div className="relative mx-auto container">
        <div className="flex flex-col items-center gap-4 mt-16">
          <h2 className="text-primary-foreground text-2xl md:text-4xl font-serif text-libre-caslon font-bold text-center">
            Catálago de Assinaturas
          </h2>
          <p className="max-w-xl text-center text-2xl">
            Nossa comunidade reúne pessoas em busca de bem-estar, foco e
            expressão.
          </p>
          <Tabs defaultValue="aquarela" className="w-full mt-8">
            <TabsList className="mx-auto bg-white">
              <TabsTrigger value="aquarela">Aquarela</TabsTrigger>
              <TabsTrigger value="croche">Crochê</TabsTrigger>
              <TabsTrigger value="desenho">Desenho</TabsTrigger>
              <TabsTrigger value="bordado">Bordado</TabsTrigger>
            </TabsList>

            <TabsContent
              value="aquarela"
              className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            >
              <Aquarela />
            </TabsContent>
            <TabsContent
              value="croche"
              className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            >
              <Croche />
            </TabsContent>
            <TabsContent
              value="bordado"
              className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            >
              <Bordado />
            </TabsContent>
            <TabsContent
              value="desenho"
              className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            >
              <Desenho />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
