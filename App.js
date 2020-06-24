import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Button,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";

export default function App() {
  const [permissions, setPermissions] = useState(null);
  const [camType, setCamType] = useState(Camera.Constants.Type.front);

  const getPermissions = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status !== "granted") {
      return alert("Please allows to access all functions");
    }
    setPermissions(status === "granted");
  };
  useEffect(() => {
    getPermissions();
  });

  if (permissions === null)
    <View>
      <Text>Waiting for allows</Text>
    </View>;
  if (permissions === false)
    <View>
      <Text>No permissions to access the Camera</Text>
    </View>;
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={camType}>
        <Button
          onPress={() => {
            const { front, back } = Camera.Constants.Type;
            setCamType(camType === front ? back : front);
          }}
          title="Change"
        ></Button>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    // flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.8,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
