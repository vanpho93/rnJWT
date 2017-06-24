import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View 
                style={{ 
                    backgroundColor: 'red', 
                    flex: 1, 
                    alignSelf: 'stretch',
                    justifyContent: 'center',
                    alignItems: 'center' 
                }}
            >
                <Text style={{ color: 'white', fontSize: 30 }}>Welcome to JWT APP</Text>
            </View>
        );
    }
}
