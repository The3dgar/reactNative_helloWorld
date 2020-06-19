import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Texto = ({ content, children }) => (
  <Text>{content ? content : children}</Text>
);

export default function App() {
  return (
    <View style={styles.container}>
      <h1>words from h1 tag</h1>
      <Texto content={"NOT the children"}>The children</Texto>
      <Texto content={"Hello World"}></Texto>
      <Texto content={"Bye World"}></Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
