import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MainScrn from "./src/app/MainScrn";

export default function App() {
  return (
    <>
      <MainScrn />
      <StatusBar style="auto" />
    </>
  );
}
