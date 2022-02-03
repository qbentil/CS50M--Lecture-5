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

  phoneFormat = (input) => {//returns (###) ### ####
    input = input.replace(/\D/g,'');
    var size = input.length;
    if (size>0) {input="("+input}
    if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
    if (size>6) {input=input.slice(0,9)+" " +input.slice(9)}
    return input;
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
    newContact.phone = this.phoneFormat(newContact.phone)
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
