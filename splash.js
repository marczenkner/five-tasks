import React from 'react';
import {
    Animated,
    Text,
    View,
    Easing,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar} from 'react-native';
import Colors from './resources/colors';

export default class Splash extends React.Component {
    render(){
        return(
            <KeyboardAvoidingView behavior='padding' style={loginStyles.loginView}>
                <StatusBar
                    barStyle='light-content'/>
                <TextInput
                    style={loginStyles.loginInputs}
                    placeholder='Username or Email'
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}></TextInput>
                <TextInput
                    style={loginStyles.loginInputs}
                    placeholder='Password'
                    secureTextEntry
                    returnKeyType='go'
                    keyboardType='password'></TextInput>
                <TouchableOpacity style={loginStyles.loginButton}>
                    <Text style={loginStyles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    };
}

const loginStyles = StyleSheet.create({
    loginView: {
        backgroundColor: Colors.taskColors[2],
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20
    },
    loginInputs: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 20,
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    loginButton: {
        backgroundColor: Colors.taskColors[3],
        padding: 20,
        width: 330
    },
    loginButtonText: {
        textAlign: 'center'
    }
});
