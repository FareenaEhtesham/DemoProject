import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from './component/header';
import TodoItem from './component/todoItems';

export default function App() {

  const [todos,setTodos] = useState([
    {key: '1' , text:'HTML'},
    {key: '2' , text:'CSS'},
    {key: '3' , text:'JavaScript'},
    {key: '4' , text:'React'},
    {key: '5' , text:'Node JS'}
  ]);

  const DeleteTodos=(key) =>{
    setTodos((previousTodos) => {
      return previousTodos.filter( todo => todo.key != key);
    });
  }

  return (
    <View style={styles.container}>
      <Header/>
    <View style={styles.content}>

      <View style={styles.lists}>
          <FlatList 
          
          data={todos}
          renderItem={({ item }) => (
          
              <TodoItem listingItems={item} handler={DeleteTodos}/>
            
          )}
          />
      </View>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
