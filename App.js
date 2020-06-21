import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00f"></ActivityIndicator>
      <ImageBackground
        style={styles.photo}
        // source={require("./assets/icon.png")}
        source={{ uri: "https://placekitten.com/200/200" }}
      >
        <Text>Hola mundo</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
