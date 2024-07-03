import { View } from "react-native";
import Answer from "./Answer";
import { Inquiry } from "../types";
import Card from "./Card";

type QuestionProps = {
  inquiry: Inquiry;
};

const QuizCard = ({ inquiry }: QuestionProps) => {
  return (
    <Card title={inquiry.title}>
      <View style={{ gap: 10 }}>
        {inquiry.options.map((option) => (
          <Answer key={option} options={option} />
        ))}
      </View>
    </Card>
  );
};

export default QuizCard;
