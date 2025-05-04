export interface QuestionProps {
  element: ElementType;
  question: string;
  trait: TraitType;
}

export interface CardProps {
  element: ElementType;
  polarity: PolarityType;
  trait: TraitType;
  expression: string;
  dispatch: React.Dispatch<QuizReducerActionType>;
}

export type SymbolType = {
  stroke: ElementType;
  className: string;
};

export type TraitExpression = {
  trait: TraitType;
  expression: string;
};

export type PolarityType = "healthy" | "toxic";

export type TraitExpressions = {
  [T in TraitType]: {
    [Q in PolarityType]: {
      [E in ElementType]: TraitExpression;
    };
  };
};

export type ElementType = "fire" | "water" | "air" | "earth";

export type TraitType =
  | "drive"
  | "libido"
  | "ambition"
  | "emotions"
  | "adaptability"
  | "intuition"
  | "thoughts"
  | "communication"
  | "curiosity"
  | "stability"
  | "patience"
  | "action";

export type ElementalQuestion = {
  trait: TraitType;
  question: string;
  element: ElementType;
};

export type AnswerType = {
  trait: TraitType;
  element: ElementType;
  expression: string;
  polarity: PolarityType;
};

export type QuizState = {
  currentIndex: number;
  answers: AnswerType[];
};

export interface ResultType {
  fire: ElementResultType;
  earth: ElementResultType;
  water: ElementResultType;
  air: ElementResultType;
}

export interface ElementResultType {
  blocked: number;
  expressions: number;
}

export type QuizReducerActionType =
  | { type: "ANSWER_AND_NEXT"; payload: AnswerType }
  | { type: "PREVIOUS_QUESTION" }
  | { type: "PROCESS_RESULTS"; payload: AnswerType }
  | { type: "RESET" };

export type ResultReducerActionType =
  | {
      type: "PROCESS_RESULTS";
      payload: {
        traitElement: ElementType;
        polarity: PolarityType;
        expressionElement: ElementType;
      };
    }
  | { type: "RESET" };
