import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView, TextInput, Image} from 'react-native';
import axios from 'axios';
import CreditCard from './CreditCard.js'


function Confirmation () {


  return (
    <SafeAreaView style={confirmationStyle.container}>

      <View style={confirmationStyle.topHeader}>
        <View style={confirmationStyle.circleContainer}>
          <View style={confirmationStyle.outerCircle}>
            <View style={confirmationStyle.innerCircle} />
          </View>
        </View>

      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View style={confirmationStyle.circleContainerMid}>
          <View style={confirmationStyle.outerCircleMid}>
            <View style={confirmationStyle.innerCircleMid} />
          </View>
        </View>

      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View style={confirmationStyle.circleContainerRight}>
          <View style={confirmationStyle.outerCircleRight}>
            <View style={confirmationStyle.innerCircleRight} />
          </View>
        </View>
      </View>


      <SafeAreaView style={confirmationStyle.container}>

        <View style={confirmationStyle.topWords}>
          <Text style={confirmationStyle.reservation}>Reservation </Text>
          <Text style={confirmationStyle.payment}>Payment </Text>
          <Text style={confirmationStyle.confirmation}>Confirmation </Text>
        </View>

        <View style={confirmationStyle.topTitle}>
          <Text style={confirmationStyle.body} >Reservation confirmed!</Text>
          <Text style={confirmationStyle.topText}>Get your inner-body experience on</Text>
          <Text style={confirmationStyle.topTextTwo}>experience on</Text>
        </View>

      <Image
        source={{
          uri: 'https://inflatableimg.s3-us-west-1.amazonaws.com/Screen+Shot+2021-02-06+at+8.39.54+PM.png'
        }}
        style={{width: 400, height: 200}}
      />

      <Text style={confirmationStyle.text}>Reservation Details</Text>

      <SafeAreaView style={confirmationStyle.buttonContainer}>
        <View style={confirmationStyle.button}>
          <Button
            title="See other experiences"
            color="#817D7D"
            onPress={() => {submit();}}
          />
        </View>
        </SafeAreaView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const confirmationStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  topHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 80
  },
  topWords:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    left: 8,
  },
  topTitle:{
    marginBottom: 12,
    marginTop: 50,
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 100,
  },
  outerCircle: {
    borderRadius: 0,
    width: 21,
    height: 26,
    backgroundColor: 'white',
  },
  innerCircle: {
    borderRadius: 8,
    width: 16,
    height: 16,
    margin: 5,
    backgroundColor: '#C4C4C4'
  },
  circleContainerMid: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: 9,
    marginLeft: -12,
  },
  outerCircleMid: {
    borderRadius: 0,
    width: 12,
    height: 26,
    backgroundColor: 'white',
  },
  innerCircleMid: {
    borderRadius: 8,
    width: 16,
    height: 16,
    margin: 5,
    backgroundColor: '#C4C4C4'
  },
  circleContainerRight: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A7373',
    borderRadius: 19,
    height: 28,
    width: 28,
    marginRight: 75,
  },
  outerCircleRight: {
    borderRadius: 15,
    width: 26,
    height: 26,
    backgroundColor: 'white',
  },
  innerCircleRight: {
    borderRadius: 8,
    width: 16,
    height: 16,
    margin: 5,
    backgroundColor: '#4A7373'
  },
  reservation:{
    paddingRight: 20,
    color: '#B0AEAE'
  },
  payment: {
    paddingRight: 20,
    paddingLeft: 20,
    color: '#B0AEAE',
  },
  confirmation: {
    paddingLeft: 20,
    color: '#4A7373'
  },
  body: {
    color: '#0E4444',
    fontSize: 35,
  },
  topText: {
    letterSpacing: 1,
    paddingTop: 20,
    color: '#817D7D',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 35,
  },
  topTextTwo: {
    letterSpacing: 1,
    paddingTop: 5,
    color: '#817D7D',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 110,
    paddingBottom: 40,
  },
  text: {
    letterSpacing: 1,
    paddingTop: 50,
    color: '#817D7D',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  button: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#817D7D",
    backgroundColor: '#fff',
    color: '#fff',
    height: 50,
    width: 300,
    justifyContent: 'center',
  },
});

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

export default Confirmation