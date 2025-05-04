import { ResultType, ResultReducerActionType } from "@/types";

export const resultsInitialState: ResultType = {
  fire: {
    blocked: 0,
    expressions: 0,
  },
  water: {
    blocked: 0,
    expressions: 0,
  },
  earth: {
    blocked: 0,
    expressions: 0,
  },
  air: {
    blocked: 0,
    expressions: 0,
  },
};

export function resultsReducer(
  state: ResultType,
  action: ResultReducerActionType
) {
  switch (action.type) {
    case "PROCESS_RESULTS":
      const { traitElement, expressionElement, polarity } = action.payload;
      const updatedResults = {
        ...state,
        [traitElement]: {
          ...state[traitElement],
          blocked:
            polarity === "toxic"
              ? state[traitElement].blocked + 1
              : state[traitElement].blocked,
        },
        [expressionElement]: {
          ...state[expressionElement],
          expressions: state[expressionElement].expressions + 1,
        },
      };
      return {
        ...updatedResults,
      };
    default:
      return state;
  }
}
