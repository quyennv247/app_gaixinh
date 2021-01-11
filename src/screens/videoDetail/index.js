import React from "react";
import { LogBox, View, Text, StyleSheet, StatusBar, ScrollView, Dimensions, Pressable, Image, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
Icon.loadFont();
import AntDesign from "react-native-vector-icons/AntDesign";
AntDesign.loadFont();
import { COLORS } from '../../constants';
import videoService from '../../api/videoService';
import { Spinner } from '../../components'
var { width, height } = Dimensions.get('window');
import Video from 'react-native-video';

class VideoDetailScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            data: null,
            paused: true,
            duration: 0.0,
            currentTime: 0.0,
            repeat: false,
            hideControls: false
        }
    }

    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
        this.getData();
    }

    getData = () => {
        this.setState({ loading: true });
        videoService.getById(this.props.route.params.id).then((response) => {
            this.setState({ loading: false });
            if(response.statusCode == 200){
                this.setState({ data: response.data });
            }
            else{
                alert(response.error);
            }
            }).finally(() => { this.setState({ loading: false });; 
        });
    }

    onbLoad = (data) => {
        this.setState({ duration: data.duration })
    }

    onEnd = () => {
        this.setState({ paused: true });
        this.data.seek(0);
    }

    render(){
        if(this.state.loading){
            return (
                <View style={styles.container}>
                    <Spinner /> 
                </View>
            )
        }
        else if(this.state.data != null){
            return(
                <SafeAreaView style={styles.container}>
                    <StatusBar backgroundColor={COLORS.bgHeader} translucent barStyle="light-content" />
                    <View style={styles.navigation}>
                        <Pressable style={styles.btnBack} onPress={() => this.props.navigation.goBack()}>
                            <AntDesign style={styles.backIcon} name="left" />
                        </Pressable>
                        <Text style={styles.headerTitle}>{this.state.data.Title}</Text>
                    </View>
                    <View style={styles.body}>
                        <Video source={{uri: this.state.data.File.FullPath}}   
                            ref={(ref) => {
                                this.player = ref
                            }} 
                            onLoad={this.onLoad}                                    
                            onBuffer={this.onBuffer}               
                            onError={this.videoError}  
                            repeat={this.state.repeat}
                            paused={this.state.paused}            
                            fullscreen={false}
                            controls={true}
                            style={styles.backgroundVideo} />
                    </View>
                    
                </SafeAreaView>
            )
        }
        else{
            return null;
        }
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    navigation: {
        backgroundColor: COLORS.bgHeader,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 40,
        width: width
    },

    headerTitle: {
        color: COLORS.white
    },

    btnBack: {
        width: 50,
        height: 20,
        width: 35
    },

    backIcon:{
        color: COLORS.white,
        fontSize: 18
    },

    container: {
        flex: 1,
        backgroundColor: COLORS.bgHeader,
        flexDirection: 'column'
    },

    body: {
        flex: 1,
        width: width,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: COLORS.bg,
    },
})

export default VideoDetailScreen