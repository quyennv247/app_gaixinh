import React from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions, TextInput, TouchableOpacity  } from "react-native";
import { COLORS } from "../../constants";
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
var { width, height } = Dimensions.get('window');
import Category from "./components/Category";
import PriceFilter from "./components/PriceFilter";

class SearchScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            categiryId: 0,
            fromPrice: 0,
            toPrice: 0
        }
    }

    handleSearch = () => {
        console.log(this.state);
    }

    handlePriceSearch = (fromPrice, toPrice) => {
        this.setState({
            fromPrice: fromPrice,
            toPrice: toPrice
        });
    }

    handleCategorySearch = (categiryId) => {
        this.setState({
            categiryId: categiryId
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.bgHeader} translucent barStyle="light-content" />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btnCancel} onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.btnText}>Hủy</Text>
                    </TouchableOpacity>
                    <Text style={styles.btnText}>Tìm kiếm</Text>
                    <TouchableOpacity style={styles.btnCancel} onPress={() => this.handleSearch()}>
                        <Text style={styles.btnSubmitText}>Done</Text>
                    </TouchableOpacity>
                </View>
                
                <PriceFilter handlePriceSearch={this.handlePriceSearch} />
                <View style={styles.category}>
                    <Text style={styles.categoryText}>Địa điểm?</Text>
                </View>
                
                <Category handleCategorySearch={this.handleCategorySearch} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    category: {
        paddingLeft: 10,
        paddingBottom: 10
    },

    categoryText: {
        fontSize: 16,
        color: COLORS.white,
    },

    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
    },

    header: {
        backgroundColor: COLORS.bgHeader,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 0,
        paddingLeft: 15,
        alignContent: 'center',
        alignItems: 'center',
        paddingBottom: 0,
        borderBottomColor: COLORS.gray5,
        borderBottomWidth: 0.5,
        paddingTop: 35,
        paddingBottom: 13
    },

    searchIcon: {
        fontSize: 20,
        color: COLORS.white,
        width: 35
    },

    btnCancel: {
        width: 50,
    },

    btnText: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: '400'
    },

    btnSubmitText:{
        fontSize: 16,
        color: COLORS.secondary,
        fontWeight: '400'
    }
})

export default SearchScreen