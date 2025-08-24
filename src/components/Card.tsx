import { ElementSymbols } from "@/components/ElementSymbols";
import { Card as CardUI } from "@/components/ui/card";
import type { CardProps } from "@/types";
import { motion, useAnimate, usePresence } from "motion/react";
import { useEffect } from "react";

const Card = ({
  expression,
  element,
  polarity,
  trait,
  dispatch,
  filter,
}: CardProps) => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        await animate(scope.current, {
          opacity: 0,
        });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent]);
  console.log(filter, element);
  const handleClick = () => {
    dispatch({
      type: "ANSWER_QUESTION",
      payload: {
        element,
        trait,
        expression,
        polarity,
      },
    });
  };
  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0, y: 25 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 25,
      }}
      layout
    >
      <CardUI
        className="border-border flex flex-row flex-auto px-4 py-4 bg-black/30 backdrop-blur-sm "
        onClick={() => handleClick()}
      >
        <ElementSymbols element={element} className="w-16 flex-none" />
        <p className="flex-1 text-color text-lg">{expression}</p>
      </CardUI>
    </motion.div>
  );
};

export default Card;
