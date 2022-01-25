import * as React from 'react';
import {Button,  Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    showContact: false
  }

  toggleContact = () =>{
    this.setState({showContact: !this.state.showContact})
    // console.log(this.state.showContact)
  }
  render(){
    return (
      <View style={styles.container}>
        <Button 
        title = "Toggle"
         onPress ={this.toggleContact}
         style={styles.paragraph} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
