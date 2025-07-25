import Image from "next/image";

const steps = [
  {
    img: "/images/landing-page/how-it-works-section/step_1.png",
    alt: "Etapa 1 - Escolha sua jornada criativa",
    title: "1. Escolha sua jornada criativa",
    desc: "Selecione a assinatura conforme sua manualidade e experiência.",
  },
  {
    img: "/images/landing-page/how-it-works-section/step_2.png",
    alt: "Etapa 2 - Receba seu kit em casa",
    title: "2. Receba seu kit em casa",
    desc: "Todo mês, um kit novo chega na sua porta com tudo que você precisa.",
  },
  {
    img: "/images/landing-page/how-it-works-section/step_3.png",
    alt: "Etapa 3 - Crie no seu tempo",
    title: "3. Crie no seu tempo",
    desc: "Siga o passo a passo e aproveite o processo criativo no seu ritmo.",
  },
  {
    img: "/images/landing-page/how-it-works-section/step_4.png",
    alt: "Etapa 4 - Compartilhe e inspire",
    title: "4. Compartilhe e inspire",
    desc: "Mostre sua criação, inspire outras pessoas e faça parte da nossa comunidade.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="relative flex gap-6 p-6 py-28 md:px-12 bg-white justify-center">
      <Image
        src={"/images/decor/organic_decor_1.png"}
        alt="Formas Orgânicas"
        width={250}
        height={150}
        className="absolute top-0 right-0 z-0"
      />
      <Image
        src={"/images/decor/organic_decor_2.png"}
        alt="Formas Orgânicas"
        width={250}
        height={150}
        className="absolute bottom-0 right-0 z-0"
      />
      <Image
        src={"/images/decor/organic_line.png"}
        alt="Formas Orgânicas"
        width={400}
        height={160}
        className="absolute bottom-0 left-0 z-0 hidden md:block"
      />
      <div className="flex flex-col gap-2 container mx-auto">
        <p className="text-libre-caslon text-gray-600">Como funciona?</p>
        <h2 className="text-xl md:text-3xl font-serif text-libre-caslon font-bold">
          No seu <span className="text-orange-400">tempo</span>, do seu jeito.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-2"
            >
              <Image alt={step.alt} width={120} height={120} src={step.img} />
              <h4 className="font-bold">{step.title}</h4>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
