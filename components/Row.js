import * as React from 'react';

import {Text, View} from 'react-native';

const Row = props =>{
    return (
      <View key = {props.key}>
        <Text> {props.name}</Text>
        <Text> {props.phone}</Text>
      </View>
    )
}

export default Row;