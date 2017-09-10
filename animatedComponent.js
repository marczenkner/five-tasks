/**
 * Created by zenknerm on 7/20/17.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated} from 'react-native';

export default class animatedComponent extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <View>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <animatedComponent></animatedComponent>
            </View>
        );
    }
}