import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Platform  } from "react-native";
import { COLORS } from "../../constants";

class AccountScreen extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={COLORS.secondary} translucent barStyle="light-content" />
                <View style={styles.navigation}>
                    <Text style={styles.title}>Navigation Screen</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>body Screen</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    navigation: {
        backgroundColor: COLORS.purple,
        height: 50,
        marginTop: Platform.OS == 'ios' ? 40 : StatusBar.currentHeight
    },

    body: {
        flex: 1,
        borderColor: COLORS.primary,
        borderWidth: 1,
        backgroundColor: COLORS.primary,
    },

    title: {
        color: COLORS.white
    }
})

export default AccountScreen