import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SectionList,
} from "react-native";
import { render } from "react-dom";

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: "Grupo 1",
            data: [
              { key: "1", name: "Leon" },
              { key: "2", name: "Perro" },
              { key: "3", name: "Gato" },
              { key: "4", name: "Loro" },
              { key: "5", name: "Tortuga" },
            ],
          },
          {
            title: "Grupo 2",
            data: [
              { key: "6", name: "Leon" },
              { key: "7", name: "Perro" },
              { key: "8", name: "Gato" },
              { key: "9", name: "Loro" },
              { key: "10", name: "Tortuga" },
            ],
          },
          {
            title: "Grupo 3",
            data: [
              { key: "10", name: "Tortuga" },
              { key: "11", name: "Edgar" },
              { key: "12", name: "Perro" },
              { key: "13", name: "Gato" },
              { key: "14", name: "Loro" },
              { key: "15", name: "Tortuga" },
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
      ></SectionList>
    </View>
  );
}

const styles = StyleSheet.create({
  section:{
    fontSize:16,
    fontWeight: "bold",
    backgroundColor: "blue",
    paddingLeft: 10,
    color: "white"
    
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
