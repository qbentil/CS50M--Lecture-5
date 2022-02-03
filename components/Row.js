import * as React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const Row = props =>{
    return (
      <View key = {props.key} style = {styles.row}>
        <Text style = {styles.name}> {props.name}</Text>
        <Text style = {styles.phone}> {props.phone}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  row: {
    padding: 5,
    // paddingVertical: 1,
    margin: 5,
    backgroundColor: "#8A39E1",
    borderRadius: 5,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  phone: {
    color: "#ECC488",
    fontSize: 15,
    
  }
})

export default Row;