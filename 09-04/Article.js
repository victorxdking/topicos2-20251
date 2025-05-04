
import {View, Image, Text, StyleSheet, Linking, TouchableOpacity} from "react-native"
import moment from "moment"
export default function Article ({item}){
    const openLink = (url) => {
        Linking.canOpenURL(url).then((supported) => {
            if (supported){
                Linking.openURL(url)
            }
            else {
                Alert.alert("Link Quebrado")
            }
        })
    }
    return (
        <View style={styles.article}>
            <Image style={styles.articleImage}
                    source={{uri: item.urlToImage}}/>
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => openLink(item.url)}>
                    <Text style={styles.articleTitle}> {item.title} </Text>
                </TouchableOpacity>
                <Text style={styles.articlePublished}> 
                    {moment(item.publishedAt).fromNow()} 
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    article: {
        flexDirection: "row",
        paddingVertical: 15
    },
    articleImage: {
        width: 150,
        height: 85,
        resizeMode: "contain",
        marginRight: 15
    },
    articleTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },
    articlePublished: {
        fontSize: 14
    }
})