import { ElementSymbols } from "@/components/ElementSymbols";
import { Card as CardUI } from "@/components/ui/card";
import type { ElementType, CardProps } from "@/types";

const Card = ({
  expression,
  element,
  polarity,
  trait,
  dispatch,
}: CardProps) => {
  const handleClick = () => {
    dispatch({
      type: "ANSWER_AND_NEXT",
      payload: {
        element,
        trait,
        expression,
        polarity,
      },
    });
  };
  return (
    <CardUI
      className="border-border flex flex-row flex-auto px-4 py-4 bg-black/30 backdrop-blur-sm "
      onClick={() => handleClick()}
    >
      <ElementSymbols element={element} className="w-16 flex-none" />
      <p className="flex-1 text-color text-lg">{expression}</p>
    </CardUI>
  );
};

export default Card;
