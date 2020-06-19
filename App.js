import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
const Texto = ({ txt = "DefaultText", style }) => {
  const [content, setContent] = useState(txt);
  const updateText = () => {
    setContent("Bye world");
  };
  return (
    <Text style={[styles.customText, style]} onPress={updateText}>
      {content}
    </Text>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.yellow}></Texto>
      <Texto style={styles.green}></Texto>
      <Texto style={styles.blue}></Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "space-evenly"
  },
  customText: {
    fontSize: 14,
    color: "red",
    backgroundColor: "red",
  },
  yellow: {
    backgroundColor: "yellow",
  },
  green: {
    backgroundColor: "green",
    color: "white",
  },
  blue: {
    backgroundColor: "blue",
    color: "white",
  },
});
