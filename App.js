import React,{useState} from 'react';
import { StyleSheet, Button, Text, View , FlatList, Alert,
TouchableWithoutFeedback ,Keyboard} from 'react-native';
import Header from './component/header';
import TodoItem from './component/todoItems';
import AddTodos from './component/addTodos';

export default function App() {

  const [todos,setTodos] = useState([
    {key: '1' , text:'HTML'},
    {key: '2' , text:'CSS'},
    {key: '3' , text:'JavaScript'},
    {key: '4' , text:'React'},
    {key: '5' , text:'Node JS'}
  ]);

  const DeleteTodos=(key,text) =>{
    setTodos((previousTodos) => {
      return previousTodos.filter( todo => todo.key != key);
    });
    Alert.alert('Successfully Deleted',text);
  }

  //made this todos here because state present in app.js not in addTodos comp.
  //...previousTodos this spread operator takes all previous state value
  const SubmitTodos =(text) =>{

    if(text.length >= 10){
      setTodos((previousTodos) =>{

        return[
          {key: Math.random().toString() , text:text},
          ...previousTodos,
        ];
       
      });
      Alert.alert("Successfully Add Todo",text);

    }
    
    else{
      Alert.alert("OOPS","Please type something valid")
    }

  }

  return (
//TouchableWithoutFeedback supports only one child
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
          <View style={styles.content}>
            <AddTodos submission={SubmitTodos}/>

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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

