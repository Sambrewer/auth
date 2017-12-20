import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';
import { Header, Button, Spinner, CardSection } from './components/common';


class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAlnVfBBkWH1FDbyK87MwmRs-onS75_mZk',
      authDomain: 'auth-11d86.firebaseapp.com',
      databaseURL: 'https://auth-11d86.firebaseio.com',
      projectId: 'auth-11d86',
      storageBucket: 'auth-11d86.appspot.com',
      messagingSenderId: '509696542690'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
        <CardSection>
          <Spinner size="large" />
        </CardSection>
      );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
