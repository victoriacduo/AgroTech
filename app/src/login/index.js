import { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert } from 'react-native';

const logo = require('../../assets/logo.png');

const login = () => {

}

export default function Login({ navigation }) {
    return (
        <View style={style.container}>
            <LinearGradient colors={['#051937', '#004d7a', '#008793', '#00bf72', '#b0d647', 'transparent',]}
                style={style.background}
            />
            <View style={style.centro}>
                <Image style={style.logo} source={{ uri: logo }} />
                <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: '18pt', color: '#444939' }}>AgroTech</Text>
                <View style={style.viewInputs}>
                    <TextInput placeholderTextColor={"#00000077"} style={style.inputs} placeholder="Informe o email" />
                    <TextInput placeholderTextColor={"#00000077"} secureTextEntry={true} style={style.inputs} placeholder="Informe sua senha" />
                    <TouchableOpacity style={style.botao}>
                        <Text style={{ fontFamily: 'Poppins-Bold' }}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 750
    },
    centro: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '10px',
        width: '250px',
        height: '400px'
    },
    logo: {
        height: '200px',
        width: '200px',
    },
    viewInputs: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '150px',
    },
    inputs: {
        fontFamily: 'Poppins-Regular',
        maxWidth: '190px',
        height: '35px',
        backgroundColor: '#05060f0a',
        borderRadius: '10px',
        padding: '15px',
        fontSize: '10pt',
        marginBottom: '5px',
    },
    botao: {
        alignItems: 'center',
        width: '190px',
        height: '35px',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        fontSize: '12pt',
        padding: '15px',
        marginTop: '5px'
    }
})