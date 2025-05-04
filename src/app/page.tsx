"use client";
import Card from "@/components/Card";
import Tetragrammaton from "./Tetragrammaton";
import { elementalQuestions, traitExpressions } from "@/data";
import type { ElementType, PolarityType } from "@/types";
import { useReducer, useState, useEffect } from "react";
import Question from "@/components/Question";
import { Switch } from "@/components/ui/switch";
import { quizReducer, initialState } from "@/state/quizReducer";

export default function Home() {
  //const [currQuestion, setCurrQuestion] = useState(elementalQuestions[1]);
  const [healthy, setHealthy] = useState<PolarityType>("healthy");

  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);
  // const healthy =
  //   quizState.answers.length > 0
  //     ? quizState.answers[quizState.currentIndex].polarity
  //     : "healthy";
  const currQuestion = elementalQuestions[quizState.currentIndex];

  useEffect(() => {
    if (quizState.answers.length)
      setHealthy(quizState.answers[quizState.currentIndex - 1].polarity);
  }, [quizState]);

  console.log(quizState);
  return (
    <div className="grid  items-center justify-items-center border-golden border-2 p-2 min-h-screen gap-16 font-[family-name:var(--font-serif)]">
      <main className="w-full h-full flex flex-col gap-[32px] border-golden border rounded items-center sm:items-start">
        <div className="absolute inset-0 pointer-events-none z-0 bg-[length:4px_4px] mix-blend-overlay opacity-30 background-noise"></div>
        <div className="z-10 p-4">
          <Tetragrammaton />

          <Question {...currQuestion} />
          <div className="flex flex-row gap-4 content-center items-center">
            <Switch
              checked={healthy === "healthy" ? true : false}
              onCheckedChange={() =>
                setHealthy((prev) => (prev === "healthy" ? "toxic" : "healthy"))
              }
            />
            <span>{healthy}</span>
          </div>

          <div className="flex flex-col gap-10">
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
                />
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
