import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({listingItems , handler}){

    return(
       <TouchableOpacity>
          <View style={styles.item}>
            <MaterialIcons name='delete' size={18} color='#333'
            
            onPress={() => {handler(listingItems.key,listingItems.text)}}/>
            
            <Text style={styles.itemText}>{listingItems.text}</Text>
      </View>
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
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemText: {
      marginLeft: 10,
    }
  });