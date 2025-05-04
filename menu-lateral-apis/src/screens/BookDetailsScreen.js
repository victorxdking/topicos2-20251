import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BookDetailsScreen({ route }) {
  const { title, author, year } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>Autor: {author}</Text>
      <Text>Ano de publicação: {year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});
