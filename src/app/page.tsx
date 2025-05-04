"use client";
import Card from "@/components/Card";
import Tetragrammaton from "./Tetragrammaton";
import {
  elementalQuestions,
  ExpressionQuality,
  traitExpressions,
  Element,
} from "./data";
import { useState } from "react";
import Question from "@/components/Question";

export default function Home() {
  const [currQuestion, setCurrQuestion] = useState(elementalQuestions[0]);
  const [healthy, setHealthy] = useState<ExpressionQuality>("healthy");
  return (
    <div className="grid  items-center justify-items-center border-golden border-2 p-2 min-h-screen gap-16 font-[family-name:var(--font-serif)]">
      <main className="w-full h-full flex flex-col gap-[32px] border-golden border rounded items-center sm:items-start">
        <div className="absolute inset-0 pointer-events-none z-0 bg-[length:4px_4px] mix-blend-overlay opacity-30 background-noise"></div>
        <div className="z-10">
          <Tetragrammaton />

          <Question {...currQuestion} />
          <div className="flex flex-col gap-10 p-4">
            {Object.keys(traitExpressions[currQuestion.trait][healthy]).map(
              (element) => (
                <Card
                  key={element}
                  element={element as Element}
                  expression={
                    traitExpressions[currQuestion.trait][healthy][
                      element as Element
                    ].expression
                  }
                />
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
