import { View, Text, StyleSheet } from "react-native";
import Answer from "./Answer";
import { Inquiry } from "../types";

type QuestionProps = {
  inquiry: Inquiry;
};

const QuizCard = ({ inquiry }: QuestionProps) => {
  const selectedOpt = inquiry.options[1];

  const PressedOpt = (inquiry: string) => {
    console.warn("Selected:", inquiry);
  };

  return (
    <View style={styles.cardBG}>
      <Text style={styles.text}>{inquiry.title}</Text>
      <View style={styles.answer}>
        {inquiry.options.map((option) => (
          <Answer
            key={option}
            options={option}
            isSelected={option === selectedOpt}
            onPressed={() => PressedOpt(option)}
          />
        ))}
      </View>
    </View>
  );
};

export default QuizCard;

const styles = StyleSheet.create({
  cardBG: {
    gap: 20,
    padding: 20,
    borderRadius: 20,
    paddingVertical: 40,
    backgroundColor: "#b0bdaf",

    //* Shadows //
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  answer: {
    gap: 10,
  },
});
