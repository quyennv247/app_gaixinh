import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, Platform, Image, SafeAreaView } from 'react-native';
import { COLORS } from './../constants';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
var { width, height } = Dimensions.get('window');
import { AuthContext } from '../components/Context';

const LandingScreen = () => {
    
    const [displayAddress, setDisplayAddress] = useState("Waiting for Current Location")

    const { setPassword } = React.useContext(AuthContext);

    useEffect(() => {
        setTimeout(() =>{
            //setPassword('Test')
        }, 30000)
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
        backgroundColor: COLORS.white
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
        fontWeight: '700',
        color: COLORS.primary
    },
})

export default LandingScreen;