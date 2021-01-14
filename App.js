import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { StatusBar } from 'expo-status-bar';

var firebaseConfig = {
  apiKey: "AIzaSyBLDYRnspH2m0c5kZMPbdpiOwuwAgQScBk",
  authDomain: "smartparkapppfe.firebaseapp.com",
  projectId: "smartparkapppfe",
  storageBucket: "smartparkapppfe.appspot.com",
  messagingSenderId: "1033563328178",
  appId: "1:1033563328178:web:dc4be5c714bd661b2b43ab"
};

firebase.initializeApp(firebaseConfig);


const AppStack = createStackNavigator({
  Home : HomeScreen
})

const AuthStack = createStackNavigator({
  Login : LoginScreen,
  Register : RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading : LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
  );



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
