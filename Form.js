import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView, TextInput} from 'react-native';
import axios from 'axios';
import CreditCard from './CreditCard.js'


function Form ( {navigation} ) {
  const [fullName, editFullName] = React.useState('')
  const [cardNumber, editCard] = React.useState(0)
  const [expDate, editExpDate] = React.useState('')
  const [cvc, editCvc] = React.useState(0)
  const [secure, editSecure] = React.useState('3')

  // useEffect() {
  //   alert('useEffect working')
  // }

  // function submit() {
  //   let form = {
  //     fullName,
  //     cardNumber,
  //     expDate,
  //     cvc
  //   }
  //   axios.post('http://localhost:8080/post', form)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log('err'))
  // }

  function cancel() {
    editFullName(prevState => prevState = '')
    editCard(prevState => prevState = '')
    editExpDate(prevState => prevState = '')
    editCvc(prevState => prevState = '')
  }

  handleCardNumber = (text) => {
    let formattedText = text.split(' ').join('');
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
    console.log(formattedText.length)
    for(var i = 0; i < formattedText.length; i++) {
      console.log('thisone:', formattedText[i])
      // if (formattedText.length === 6) {
        // editSecure(prevState => prevState = false)
        // editCard((prevState) => {formattedText = prevState + ' '})
        // console.log(`&bull`)
      if (formattedText.length === 4) {
        // editSecure(prevState => prevState = '10')
        formattedText = `●●●● `
      }
// }
      if (formattedText.length === 8) {
        formattedText = `●●●● ●●●● `
      }

      if (formattedText.length === 12) {
        formattedText = `●●●● ●●●● ●●●● `
      }

      // if (formattedText.length === 16) {
      //   formattedText = `**** **** ****`
      // }
    }
    editCard(prevState => formattedText)
    return formattedText;
  }

  handleExpNumber = (text) => {
    let formattedText = text.split(' ').join('');
    // if (formattedText.length > 0) {
    //   formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
    // }
    console.log(formattedText.length)
    for(var i = 0; i < formattedText.length; i++) {
      console.log('thisone:', formattedText[i])
      // if (formattedText.length === 6) {
        // editSecure(prevState => prevState = false)
        // editCard((prevState) => {formattedText = prevState + ' '})
        // console.log(`&bull`)
      if (formattedText.length === 2) {
        // editCvc(prevState => prevState = '10')
        console.log("form text: ", formattedText)
        editExpDate(prevState => formattedText + ` / `)
      } else {
         editExpDate(prevState => formattedText)
      }

    }

    return formattedText;
  }

  return (
    <View style={styles.container}>

      <SafeAreaView style={{margin: 20, top: 60}} >
        <View style={stylesTwo.fullNameInput}>
          <Text
            style={stylesTwo.fullName}>
              Full name
          </Text>

          <TextInput
            style={styles.form}
            placeholder=""
            value={fullName}
            color='#2A2A2A'
            onChangeText={text => editFullName(text)}
          />
        </View>

        <Text
          style={stylesTwo.fullName}>
            Credit card
        </Text>

        <TextInput
          style={styles.form}
          placeholderTextColor="#A09D9D"
          color='#2A2A2A'
          value={cardNumber}
          fontSize={15}
          returnKeyType='next'
          keyboardType = {'numeric'}
          // onChangeText={handleCardNumber}
          placeholder=""
          maxLength='16'
          secureTextEntry={true}
          onChangeText={text => editCard(text)}
        />
      </SafeAreaView>

      <SafeAreaView style={{margin: 20, flex: 1, flexDirection: 'row', top: 30}} >
        <View>
          <TextInput
            style={styles.formBottom}
            placeholder="Exp date"
            value={expDate}
            placeholderTextColor="#A09D9D"
            placeholderTextSize='3'
            // onChangeText={text => handleExpNumber(text)}
            maxLength='7'
            onChangeText={text => editExpDate(text)}
          />
        </View>

        <View>
          <TextInput
            style={styles.formBottom}
            placeholder="CVC"
            maxLength='3'
            secureTextEntry={true}
            placeholderTextColor="#A09D9D"
            value={cvc}
            onChangeText={text => editCvc(text)}
          />
        </View>
      </SafeAreaView>

      <SafeAreaView style={stylesTwo.buttonContainer}>
        <View style={stylesTwo.button}>
          <Button
            title="Pay Now"
            color="#fff"
            onPress={() => { submit(); }}
            onPress={() =>
              navigation.navigate('Confirmation', { name: 'Customer' })
            }
          />
        </View>

        <View style={stylesTwo.cancelButton}>
          <Button style={stylesTwo.button}
            title="Cancel"
            color="#817D7D"
            onPress={() => { cancel(); }}
          />
        </View>
      </SafeAreaView>

    </View>

  )
}

const stylesTwo = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  item: {
    width: '50%'
  },
  fullNameInput: {
    marginBottom: 22,
  },
  fullName: {
    color: '#A09D9D',
    fontSize: 10,
    marginLeft: 21,
    marginBottom: -30,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 300,
    marginLeft: 32,
    top: 80
  },
  button: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#0E4444",
    backgroundColor: '#0E4444',
    color: '#fff',
    height: 50,
    width: 300,
    justifyContent: 'center',
    shadowOffset:{ width: 0,  height: 7 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  cancelButton: {
    color: '#817D7D',
    height: 50,
    width: 300,
    justifyContent: 'center',
  }
})


const styles = StyleSheet.create({
  form: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#817D7D",
    width: 300,
    height: 45,
    margin: 12,
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 11,
    paddingBottom: 0,
    textAlignVertical: 'center',
    overflow: 'hidden'
  },
  formBottom: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#817D7D",
    width: 140,
    height: 40,
    margin: 12,
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    textAlignVertical: 'top',
  }
});

export default Form