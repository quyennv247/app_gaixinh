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
            <View style={style.searchBar}>
                <Icon style={style.searchIcon} name='search'></Icon>
                <Pressable onPress={() => navigation.navigate('Search')} style={style.searchBtn}>
                    <Text  style={style.searchText}>Tìm kiếm</Text>
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
        paddingRight: 15,
        width: '100%',
        paddingTop: 35,
        paddingBottom: 15,
    },

    searchBar: {
        flex: 9,
        backgroundColor: COLORS.white,
        height: 35,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        paddingLeft: 0,
    },

    searchIcon: {
        paddingLeft: 5,
        color: COLORS.primary,
        fontSize: 20,
    },
    
    searchBtn: {
        marginLeft: 0,
        flex: 9,
        display: 'flex',
        fontSize: 16,
        height: 52
    },

    logo: {
        flex: 1,
        paddingRight: 7
    },

    iconLogo: {
        height: 35,
        width: 35
    },

    searchText:{
        color: COLORS.textGray,
        paddingTop: 14,
        paddingLeft: 10,
        fontSize: 16
    }
})


export default SearchBar;
