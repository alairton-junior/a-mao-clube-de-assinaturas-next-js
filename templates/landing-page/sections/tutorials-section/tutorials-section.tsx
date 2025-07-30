import Image from "next/image";

export const TutorialsSection = () => {
  return (
    <section className="relative flex flex-col items-center gap-10 p-6 py-32 md:px-12 bg-white">
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
      <h2 className="text-3xl md:text-4xl font-bold text-libre-caslon text-primary mb-8 text-center">
        Nossos tutoriais
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full container">
        <div className="aspect-[9/16] w-full h-auto rounded-xl overflow-hidden">
          <iframe
            src="https://www.tiktok.com/embed/7381965495139962117"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
            title="Tutorial TikTok 1"
          />
        </div>
        <div className="aspect-[9/16] w-full rounded-xl overflow-hidden">
          <iframe
            src="https://www.tiktok.com/embed/7421223204330491141"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
            title="Tutorial TikTok 2"
          />
        </div>
        <div className="aspect-[9/16] w-full rounded-xl overflow-hidden">
          <iframe
            src="https://www.tiktok.com/embed/7332266642216373510"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
            title="Tutorial TikTok 2"
          />
        </div>
      </div>
    </section>
  );
};
