import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import { render } from "react-dom";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // un efecto es una data que no conocemos su magnitud
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
