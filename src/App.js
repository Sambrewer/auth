import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';
import { Header } from './components/common';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAlnVfBBkWH1FDbyK87MwmRs-onS75_mZk',
      authDomain: 'auth-11d86.firebaseapp.com',
      databaseURL: 'https://auth-11d86.firebaseio.com',
      projectId: 'auth-11d86',
      storageBucket: 'auth-11d86.appspot.com',
      messagingSenderId: '509696542690'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
