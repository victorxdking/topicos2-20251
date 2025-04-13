import { SafeAreaView, View, FlatList, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Constants from "expo-constants";
import data from './data';
import Stories from './Stories';
import Article from './Article';

export default function Instagram() {
  function renderItem({ item, index }) {
    if (index === 0) {
      return (
        <>
          <Stories stories={data.stories} profile={data.profile} />
          <Article item={item} />
        </>
      );
    } else {
      return <Article item={item} />;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" }}
          style={styles.logo}
        />
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="heart" size={24} color="#262626" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="message-circle" size={24} color="#262626" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Feed */}
      <FlatList
        data={data.articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />

      {/* Barra inferior */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabButton}>
          <Feather name="home" size={24} color="#262626" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Feather name="search" size={24} color="#262626" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Feather name="plus-square" size={24} color="#262626" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Feather name="video" size={24} color="#262626" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Image source={data.profile.avatar} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 50,
  },
  logo: {
    width: 110,
    height: 30,
    resizeMode: "contain",
  },
  headerRight: {
    flexDirection: "row",
  },
  iconButton: {
    padding: 8,
  },
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 55,
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
    backgroundColor: "#fff"
  },
  tabButton: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  profileIcon: {
    width: 26,
    height: 26,
    borderRadius: 13
  }
});
