import { View, Text, StyleSheet, Pressable } from "react-native";

type AnswerOptionProps = {
  options: string;
  isSelected?: boolean;
  onPressed: () => void;
};

const Answer = ({ options, isSelected, onPressed }: AnswerOptionProps) => {
  return (
    <Pressable
      onPress={onPressed}
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
