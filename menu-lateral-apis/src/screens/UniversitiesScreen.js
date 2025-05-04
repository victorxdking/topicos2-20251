import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button, Linking, ActivityIndicator } from "react-native";

export default function UniversitiesScreen() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=Brazil")
      .then((res) => res.json())
      .then(setUniversities)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" /> : (
        <FlatList
          data={universities}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.country}</Text>
              <Button title="Acessar site" onPress={() => Linking.openURL(item.web_pages[0])} />
            </View>
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
  name: { fontWeight: "bold", fontSize: 16, marginBottom: 4 }
});
