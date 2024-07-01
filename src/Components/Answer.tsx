import { View, Text, StyleSheet } from "react-native";

const Answer = () => {
  return (
    <View style={styles.main}>
      <Text>Answer Option</Text>
    </View>
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
