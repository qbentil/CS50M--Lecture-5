import * as React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';
import contacts, {compareNames} from './contacts'

import Constants from 'expo-constants';
import ContactForm from './components/ContactForm'
import FlatView from './components/FlatView'
import Row from './components/Row';
import ScrollViewContacts from './components/ScrollViewContacts'
import SectionListView from './components/SectionListView';

export default class App extends React.Component {
  state = {
    showContacts: true,
    contacts: contacts.sort(compareNames)
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

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
      }))
    // Hide form
    this.toggleContacts();
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="ADD CONTACT" onPress={this.toggleContacts} />
          {
            this.state.showContacts ?(
            <SectionListView contacts = {this.state.contacts} />
            ): <ContactForm onSubmit = {this.addContact} />
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
