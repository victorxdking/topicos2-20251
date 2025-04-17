import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet, SafeAreaView, Text } from "react-native";
import DogItem from "./components/DogItem";

export default function App() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDogs() {
      try {
        const response = await fetch("https://api.thedogapi.com/v1/breeds", {
          headers: {
            "x-api-key": "???"
          }
        });
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDogs();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Raças de Cachorros 🐶</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#3e95fe" />
      ) : (
        <FlatList
          data={dogs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <DogItem dog={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center"
  }
});
