import {SafeAreaView, Text, StyleSheet} from "react-native";
import Constants from "expo-constants"
export default function HelloWorld3(){
    return (
        <SafeAreaView style={styles.container}>
            <Text 
                style={[styles.fruta, {color: "yellow"}]}> Banana </Text>
            <Text 
                style={[styles.fruta, styles.maca]}> Maça </Text>
            <Text 
                style={[styles.fruta, styles.abacaxi]}> Abacaxi </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    },
    fruta: {
        marginTop: 50,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    maca: {
        color: "red"
    },
    abacaxi: {
        color: "orange",
        textDecoration: "underline",
        fontStyle: "italic",
        background: "#feefef"
    }

})