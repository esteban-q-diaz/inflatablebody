import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Form from './Form.js'
import Unorderedlist from 'react-native-unordered-list';
import CreditCard from './CreditCard.js'
import PaymentHeader from './PaymentHeader.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Confirmation from './Confirmation.js'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Payment Screen */}
        <Stack.Screen
          name="Payment"
          component={PaymentHeader}
          options={{ title: 'Welcome' }}
        />
        {/* Confirmation Screen */}
        <Stack.Screen name="Confirmation" component={Confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
