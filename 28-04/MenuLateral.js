import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from "@react-navigation/drawer"
import {View, Text, StyleSheet} from "react-native"

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

const Drawer = createDrawerNavigator()

export default function App (){
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Início">
                <Drawer.Screen name="Início" component={HomeScreen}/>
                <Drawer.Screen name="Notícias" component={NoticiasScreen}/> 
                <Drawer.Screen name="Configurações" component={ConfiguracoesScreen}/> 
            </Drawer.Navigator>
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