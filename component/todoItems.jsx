import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoItem({listingItems , handler}){

    return(
       <TouchableOpacity onPress={() => {handler(listingItems.key)}}>
           <Text style={styles.item}>{listingItems.text}</Text>
       </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    item: {
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 1,
      borderRadius: 10,
    }
  });  