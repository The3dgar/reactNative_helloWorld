import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Modal,
  Button,
} from "react-native";

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          // some code
        }}
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Soy un modal</Text>
            <Button
              title="Cerrar modal"
              onPress={() => setModal(!modal)}
            ></Button>
          </View>
        </View>
      </Modal>
      <Text>No soy del Modal</Text>
      <Text>No soy del Modal</Text>
      <Text>No soy del Modal</Text>
      <Text>No soy del Modal</Text>
      <Text>No soy del Modal</Text>
      <Text>No soy del Modal</Text>
      <Text>No soy del Modal</Text>
      <Text>No soy del Modal</Text>
      <Text>No soy del Modal</Text>
      <Text>No soy del Modal</Text>
      <Text>No soy del Modal</Text>
      <Text>No soy del Modal</Text>
      <Text>No soy del Modal</Text>
      <Button title="Abrir Modal" onPress={() => setModal(!modal)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 25,
    borderRadius: 5
  },
  center: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
