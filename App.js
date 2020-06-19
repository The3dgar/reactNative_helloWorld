import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
const Texto = ({ txt = "DefaultText", style }) => {
  const [content, setContent] = useState(txt);
  const updateText = () => {
    let reverse = content.split("").reverse().join("")
    setContent(reverse);
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  yellow: {
    backgroundColor: "yellow",
    color: "red",
    fontSize: 24
  }
});
