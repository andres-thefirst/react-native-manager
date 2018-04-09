import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import LoginForm from './components/LoginForm'
import Router from './Router';

class App extends Component{
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBnK_HtoX2TUNuhtwlHAVChG_suI1SCy94",
            authDomain: "react-native-manager-5c694.firebaseapp.com",
            databaseURL: "https://react-native-manager-5c694.firebaseio.com",
            projectId: "react-native-manager-5c694",
            storageBucket: "react-native-manager-5c694.appspot.com",
            messagingSenderId: "680309217279"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;