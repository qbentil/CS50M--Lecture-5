import * as React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';
import contacts, {compareNames} from './contacts'

import Constants from 'expo-constants';
import FlatView from './components/FlatView'
import Row from './components/Row';
import ScrollViewContacts from './components/ScrollViewContacts'
import SectionListView from './components/SectionListView';

export default class App extends React.Component {
  state = {
    showContacts: false,
  }

  toggleContacts = () => {
    this.setState(prevState => ({
      showContacts: !prevState.showContacts
    }))
  }

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }))
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="SORT CONTACTS" onPress={this.sort} />
          {this.state.showContacts &&(
           <SectionListView contacts = {this.state.contacts} />  /*{Using the SectionListView} */
          )
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 5
  },
});
