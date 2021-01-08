import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { ICONS, COLORS } from '../../../constants';
import Icon from "react-native-vector-icons/Feather";
Icon.loadFont();

const SearchBar = ({ navigation }) => {
    return (
        <View style={style.container}>
            <View style={style.logo}>
                <Image style={style.iconLogo} source={ICONS.logo}></Image>
            </View>
            <View style={style.name}>
                <Text style={style.nameText}>GAIXINHSG.INFO</Text>
            </View>
            <View style={style.search}>
                <Pressable onPress={() => navigation.navigate('Girl-Search')} style={style.searchBtn}>
                    <Icon style={style.searchIcon} name='search'></Icon>
                </Pressable> 
            </View>
            
        </View>
    );
};

const style = StyleSheet.create({
    
    container: {
        backgroundColor: COLORS.bgHeader,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        marginBottom: 10,
    },

    logo: {
        
    },

    iconLogo: {
        height: 30,
        width: 30
    },

    
    name: {
        
    },

    nameText: {
        color: COLORS.primary,
        fontWeight: 'bold'
    },

    search: {
        height:0,
        width: 0 
    },

    searchIcon: {
        color: COLORS.white,
        fontSize: 22
    }

})


export default SearchBar;