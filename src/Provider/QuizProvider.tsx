import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import questions from "../questions";
import { Inquiry } from "../types";

import AsyncStorage from "@react-native-async-storage/async-storage";

type QuizContext = {
  question?: Inquiry;
  questionI: number;
  onNext: () => void;
  selectedOpt?: string;
  setSelectedOpt: (newOption: string) => void;
  score: number;
  totalQ: number;
  bestScore: number;
};

const QuizContext = createContext<QuizContext>({
  questionI: 0,
  onNext: () => {},
  setSelectedOpt: () => {},
  score: 0,
  totalQ: 0,
  bestScore: 0,
});

const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionI, setQuestionI] = useState(0);
  const question = questions[questionI];

  const [selectedOpt, setSelectedOpt] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const isFinished = questionI >= questions.length;

  useEffect(() => {
    loadBestScore();
  }, []);

  useEffect(() => {
    //check for new best score//
    if (isFinished === true && score > bestScore) {
      setBestScore(score);
      saveBestScore(score);
    }
  }, [isFinished]);

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

  const saveBestScore = async (value: number) => {
    try {
      await AsyncStorage.setItem("best-score", value.toString());
    } catch (e) {
      // saving error
    }
  };

  const loadBestScore = async () => {
    try {
      const value = await AsyncStorage.getItem("best-score");
      if (value !== null) {
        // value previously stored
        setBestScore(Number.parseInt(value));
      }
    } catch (e) {
      // error reading value
    }
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
        bestScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;

export const useQuizContext = () => useContext(QuizContext);
