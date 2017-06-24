import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HelloApp extends Component {
    render() {
        return (
            <View 
                style={{ backgroundColor: 'gray', flex: 1, alignSelf: 'stretch' }}
            />
        );
    }
}
