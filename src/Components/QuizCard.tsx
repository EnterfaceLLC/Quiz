import { View } from "react-native";
import Answer from "./Answer";
import { Inquiry } from "../types";
import Card from "./Card";
import { useState } from "react";

type QuestionProps = {
  inquiry: Inquiry;
};

const QuizCard = ({ inquiry }: QuestionProps) => {
  const [selectedOpt, setSelectedOpt] = useState<string | undefined>();

  const PressedOpt = (inquiry: string) => {
    setSelectedOpt(inquiry);
    console.warn("Selected:", selectedOpt);
  };

  return (
    <Card title={inquiry.title}>
      <View style={{ gap: 10 }}>
        {inquiry.options.map((option) => (
          <Answer
            key={option}
            options={option}
            isSelected={option === selectedOpt}
            onPressed={() => PressedOpt(option)}
          />
        ))}
      </View>
    </Card>
  );
};

export default QuizCard;
