import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView  } from "react-native";

class GirlScreen extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text>Girl Screen</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default GirlScreen