import { Button } from "@/components/ui/button";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <section className="relative flex gap-6 p-6 md:py-24 md:px-12">
      <div className="flex flex-col gap-3 md:gap-6 container mx-auto">
        <h2 className="text-base md:text-3xl font-serif text-libre-caslon leading-snug tracking-tight relative inline-block">
          <div className="relative inline-block">
            <span className="text-primary font-semibold">Desacelere.</span>
            <Image
              src="/images/decor/underline_orange.png"
              alt="Decoração de Texto"
              width={140}
              height={40}
              className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[60%] pointer-events-none"
              aria-hidden="true"
            />
          </div>{" "}
          <span className="text-orange-400">Crie</span> com as{" "}
          <span className="font-bold">mãos.</span>
        </h2>

        <h2 className="text-sm md:text-2xl font-serif text-libre-caslon leading-snug tracking-tight relative inline-block">
          Cuide de <span className="font-bold">você.</span>
        </h2>

        <p className="max-w-1/2 text-gray-600">
          Explore o prazer de criar com as próprias mãos. Receba kits manuais
          com tudo o que você precisa para transformar tempo livre em momentos
          de cuidado, arte e expressão.
        </p>

        <div>
          <Button className="text-xs md:text-sm">
            Quero conhecer as assinaturas!
          </Button>
        </div>
      </div>
      <Image
        src="/images/landing-page/hero-section/belle-crochet.png"
        alt="Isabelle fazendo crochê"
        width={763}
        height={633}
        className="absolute right-0 top-1/2 h-auto w-1/2 lg:w-2/5 max-w-[500px]  object-cover -translate-y-1/2"
      />
    </section>
  );
};
