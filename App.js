import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Modal,
  Button,
  Alert,
} from "react-native";
const crearDialogo = () => {
  Alert.alert(
    "Titulo del alert",
    "subtitulo del alert o mensaje contenido en el alert",
    [
      { text: "Cancelar", onPress: () => {}, style: "cancel" },
      {
        text: "Aceptar",
        onPress: () => console.log("button press"),
      },
    ],
    {cancelable: false}
  );
};
export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <Button title="Abrir alert" onPress={crearDialogo}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 25,
    borderRadius: 5,
  },
  center: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
