"use client";
import Card from "@/components/Card";
import Tetragrammaton, { ElementalLettersLine } from "./Tetragrammaton";
import { elementalQuestions, traitExpressions } from "@/data"; //DO NOT TRANSFORM DATA
import type { ElementType, PolarityType } from "@/types";
import { useReducer, useState, useEffect } from "react";
import Question from "@/components/Question";
import { Switch } from "@/components/ui/switch";
import { quizReducer, initialState } from "@/state/quizReducer";
import { resultsReducer, resultsInitialState } from "@/state/resultsReducer";
import { AnimatePresence } from "motion/react";

export default function Home() {
  const [healthy, setHealthy] = useState<PolarityType>("healthy");
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);
  const currQuestion = elementalQuestions[quizState.currentIndex];
  const [resultsState, resultsDispatch] = useReducer(
    resultsReducer,
    resultsInitialState
  );
  const [showResults, setShowResults] = useState(false);
  const [filterAnswer, setFilterAnswer] = useState<ElementType | null>(null);

  useEffect(() => {
    console.log({ quizState });
    if (quizState.answers.length) {
      //const prevQuestionIndex = quizState.currentIndex - 1;
      const { currentIndex } = quizState;
      const answer = quizState.answers[currentIndex];
      setHealthy(answer.polarity);
      setFilterAnswer(answer.element);
      resultsDispatch({
        type: "PROCESS_RESULTS",
        payload: {
          traitElement: elementalQuestions[currentIndex].element,
          expressionElement: answer.element,
          polarity: answer.polarity,
        },
      });
    }
    if (quizState.answers.length === elementalQuestions.length)
      setShowResults(true);

    console.log({ resultsState });
  }, [quizState]);

  return (
    <div className="grid  items-center justify-items-center border-golden border-2 p-2 min-h-screen gap-16 font-[family-name:var(--font-serif)]">
      <main className="w-full h-full flex flex-col gap-[32px] border-golden border rounded items-center sm:items-start">
        <div className="absolute inset-0 pointer-events-none z-0 bg-[length:4px_4px] mix-blend-overlay opacity-30 background-noise"></div>
        <div className="z-10 p-4">
          {/* <Tetragrammaton /> */}
          <ElementalLettersLine />

          {currQuestion && false && (
            <>
              <Question {...currQuestion} />
              <div className="flex flex-row gap-4 content-center items-center">
                <Switch
                  checked={healthy === "healthy" ? true : false}
                  onCheckedChange={() =>
                    setHealthy((prev) =>
                      prev === "healthy" ? "toxic" : "healthy"
                    )
                  }
                />
                <span>{healthy}</span>
              </div>
            </>
          )}

          <div className="flex flex-col gap-10">
            {currQuestion && false && (
              <AnimatePresence>
                {Object.keys(traitExpressions[currQuestion.trait][healthy]).map(
                  (element) => (
                    <Card
                      key={element}
                      element={element as ElementType}
                      expression={
                        traitExpressions[currQuestion.trait][healthy][
                          element as ElementType
                        ].expression
                      }
                      trait={currQuestion.trait}
                      polarity={healthy}
                      dispatch={quizDispatch}
                      filter={filterAnswer === (element as ElementType)}
                    />
                  )
                )}
              </AnimatePresence>
            )}
            {showResults && <div>{}</div>}
          </div>
        </div>
      </main>
    </div>
  );
}
