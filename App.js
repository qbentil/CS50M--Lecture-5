import * as React from 'react';

import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';

import Constants from 'expo-constants';
import Row from './'
import contacts from './components/Row'

export default class App extends React.Component {
  state = {
    showContacts: false,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  render() {
    if(this.state.showContacts)
    {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <ScrollView>
          {
            contacts.map(contact => {
              return <Row {...contact} />
            })
          }
        </ScrollView>
      </View>
    );
    }
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
