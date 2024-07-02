import {
  Pressable,
  View,
  Text,
  StyleSheet,
  PressableProps,
} from "react-native";
import React from "react";

type Button = {
  title: string;
  rightIcon: React.ReactNode;
} & PressableProps;

const Button = ({ title, rightIcon, ...pressableProps }: Button) => {
  return (
    <Pressable {...pressableProps} style={styles.button}>
      <Text style={styles.buttonTxt}>{title}</Text>

      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
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
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});
