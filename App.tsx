import { StatusBar } from "expo-status-bar";

import MainScrn from "./src/app/MainScrn";
import QuizProvider from "./src/Provider/QuizProvider";

export default function App() {
  return (
    <>
      <QuizProvider>
        <MainScrn />
      </QuizProvider>
      <StatusBar style="auto" />
    </>
  );
}
