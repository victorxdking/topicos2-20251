import {SafeAreaView, View, TextInput, TouchableOpacity, Text, StyleSheet} from "react-native"
import {FontAwesome5} from "@expo/vector-icons"
import Constants from "expo-constants"
export default function Login(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Text style={[styles.mensagens, {marginTop: 30}]}> Olá </Text> 
                    <Text style={styles.mensagens}> Pedro de Paula </Text>
                    <Text style={styles.mensagens}> Seja bem-vindo </Text>
                </View>
                <View style={styles.form}>
                    <FontAwesome5 name="lock" style={styles.icon}/>
                    <TextInput style={styles.caixa} placeholder="Digite a senha"
                                secureTextEntry={true} autoFocus={true}/>
                    <TouchableOpacity style={styles.botaoLogin}>
                        <Text style={styles.textoBotaoLogin}> Entrar </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.acoes}>
                    <TouchableOpacity>
                        <Text style={styles.textoBotao}> Esqueceu a senha </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textoBotao}> Criar conta </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b0006d",
        paddingTop: Constants.statusBarHeight
    },
    content: {
        paddingHorizontal: 30
    },
    mensagens: {
        marginTop: 10,
        color: "white",
        textAlign: "center"
    },
    form: {
        marginBottom: 30,
        marginTop: 30
    },
    icon: {
        color: "#929292",
        position: "absolute",
        fontSize: 16,
        top: 22,
        left: 22,
        zIndex: 10
    },
    caixa: {
        height: 60,
        borderRadius: 30,
        paddingHorizontal: 30,
        color: "#929292",
        backgroundColor: "#fff",
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: "center"
    },
    botaoLogin: {
        height: 50,
        borderRadius: 25,
        backgroundColor: "#8d015a",
        justifyContent: "center",
        marginTop: 15
    },
    textoBotaoLogin: {
        color: "#fff",
        textAlign: "center"
    },
    acoes: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textoBotao: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 30
    }
})