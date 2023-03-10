import { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const logo = require('../../assets/logo.png');

export default function Login({ navigation }) {
    return (
        <View>
            <LinearGradient
                colors={['#051937, #004d7a, #008793, #00bf72, #a8eb12']} style={style.container}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }} >

                <View style={style.centro}>
                    <Image style={style.logo} source={{ uri: logo }} />
                    <View style={style.viewInputs}>
                        <TextInput placeholderTextColor={"#00000077"} style={style.inputs} placeholder="Informe o email" />
                        <TextInput placeholderTextColor={"#00000077"} secureTextEntry={true} style={style.inputs} placeholder="Informe sua senha" />
                        <TouchableOpacity style={style.botao}>
                            <Text style={{ fontWeight: 'bold', fontFamily: 'Poppins-Regular', color: 'white' }}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        position: 'absolute',
        height: 300,
    },
    centro: {
        alignItems: 'center',
    },
    logo: {
        height: '200px',
        width: '200px',
        marginBottom: '10px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.70,
        shadowRadius: 10.00,
        levation: 10,
    },
    viewInputs: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '150px',
    },
    inputs: {
        fontFamily: 'Poppins-Regular',
        backgroundColor: '#efefef',
        padding: '10px',
        borderRadius: '5px',
        margin: '7px',
        width: '230px',
        height: '45px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.70,
        shadowRadius: 10.00,
        levation: 10,
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '230px',
        height: '40px',
        borderRadius: '5px',
        margin: '7px',
        backgroundColor: '#8A66FA',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.70,
        shadowRadius: 10.00,
        levation: 10,
    }
})