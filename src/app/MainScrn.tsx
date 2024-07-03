import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import QuizCard from "../Components/QuizCard";
import { FontAwesome6 } from "@expo/vector-icons";

import questions from "../questions";
import Card from "../Components/Card";
import Button from "../Components/Button";

import { useQuizContext } from "../Provider/QuizProvider";

const MainScrn = () => {
  // const [questionI, setQuestionI] = useState(0);
  // const question = questions[questionI];
  const { question, questionI, onNext, score, totalQ } = useQuizContext();

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contain}>
        <View>
          <Text style={styles.title}>
            Question {questionI + 1}/{totalQ}
          </Text>
        </View>
        {question ? (
          <View>
            <QuizCard inquiry={question} />
            <Text style={styles.time}>20 Sec</Text>
          </View>
        ) : (
          <Card title="Great Job">
            <Text>
              Correct: {score}/{totalQ}
            </Text>
            <Text>Best Score: 10</Text>
          </Card>
        )}

        <Button
          onPress={onNext}
          onLongPress={() => console.warn("Long Pressed")}
          title={"Next"}
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="#000" />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScrn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#697169",
  },
  contain: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    color: "#ffbb01",
    textAlign: "center",
  },
  time: {
    color: "#ffbb01",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 15,
  },
});
