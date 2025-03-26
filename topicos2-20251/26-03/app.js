import {SafeAreaView, View, FlatList, TouchableOpacity, Image, StyleSheet} from "react-native"
import {Feather} from "@expo/vector-icons"
import Constants from "expo-constants"
export default function Instagram(){
    const INSTAGRAM_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";

    return ( 
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name="camera" size={24}/>
                </TouchableOpacity>
                <Image style={styles.logo} source={{uri: INSTAGRAM_LOGO}}/>
                <TouchableOpacity>
                    <Feather name="send" size={24}/>
                </TouchableOpacity>
            </View>
            <FlatList/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: "#dbdbdb",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        height: 44
    },
    logo: {
        flex: 1,
        height: 30,
        resizeMode: "contain"
    }
})