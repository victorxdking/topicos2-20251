import {View, Text, StyleSheet} from "react-native"

export default function HelloWorld2(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Hello World </Text>
            <Text style={styles.text}> Bom dia </Text>
            <Text style={styles.text}> Boa tarde </Text>
            <Text style={styles.text}> Boa noite </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green"
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "red",
        textTransform: "uppercase"
    }
})

// cada texto deve ter uma cor diferente
// aumentar o espaçamento entre os textos
// o primeiro texto deve estar alinhado à esquerda e o último à direita
