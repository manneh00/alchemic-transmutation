import { ElementSymbols } from "@/components/ElementSymbols";
import { Card as CardUI } from "@/components/ui/card";
import type { Element } from "@/components/ElementSymbols";

const Card = ({
  expression,
  element,
}: {
  expression: string;
  element: Element;
}) => {
  return (
    <CardUI className="border-border flex flex-row flex-auto px-2 bg-black/30 backdrop-blur-sm">
      <ElementSymbols element={element} className="w-16 flex-none" />
      <p className="flex-1 text-color text-lg">{expression}</p>
    </CardUI>
  );
};

export default Card;
