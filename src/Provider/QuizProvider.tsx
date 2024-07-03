import { View, Text } from "react-native";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import questions from "../questions";
import { Inquiry } from "../types";

type QuizContext = {
  question?: Inquiry;
  questionI: number;
  onNext: () => void;
  selectedOpt?: string;
  setSelectedOpt: (newOption: string) => void;
  score: number;
  totalQ: number;
};

const QuizContext = createContext<QuizContext>({
  questionI: 0,
  onNext: () => {},
  setSelectedOpt: () => {},
  score: 0,
  totalQ: 0,
});

const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionI, setQuestionI] = useState(0);
  const question = questions[questionI];

  const [selectedOpt, setSelectedOpt] = useState<string | undefined>();
  const [score, setScore] = useState(0);

  const isFinished = questionI >= questions.length;

  const reset = () => {
    setQuestionI(0), setSelectedOpt(""), setScore(0);
  };

  const onNext = () => {
    if (isFinished) {
      reset();
      return;
    }

    if (selectedOpt === question?.correctAnswer) {
      setScore((currentScore) => currentScore + 1);
    }

    setQuestionI((currentValue) => currentValue + 1);
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        questionI,
        onNext,
        selectedOpt,
        setSelectedOpt,
        score,
        totalQ: questions.length,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;

export const useQuizContext = () => useContext(QuizContext);
