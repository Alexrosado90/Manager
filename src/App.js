import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LogInForm from './components/LogInForm';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;