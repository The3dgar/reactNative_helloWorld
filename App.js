import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Platform,StatusBar, SectionList} from "react-native";
import { render } from "react-dom";
const data = [
  { key: "1", name: "Edgar" },
  { key: "2", name: "Perro" },
  { key: "3", name: "Gato" },
  { key: "4", name: "Loro" },
  { key: "5", name: "Tortuga" },
  { key: "6", name: "Edgar" },
  { key: "7", name: "Perro" },
  { key: "8", name: "Gato" },
  { key: "9", name: "Loro" },
  { key: "10", name: "Tortuga" },
  { key: "11", name: "Edgar" },
  { key: "12", name: "Perro" },
  { key: "13", name: "Gato" },
  { key: "14", name: "Loro" },
  { key: "15", name: "Tortuga" },
  { key: "16", name: "Edgar" },
  { key: "17", name: "Perro" },
  { key: "18", name: "Gato" },
  { key: "19", name: "Loro" },
  { key: "20", name: "Tortuga" },
]
export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  item:{
    padding:10,
    fontSize:22,
    height:50,
    borderBottomColor:"#ccc",
    borderBottomWidth: 1,
    width: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
