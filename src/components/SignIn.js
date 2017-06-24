import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'vanpho01@gmail.com',
            password: ''
        }
    }

    goToHome() {
        this.props.navigation.navigate('Home');
    }

    onSignIn() {
        const { email, password } = this.state;
        fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(async resJSON => {
            const { token } = resJSON;
            this.goToHome();
            try {
                await AsyncStorage.setItem('@token', token);
            } catch(err) {
                throw err;
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <View 
                style={{ 
                    backgroundColor: 'lightblue', 
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}
            >
                <TextInput 
                    style={{ width: 300, height: 50, backgroundColor: 'white', margin: 30, paddingLeft: 10 }}
                    placeholder="Enter email"
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput 
                    style={{ width: 300, height: 50, backgroundColor: 'white', margin: 30, paddingLeft: 10 }}
                    placeholder="Enter password"
                    value={this.state.password}
                    secureTextEntry
                    onChangeText={text => this.setState({ password: text })}
                />
                <TouchableOpacity onPress={this.onSignIn.bind(this)}>
                    <Text style={{ fontSize: 30, color: 'white' }}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
