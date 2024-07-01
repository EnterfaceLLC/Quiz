import { View, Text, StyleSheet } from "react-native";
import Answer from "./Answer";

const QuizCard = () => {
  return (
    <View style={styles.cardBG}>
      <Text style={styles.text}>Who is .Enterface?</Text>
      <View style={styles.answer}>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
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
