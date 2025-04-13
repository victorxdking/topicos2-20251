import {SafeAreaView, View, FlatList, TouchableOpacity, Image, StyleSheet} from "react-native"
import {Feather} from "@expo/vector-icons"
import Constants from "expo-constants"
import data from './data'
import Stories from './Stories'
import Article from './Article'
    const INSTAGRAM_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";

export default function Instagram(){
    // função será chamada para cada article
    function renderItem({item, index}){
        if (index === 0){ // é o primeiro article
            return (
                <>
                    <View>
                        <Stories stories={data.stories} profile={data.profile}/>
                    </View>
                    <Article item={item}/> 
                </>
            )
        }
        else {
            return <Article item={item} /> // demais articles
        }
    }
    
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
            <FlatList 
                data={data.articles}
                renderItem={renderItem}
                keyExtractor={ (item) => item.id.toString()}
                showsVerticalScrollIndicator={false}/>
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