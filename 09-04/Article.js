
import {View, Image, Text} from "react-native"
export default function Article ({item}){
    return (
        <View>
            <Image source={{uri: item.urlToImage}}/>
            <View>
                <Text> {item.title} </Text>
                <Text> {item.publishedAt} </Text>
            </View>
        </View>
    )
}