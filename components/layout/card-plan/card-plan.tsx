import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type PlanCardProps = {
  title: string;
  description: string;
  items: string[];
  price: number;
  isHighlighted?: boolean;
  buttonVariant?: "default" | "outline";
  value: string;
};

export const PlanCard = ({
  title,
  description,
  items,
  price,
  isHighlighted = false,
  buttonVariant = "outline",
  value,
}: PlanCardProps) => {
  return (
    <div
      className={`h-full bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between gap-4 border border-orange-100 hover:shadow-xl transition-shadow ${
        isHighlighted ? "scale-105 z-10" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-primary text-libre-caslon text-2xl font-bold">
          {title}
        </h2>
        <p className="text-gray-600 text-center">{description}</p>

        <h3 className="text-2xl font-bold mt-2 text-primary text-libre-caslon mx-auto">
          <span className="text-orange-400 font-normal text-lg">R$</span>{" "}
          <span className="text-orange-400 text-4xl">{price.toFixed(2)}</span>{" "}
          <span className="text-gray-500 font-normal">/mês</span>
        </h3>

        <Button variant={buttonVariant} className="w-full mt-2">
          Quero assinar!
        </Button>
      </div>

      <Accordion type="single" collapsible className="w-full mt-auto">
        <AccordionItem value={value}>
          <AccordionTrigger className="text-primary font-medium">
            O que a assinatura inclui
          </AccordionTrigger>
          <AccordionContent className="transition-all duration-300 ease-in-out">
            <ul className="text-gray-500 text-sm list-disc list-inside mb-2">
              {items.map((item, index) => (
                <li key={index} className="mb-2 md:w-3/4 mx-auto">
                  {item}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
