import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default class HelloApp extends Component {
    async componentDidMount() {
        try {
            const token = await AsyncStorage.getItem('@token');
            fetch('http://localhost:3000/check', {
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
                if (token) return setTimeout(() => this.props.navigation.navigate('Home'), 0);
                setTimeout(() => this.props.navigation.navigate('SignIn'), 0);
            })
        } catch(err) {
            setTimeout(() => this.props.navigation.navigate('SignIn'), 0);
        }
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
