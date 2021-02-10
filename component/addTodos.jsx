import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodos({submission}){

    const [addTodos, setaddTodos] = useState('')

    const ChangeHandler =(e) =>{
        setaddTodos(e);
        // console.log(e);
    }

    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder="Add Todos ...."
            value={addTodos}
            onChangeText={ChangeHandler}
            />

            <Button color='coral' title="ADD TODO" 
            onPress= {() => submission(addTodos)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
  });