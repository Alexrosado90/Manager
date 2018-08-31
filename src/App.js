import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAmMShlq5enfvuD4o2FM9dqrQdSSaZOwug",
    authDomain: "manager-86f1e.firebaseapp.com",
    databaseURL: "https://manager-86f1e.firebaseio.com",
    projectId: "manager-86f1e",
    storageBucket: "manager-86f1e.appspot.com",
    messagingSenderId: "698351699843"
  };
  firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                        </Text>
                        </View>
                        </Provider>
        );
    }
}

export default App;