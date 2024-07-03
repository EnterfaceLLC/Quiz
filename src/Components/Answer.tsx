import { View, Text, StyleSheet, Pressable } from "react-native";
import { useQuizContext } from "../Provider/QuizProvider";

type AnswerOptionProps = {
  options: string;
};

const Answer = ({ options }: AnswerOptionProps) => {
  const { selectedOpt, setSelectedOpt } = useQuizContext();

  const isSelected = options === selectedOpt;

  return (
    <Pressable
      onPress={() => setSelectedOpt(options)}
      style={[
        styles.main,
        isSelected && { backgroundColor: "teal", borderColor: "teal" },
      ]}
    >
      <Text>{options}</Text>
    </Pressable>
  );
};

export default Answer;

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 20,
    borderRadius: 100,
  },
  text: {},
});
