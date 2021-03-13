import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Switch } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input"; // 0.4.1


export default class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  formatFunction(cardExpiry = ""){
    if(cardExpiry.length < 2){
     return cardExpiry;
    }
    else{
     return cardExpiry.substr(0, 2) + "/" + (cardExpiry.substr(2) || "")
    }
 }

 inputToValue(inputText){
     if(inputText.length < 6){
          const tokens = inputText.split("/");
          if(tokens.length < 3){
             const month = Number(tokens[1]);
             const year = Number(tokens[2]);
             if(month >= 1 && month <= 12){
                let cardExpiry = month + "";
                if(month > 1 || tokens.length === 2){
                     cardExpiry = _.padStart(month, 2, "0");
                }
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
