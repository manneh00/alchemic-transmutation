import { QuizStateType, ActionType } from "@/types";
import { elementalQuestions } from "@/data";

export const initialState: QuizStateType = {
  currentIndex: 0,
  answers: [],
  questions: elementalQuestions.map(({ trait, element }) => ({
    trait,
    element,
  })),
};

export function quizReducer(
  state: QuizStateType,
  action: ActionType
): QuizStateType {
  switch (action.type) {
    case "ANSWER_AND_NEXT":
      const updated = [...state.answers];
      updated[state.currentIndex] = action.payload;
      return {
        ...state,
        answers: updated,
        currentIndex: state.currentIndex + 1,
      };

    case "PREVIOUS_QUESTION":
      return {
        ...state,
        currentIndex: Math.max(0, state.currentIndex - 1),
      };

    case "RESET":
      return {
        currentIndex: 0,
        answers: [],
        questions: state.questions,
      };

    default:
      return state;
  }
}
