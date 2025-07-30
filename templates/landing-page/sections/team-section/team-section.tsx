import Image from "next/image";

const team = [
  {
    name: "Mariana Rangel",
    role: "UX/UI Designer",
    img: "/images/team/mariana.png",
  },
  {
    name: "Isabelle Oliveira",
    role: "Conteúdo & Manualidades",
    img: "/images/team/isabelle.png",
  },
  {
    name: "Alairton Junior",
    role: "Desenvolvedor Front-end",
    img: "/images/team/alairton.png",
  },
  {
    name: "Jamyle Layla",
    role: "Marketing & Social",
    img: "/images/team/jamyle.png",
  },
  {
    name: "Bruno Alejandro",
    role: "Desenvolvedor Back-end",
    img: "/images/team/bruno.png",
  },
  {
    name: "Kelvin Erick",
    role: "Designer Gráfico",
    img: "/images/team/kelvin.png",
  },
];

export const Team = () => {
  return (
    <section className="relative flex flex-col items-center gap-10 p-6 py-52 md:px-12 bg-white">
      <Image
        src={"/images/decor/lines-pink.png"}
        alt="Formas Orgânicas"
        width={250}
        height={150}
        className="absolute top-0 left-0 z-0"
      />
      <h4 className="text-orange-400 text-lg font-semibold tracking-widest uppercase mb-2">
        Jamalabrel
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold text-libre-caslon text-primary mb-8 text-center">
        Conheça a equipe criadora
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-5xl">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center  p-6 ">
            <Image
              alt={member.name}
              src={member.img}
              width={310}
              height={400}
              className="object-cover w-full h-full"
            />

            <h3 className="text-xl font-bold text-libre-caslon text-primary">
              {member.name}
            </h3>
            <p className="text-gray-500 text-base">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
