import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const [locacion, setLocacion] = useState({});

  const buscaLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      return alert("No tenemos permisos");
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocacion(location);
  };
  useEffect(() => {
    buscaLocation();
  });
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {locacion.coords ? (
          <Marker
            coordinate={locacion.coords}
            title="Casita"
            description="Casita de julianny"
          ></Marker>
        ) : null}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
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
