import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// TouchableHighlight: only works in andrid
// TouchableNativeFeedback: only works in android

const { width, height } = Dimensions.get("window");

export default function App() {
  const [text, setText] = useState("Initial value");
  const [submit, setSubmit] = useState("");

  const myActionOne = () => {
    setSubmit(text);
    alert("Texto enviado con exito");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <Text>Texto: {submit}</Text>
        <TextInput
          style={styles.input}
          placeholder="Texto por defecto"
          onChangeText={(t) => setText(t)}
          defaultValue={text}
        ></TextInput>
        {/* <Button onPress={myActionOne} title="Aceptar" /> */}
        <TouchableOpacity style={styles.TouchableOpacity} onPress={myActionOne}>
          <View style={styles.view}>
            <Text>AceptarTc</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: "#eee",
  },
  view: {
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "100%",
  },
  scrollView: {
    width: Dimensions.get("window").width
  }
});
