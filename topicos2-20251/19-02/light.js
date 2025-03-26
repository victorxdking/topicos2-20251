import {SafeAreaView, Image, Switch, StyleSheet} from "react-native"
import {useState} from "react"
import bulbOn from "bulb-on.jpg"
import bulbOff from "bulb-off.jpg"
import Constants from "expo-constants"
export default function Light(){
    // cria variável de estado com hook useState
    const [isEnabled, setIsEnabled] = useState(false)
    const mudaValor = () => setIsEnabled(
        (estadoAnterior) => !estadoAnterior)
    
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                fadeDuration={0}
                source={isEnabled ? bulbOn : bulbOff} 
                style={styles.image}/>
            <Switch
                onValueChange={mudaValor} 
                value={isEnabled}
                style={styles.switch}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        background: "black",
        paddingTop: Constants.statusBarHeight
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
        marginTop: 40,
        alignSelf: "center",
        borderRadius: 20
    },
    switch: {
        alignSelf: "center",
        transform: [{scale: 2.0}]
      }
})