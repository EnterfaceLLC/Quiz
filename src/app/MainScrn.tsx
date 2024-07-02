import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import QuizCard from "../Components/QuizCard";
import { FontAwesome6 } from '@expo/vector-icons';

import questions from '../questions';
const question = questions[0];

const MainScrn = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contain}>
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>
        <View>
          <QuizCard inquiry={question} />
          <Text style={styles.time}>20 Sec</Text>
        </View>

        <Pressable
          onPress={() => console.warn("PRESSED")}
          onLongPress={() => console.warn("LONG PRESS")}
          style={styles.button}
        >
          <Text style={styles.buttonTxt}>Footer</Text>
          <FontAwesome6
            name="arrow-right-long"
            size={16}
            color="#000"
            style={styles.buttonIcon}
          />
        </Pressable>
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
  button: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: "#ffbb01",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTxt: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: "absolute",
    right: 20,
  },
});
