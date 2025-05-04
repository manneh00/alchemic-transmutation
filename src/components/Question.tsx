import { Element, TraitType } from "@/app/data";
import { ElementSymbols } from "./ElementSymbols";

export type QuestionProps = {
  element: Element;
  question: string;
  trait: TraitType;
};

const Question = ({ element, question, trait }: QuestionProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-12">
        <ElementSymbols element={element} className="w-16" />
        <h1 className="text-8xl">{trait}</h1>
      </div>
      <h2 className="flex-1 text-4xl">{question}</h2>
    </div>
  );
};

export default Question;
