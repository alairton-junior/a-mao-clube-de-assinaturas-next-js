import { PlanCard } from "@/components/layout/card-plan";

export const Desenho = () => {
  return (
    <>
      <PlanCard
        title="Desenho Iniciante"
        description="Para quem está começando no universo da Desenho. Receba materiais básicos, tutoriais passo a passo e dicas para suas primeiras criações."
        items={[
          "Kit mensal com materiais intermediários e técnicas variadas",
          "Tutoriais com aprofundamento técnico e propostas criativas",
          "Acesso à comunidade no Discord",
          "Playlist de músicas para inspirar sua prática",
        ]}
        price={79.9}
        value="iniciante"
      />

      <PlanCard
        title="Desenho Intermediário"
        description="Para quem está iniciando nas manualidades. Aprenda no seu tempo com tutoriais passo a passo e receba materiais."
        items={[
          "Kit mensal com materiais intermediários e técnicas variadas",
          "Tutoriais com aprofundamento técnico e propostas criativas",
          "Acesso à comunidade no Discord",
          "Playlist de músicas para inspirar sua prática",
        ]}
        price={109.9}
        value="intermediario"
        isHighlighted
        buttonVariant="default"
      />

      <PlanCard
        title="Desenho Avançado"
        description="Para quem busca desafio e sofisticação no fazer à mão. Projetos complexos, curadoria de materiais e tutoriais avançados."
        items={[
          "Kit mensal com materiais intermediários e técnicas variadas",
          "Tutoriais com aprofundamento técnico e propostas criativas",
          "Acesso à comunidade no Discord",
          "Playlist de músicas para inspirar sua prática",
        ]}
        price={149.9}
        value="avancado"
      />
    </>
  );
};
