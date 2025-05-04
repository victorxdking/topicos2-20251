import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {StyleSheet, View, Text} from "react-native"
function HomeScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Tela Inicial </Text>
        </View>
    )
}
function NoticiasScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Tela de Notícias </Text>
        </View>
    )
}function ConfiguracoesScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Tela de Configurações </Text>
        </View>
    )
}
// cria menu inferior (abaixo)
const Tab = createBottomTabNavigator()

export default function App (){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Início" component={HomeScreen}/>
                <Tab.Screen name="Notícias" component={NoticiasScreen}/>
                <Tab.Screen name="Configurações" component={ConfiguracoesScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "center", alignItems: "center"
    },
    text: {
        fontSize: 20
    }
})