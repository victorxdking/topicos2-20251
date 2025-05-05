import {useState} from "react"
import {View, Text, TextInput, Button, Alert} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
export default function App(){
    const [nome, setNome] = useState('')
    const [nomeSalvo, setNomeSalvo] = useState('')
    const salvarNome = async () => {
        try {
            // grava o nome no sistema de arquivo do celular
            await AsyncStorage.setItem('@nome_usuario', nome)
            Alert.alert('Sucesso', 'Nome salvo com sucesso')
        }
        catch (error){
            alert.alert('Erro', 'Não foi possível salvar o nome')
        }
    }
    const carregarNome = async () => {
        try {
            const nomeArmazenado = await AsyncStorage.getItem('@nome_usuario')
            if (nomeArmazenado != null){
                setNomeSalvo(nomeArmazenado)
            }
            else {
                setNomeSalvo('')
                Alert.alert('Aviso', 'Nenhum nome salvo encontrado')
            }
        }
        catch(error){
            Alert.alert('Erro', 'Não foi possível carregar o nome')
        }
    }
    return (
        <View>
            <Text> Digite seu nome: </Text>
            <TextInput value={nome} onChangeText={setNome} placeholder="Ex: Pedro"/>
            <View>
                <Button title="Salvar" onPress={salvarNome}/>
                <Button title="Carregar" onPress={carregarNome}/>
            </View>
            {
                nomeSalvo != '' && (
                    <Text> Nome salvo: {nomeSalvo} </Text>
                )
            }
        </View>
    )
}