import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

import Constants from 'expo-constants';
import React from 'react'

export default class ContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  }

  handleNameChange = name => {
      this.setState({name}, this.validateForm)
      console.log(this.state.isFormValid)
  }


  handlePhoneChange = phone => {
    if(+phone >=0 && phone.length <=10)
    {
      this.setState({phone}, this.validateForm)
    }
    console.log(this.state.isFormValid)
  }
  validateForm = () =>{
    if (+this.state.phone >=0 && this.state.phone.length === 10 && this.state.name.length >= 3)
    {
      this.setState({
        isFormValid: true
      })
    }else{
      this.setState({
        isFormValid: false
      })
    }
  }

  handleSubmit = () => {
    this.props.onSubmit({...this.state})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          returnKeyType='done'
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          returnKeyType='done'
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
        />
        <TouchableOpacity 
          style = {this.state.isFormValid? styles.button: styles.buttonDisabled} 
          onPress = {this.handleSubmit}
          disabled= {!this.state.isFormValid}
          >
          <Text style = {styles.txt}>ADD CONTACT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#8A39E1',
    minWidth: 100,
    height: 50,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 3,
    color: "#ECC488"
  },
  button: {
    marginTop: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#8A39E1',
    backgroundColor: "#8A39E1",
    minWidth: 100,
    height: 50,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 3,
  },
  buttonDisabled: {
    marginTop: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#B667F1',
    backgroundColor: "#B667F1",
    minWidth: 100,
    height: 50,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 3,
  },
  txt: {
    fontSize: 18,
    // fontWeight: "bold",
    color: "#fff",
  }
})
