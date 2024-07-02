import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

type Card = {
  title: string;
  //   children: React.ReactNode;
};

const Card = ({ title, children }: PropsWithChildren<Card>) => {
  return (
    <View style={styles.cardBG}>
      <Text style={styles.text}>{title}</Text>
      {children}
    </View>
  );
};

export default Card;

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
