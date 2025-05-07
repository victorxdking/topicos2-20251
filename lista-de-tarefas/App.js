import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, IconButton, Provider as PaperProvider, MD3DarkTheme } from 'react-native-paper';

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  const adicionarTarefa = async () => {
    if (tarefa.trim() === '') {
      Alert.alert('Aviso', 'Digite uma tarefa válida');
      return;
    }

    const novaLista = [...listaTarefas, tarefa];
    setListaTarefas(novaLista);
    setTarefa('');
    await AsyncStorage.setItem('@lista_tarefas', JSON.stringify(novaLista));
  };

  const carregarTarefas = async () => {
    try {
      const tarefasSalvas = await AsyncStorage.getItem('@lista_tarefas');
      if (tarefasSalvas !== null) {
        setListaTarefas(JSON.parse(tarefasSalvas));
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as tarefas');
    }
  };

  const limparTarefas = async () => {
    await AsyncStorage.removeItem('@lista_tarefas');
    setListaTarefas([]);
  };

  return (
    <PaperProvider theme={MD3DarkTheme}>
      <View style={styles.container}>
        <Text style={styles.titulo}>📝 Lista de Tarefas</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          placeholderTextColor="#888"
          value={tarefa}
          onChangeText={setTarefa}
        />

        <IconButton
          icon="plus-circle"
          iconColor="#00ff99"
          size={30}
          onPress={adicionarTarefa}
          style={styles.botaoAdicionar}
        />

        <FlatList
          data={listaTarefas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item}</Text>
          )}
          ListEmptyComponent={<Text style={styles.vazio}>Nenhuma tarefa cadastrada</Text>}
          style={styles.lista}
        />

        <Button
          icon="delete"
          mode="outlined"
          textColor="#bb86fc"
          buttonColor="#121212"
          onPress={limparTarefas}
        >
          LIMPAR TUDO
        </Button>

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
    flex: 1,
    backgroundColor: '#121212'
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#00ff99'
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#1e1e1e',
    padding: 10,
    marginBottom: 10,
    color: 'white',
    borderRadius: 8
  },
  botaoAdicionar: {
    alignSelf: 'center',
    marginBottom: 10
  },
  item: {
    padding: 10,
    backgroundColor: '#2c2c2c',
    marginBottom: 5,
    borderRadius: 5,
    color: '#fff'
  },
  lista: {
    marginVertical: 20
  },
  vazio: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888'
  }
});
