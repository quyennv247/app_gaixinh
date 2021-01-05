import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, Platform, PermissionsAndroid } from 'react-native';
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
            setPassword('Test')
        }, 3000)
    })

    return (
        <View style={style.container}>
            <StatusBar backgroundColor={COLORS.bg} barStyle="dark-content" />
            <View style={style.body}>
                <Icon style={style.map} name='map-pin' />
                <View style={style.addressContainer}>
                    <Text style={style.addressTitle}>Your Delivery Address</Text>
                </View>
                <Text style={style.addressText}>{displayAddress}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg
    },
    
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bg
    },
    map: {
        color: COLORS.primary,
        fontSize: 90
    },
    addressContainer: {
        width: width - 100,
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 0.5,
        padding: 5, 
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    addressTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: COLORS.black
    },
    addressText: {
        color: COLORS.textGray,
        paddingHorizontal: 50
    }
})

export default LandingScreen;