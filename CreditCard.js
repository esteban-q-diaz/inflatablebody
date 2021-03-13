import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Switch } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input"; // 0.4.1


export default class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  formatFunction(cardExpiry = ""){
    //expiryDate will be in the format MMYY, so don't make it smart just format according to these requirements, if the input has less than 2 character return it otherwise append `/` character between 2nd and 3rd letter of the input.
    if(cardExpiry.length < 2){
     return cardExpiry;
    }
    else{
     return cardExpiry.substr(0, 2) + "/" + (cardExpiry.substr(2) || "")
    }
 }

 inputToValue(inputText){
     //if the input has more than 5 characters don't set the state
     if(inputText.length < 6){
          const tokens = inputText.split("/");
          // don't set the state if there is more than one "/" character in the given input
          if(tokens.length < 3){
             const month = Number(tokens[1]);
             const year = Number(tokens[2]);
             //don't set the state if the first two letter is not a valid month
             if(month >= 1 && month <= 12){
                let cardExpiry = month + "";
                //I used lodash for padding the month and year with  zero
                if(month > 1 || tokens.length === 2){
                     // user entered 2 for the month so pad it automatically or entered "1/" convert it to 01 automatically
                     cardExpiry = _.padStart(month, 2, "0");
                }
                //disregard changes for invalid years
                if(year > 1 && year <= 99){
                    cardExpiry += year;
                }
                this.setState({cardExpiry});
             }
          }
     }
 }

 render(){
     let {cardExpiry} = this.state;
     return <TextInput styles={{backgroundColor:'red'}}
        value = {this.formatFunction(cardExpiry)}
        onChangeText={this.inputToValue.bind(this)}/>;
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'red'
  }
})
