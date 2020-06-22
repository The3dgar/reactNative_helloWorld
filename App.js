import React, { useEffect } from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import * as Location from "expo-location";

export default function App() {
  const buscaLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if(status !== "granted") {
      return alert("No tenemos permisos")
    }

    const location = await Location.getCurrentPositionAsync({})
    console.log(location);
  };
  useEffect(() => {
    buscaLocation();
  });
  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>
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
