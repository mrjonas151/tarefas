import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import Tarefa from './src/Tarefa';

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [list, setList] = useState([]);

  function handleAdd(){
    if(tarefa === ''){
      return;
    }

    const dados = { 
      key: Date.now,
      item: tarefa
    }

    setList( (oldArray) => [...oldArray, dados]);

    setTarefa('');
  }

  function handleDelete(item){
    let filtroItem = list.filter( (tarefa) => {
      return(tarefa.item !== item);
    })
    setList(filtroItem);
  }

  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Tarefas</Text>
      <View style = {styles.containerInput}>
        <TextInput 
        placeholder='Digite uma nova tarefa' 
        placeholderTextColor={'gray'}
        style = {styles.input}
        value= {tarefa}
        onChangeText ={ (text) => setTarefa(text) }
        />

      <TouchableOpacity style = {styles.buttonAdd} onPress={handleAdd}>
        <FontAwesome name='plus' size={20} color={'white'}/>
      </TouchableOpacity>
      </View>
      <FlatList 
        data = {list}
        keyExtractor={ (item) => item.key }
        renderItem={({item}) => <Tarefa data={item} deleteItem = {() => handleDelete(item.item)}/> }
        style = {styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272E',
    paddingTop: 28,
  },

  title:{
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12,
  },

  containerInput:{
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },

  input:{
    width: '75%',
    backgroundColor: "#FFF",
    fontSize: 13,
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
  },

  buttonAdd:{
    width: '15%',
    height: 44,
    backgroundColor: '#73f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderRadius: 4,
  },

  lista:{
    flex: 1,
    backgroundColor: 'white',
    paddingStart: '4%',
    paddingEnd: '4%',
  }
});
