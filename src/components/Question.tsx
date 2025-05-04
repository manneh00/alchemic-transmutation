import { QuestionProps } from "@/types";
import { ElementSymbols } from "./ElementSymbols";

const Question = ({ element, question, trait }: QuestionProps) => {
  return (
    <div className="flex flex-col mb-10 ">
      <div className="flex flex-row gap-12 text-center items-center">
        <ElementSymbols element={element} className="w-16" />
        <h1 className="text-8xl">{trait}</h1>
      </div>
      <h2 className="flex-1 text-4xl text-center">{question}</h2>
    </div>
  );
};

export default Question;
