import * as React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const Row = props =>{
    return (
      <View key = {props.key}>
        <Text> {props.name}</Text>
        <Text> {props.phone}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  row: {
    padding: 20,
  }
})  

export default Row;