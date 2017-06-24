import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default class HelloApp extends Component {

    gotoHome() {
        this.props.navigation.navigate('Home');
    }

    gotoSignIn() {
        this.props.navigation.navigate('SignIn')
    }

    getUserState() {
        AsyncStorage.getItem('@token')
        .then(token => fetch('http://localhost:3000/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ token })
        })
        .then(res => res.json())
        .then(resJSON => {
            const { token } = resJSON;
            if (token) return this.gotoHome();
            this.gotoSignIn();
        }));
    }
    
    componentDidMount() {
        setTimeout(() => this.getUserState(), 0);
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: 'gray',
                    flex: 1,
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ fontSize: 30, color: 'white' }}>Loading...</Text>
            </View>
        );
    }
}
