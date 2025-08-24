import { QuizState, QuizReducerActionType } from "@/types";

export const initialState: QuizState = {
  currentIndex: 0,
  answers: [],
};

export function quizReducer(
  state: QuizState,
  action: QuizReducerActionType
): QuizState {
  switch (action.type) {
    case "ANSWER_QUESTION":
      const updatedAnswers = [...state.answers];

      updatedAnswers[state.currentIndex] = action.payload;
      return {
        ...state,
        answers: updatedAnswers,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };

    case "PREVIOUS_QUESTION":
      return {
        ...state,
        currentIndex: Math.max(0, state.currentIndex - 1),
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}
