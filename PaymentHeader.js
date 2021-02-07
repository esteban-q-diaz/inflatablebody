import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Form from './Form.js'
export default function PaymentHeader({ navigation }) {
  return (
<SafeAreaView style={styles.container}>
    {/* Top left circle */}
    <View style={styles.topHeader}>
      <View style={styles.circleContainer}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>
      </View>

    {/* Middle Circle */}
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View style={styles.circleContainerMid}>
          <View style={styles.outerCircleMid}>
            <View style={styles.innerCircleMid} />
          </View>
        </View>

      {/* Top Right Circle */}
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View style={styles.circleContainerRight}>
            <View style={styles.outerCircleRight}>
              <View style={styles.innerCircleRight} />
            </View>
        </View>
      </View>

    <SafeAreaView style={styles.container}>
    {/* Top Header words */}
      <View style={styles.topHeader}>
        <Text style={styles.reservation}>Reservation</Text>
        <Text style={styles.payment}>Payment </Text>
        <Text style={styles.confirmation}>Confirmation </Text>
      </View>

      {/* Body */}
      <Text style={styles.body}>Payment</Text>
      <Text style={styles.text}>Choose your payment method</Text>
      <StatusBar style="auto" />

      {/* Form */}
      <Form navigation={navigation}/>
    </SafeAreaView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#4A7373',
    borderRadius: 19,
    height: 28,
    width: 28,
  },
  outerCircleMid: {
    borderRadius: 15,
    width: 26,
    height: 26,
    backgroundColor: 'white',
  },
  innerCircleMid: {
    borderRadius: 8,
    width: 16,
    height: 16,
    margin: 5,
    backgroundColor: '#4A7373'
  },
  circleContainerRight: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: 120,
    marginLeft: -4.8,
  },
  outerCircleRight: {
    borderRadius: 0,
    width: 0,
    height: 26,
    backgroundColor: 'red',
  },
  innerCircleRight: {
    borderRadius: 8,
    width: 16,
    height: 16,
    margin: 5,
    backgroundColor: '#C4C4C4'
  },
  reservation:{
    paddingRight: 20,
    color: '#B0AEAE'
  },
  payment: {
    paddingRight: 20,
    paddingLeft: 20,
    color: '#4A7373',
  },
  confirmation: {
    paddingLeft: 20,
    color: '#B0AEAE'
  },
  dotsNew: {
    borderRadius: 40,
    width: 80,
    height: 80,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'black'
  },
  body: {
    color: '#0E4444',
    fontSize: 50,
  },
  text: {
    letterSpacing: 1,
    paddingTop: 5,
    color: '#817D7D',
  }
});




