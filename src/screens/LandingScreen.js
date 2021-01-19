import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, Image, SafeAreaView } from 'react-native';
import { COLORS } from './../constants';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
var { width, height } = Dimensions.get('window');
import { AuthContext } from '../components/Context';

const LandingScreen = () => {
    const { setLoading } = React.useContext(AuthContext);

    useEffect(() => {
        setTimeout(() =>{
            setLoading(false)
        }, 1500)
    })

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={COLORS.bgHeader} barStyle="dark-content" />
            <View style={style.body}>
                <Image source={ require('../assets/images/logo.png') }/>
                <View style={style.info}>
                    <Text style={style.title}>GAIXINHSG.INFO</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgHeader
    },
    
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.bgHeader
    },

    info: {
        width: width - 100,
        padding: 5, 
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.primary
    },
})

export default LandingScreen;