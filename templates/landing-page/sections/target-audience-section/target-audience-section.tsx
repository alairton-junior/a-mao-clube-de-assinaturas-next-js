import { Users, Brush, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TargetAudienceSection = () => {
  return (
    <section className="relative px-6 py-12 md:px-12 bg-[#F6F3EE] overflow-hidden">
      <div className="relative mx-auto container">
        <h2 className="text-2xl md:text-4xl font-serif text-libre-caslon font-bold text-center">
          Para quem é o <span className="text-orange-500">À Mão</span>?
        </h2>

        <div className="grid grid-cols-1 gap-4 md:gap-12 mt-12">
          <div className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition-all">
            <Users className="w-6 h-6 text-orange-400 mb-4" />
            <p className="text-base leading-relaxed text-gray-600">
              Se você sente falta de momentos de pausa e criatividade...
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition-all">
            <Brush className="w-6 h-6 text-orange-400 mb-4" />
            <p className="text-base leading-relaxed text-gray-600">
              Se quer começar um hobby manual, mas não sabe por onde…
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition-all">
            <Sparkles className="w-6 h-6 text-orange-400 mb-4" />
            <p className="text-base leading-relaxed text-gray-600">
              Ou se já ama criar, mas procura uma experiência mais fluida e
              inspiradora...
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-16">
          <h2 className="text-2xl md:text-4xl font-serif text-libre-caslon font-bold text-center">
            Então o <span className="text-orange-500">À Mão</span> é para você!
          </h2>
          <p className="max-w-xl text-center text-gray-700">
            Nossa comunidade reúne pessoas em busca de bem-estar, foco e
            expressão.
          </p>
          <Button size={"lg"} className="mt-4">
            Junte-se a nós
          </Button>
        </div>
      </div>
    </section>
  );
};
