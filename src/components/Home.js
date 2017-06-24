import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default class Home extends Component {
    // static navigationOptions = {
    //     title: 'Home',
    // }
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
