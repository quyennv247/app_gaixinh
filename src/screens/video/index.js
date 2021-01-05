import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView  } from "react-native";

class VideoScreen extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text>Home Screen</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default VideoScreen