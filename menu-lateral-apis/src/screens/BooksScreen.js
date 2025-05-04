import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BooksScreen() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("https://openlibrary.org/subjects/fantasy.json?limit=10")
      .then((res) => res.json())
      .then((data) => setBooks(data.works))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" /> : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Detalhes do Livro", {
                title: item.title,
                author: item.authors?.[0]?.name || "Desconhecido",
                year: item.first_publish_year || "N/A"
              })}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text>Autor: {item.authors?.[0]?.name || "Desconhecido"}</Text>
              <Text>Ano: {item.first_publish_year || "N/A"}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    marginBottom: 16,
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8
  },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 4 }
});
