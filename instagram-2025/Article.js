import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Article({ item }) {
  return (
    <View style={styles.article}>
      <View style={styles.header}>
        <View style={styles.user}>
          <TouchableOpacity>
            <Image source={item.avatar} style={styles.avatar} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text numberOfLines={1} style={styles.name}> {item.name} </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Feather name="more-vertical" />
        </TouchableOpacity>
      </View>

      <Image source={item.image} style={styles.image} />

      <View style={styles.action}>
        <View style={styles.actionLeft}>
          <Feather name="heart" size={24} style={styles.icon} />
          <Feather name="message-circle" size={24} style={styles.icon} />
          <Feather name="send" size={24} style={styles.icon} />
        </View>
        <Feather name="bookmark" size={24} />
      </View>

      <View style={styles.info}>
        <Text style={styles.likes}>{item.likes} curtidas</Text>
        <Text style={styles.caption}>
          <Text style={styles.username}>{item.name} </Text>
          {item.caption}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 60,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16
  },
  name: {
    fontWeight: "bold",
    marginLeft: 8,
    color: "#262626"
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover"
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginVertical: 8
  },
  actionLeft: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 12
  },
  info: {
    paddingHorizontal: 16
  },
  likes: {
    fontWeight: "bold",
    marginBottom: 4
  },
  caption: {
    marginBottom: 4
  },
  username: {
    fontWeight: "bold"
  },
  date: {
    fontSize: 10,
    color: "#8e8e8e"
  }
});
