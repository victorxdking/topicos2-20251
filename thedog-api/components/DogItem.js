import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DogItem({ dog }) {
  return (
    <View style={styles.card}>
      {dog.image?.url && (
        <Image source={{ uri: dog.image.url }} style={styles.image} />
      )}
      <Text style={styles.name}>{dog.name}</Text>
      <Text style={styles.info}>Temperamento: {dog.temperament || "N/A"}</Text>
      <Text style={styles.info}>Expectativa de vida: {dog.life_span}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
    resizeMode: "cover"
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6
  },
  info: {
    fontSize: 14,
    color: "#444",
    marginBottom: 4
  }
});
