import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, Dimensions  } from "react-native";
import { WebView } from 'react-native-webview';
import HTML from "react-native-render-html";
import { COLORS } from '../../constants';
import girlService from '../../api/girlService';
import { Spinner } from '../../components'
var { width, height } = Dimensions.get('window');
import Gallery from "./components/Gallery";

class GirlDetailScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            data: null
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        this.setState({ loading: true });
        girlService.getById(this.props.route.params.id).then((response) => {
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

    render(){
        const styleHTML = {
            h1: { backgroundColor: '#FFFFFF' }
        }
        if(this.state.loading){
            return (
                <View style={styles.container}>
                    <Spinner /> 
                </View>
            )
        }
        else if(this.state.data != null){
            return(
                <ScrollView style={styles.container}>
                    <StatusBar backgroundColor={COLORS.bgHeader} translucent barStyle="light-content" />
                    <View style={styles.gallery}>
                        <Gallery data={this.state.data.Galleries} />
                    </View>
                    <View style={styles.body}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{this.state.data.Title}</Text>
                        </View>

                        <View style={styles.intro}>
                            <Text style={styles.introText}>Thông tin cơ bản</Text>
                            <View style={styles.group}>
                                <Text style={styles.label}>Năm sinh:</Text>
                                <Text style={styles.value}>{this.state.data.Birthday}</Text>
                            </View>
                            <View style={styles.group2}>
                                <Text style={styles.label}>Chiều cao:</Text>
                                <Text style={styles.value}>{this.state.data.Height}cm</Text>
                            </View>
                            <View style={styles.group}>
                                <Text style={styles.label}>Cân nặng:</Text>
                                <Text style={styles.value}>{this.state.data.Weight}kg</Text>
                            </View>
                            <View style={styles.group2}>
                                <Text style={styles.label}>Số đo 3 vòng:</Text>
                                <Text style={styles.value}>{this.state.data.Measurement}</Text>
                            </View>
                            <View style={styles.group}>
                                <Text style={styles.label}>Làm việc:</Text>
                                <Text style={styles.value}>{this.state.data.WorkingHour}</Text>
                            </View>
                            <View style={styles.group2}>
                                <Text style={styles.label}>Dịch vụ:</Text>
                                <View style={styles.value}>
                                {
                                    this.state.data.GirlServices.map((service)=>{
                                        return(
                                            <Text key={service.Id} style={styles.value2}>{service.Title} - </Text>
                                        )
                                    })
                                }
                                </View>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <HTML htmlStyles={ styleHTML } source={{ html: '<h1>I am rendered in a <i>WebView</i></h1>' }} contentWidth={width} />
                        </View>
                    </View>
                    
                </ScrollView>
            )
        }
        else{
            return null;
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
        paddingTop: 30,
    },

    p:{
        color: COLORS.white
    },

    body: {
        flex: 1,
        flexDirection: 'column',
        width: width,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20
    },

    gallery: {
        paddingTop: 0,
        width: width,
    },

    title: {
        paddingHorizontal: 0,
        width: width,
    },

    titleText: {
        color: COLORS.secondary,
        fontSize: 14,
        fontWeight: 'bold'
    },

    intro: {
        paddingTop: 10,
    },

    introText: {
        color: COLORS.blue,
        paddingBottom: 10
    },

    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 5
    },

    group2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: 5,
        backgroundColor: '#191c24',
        marginBottom: 5
    },

    label:{
        color: COLORS.white,
        width: '30%',
        paddingLeft: 5
    },

    value: {
        color: COLORS.white,
        width: '60%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    value2: {
        color: COLORS.white,
    },

    content: {
        width: width - 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 40,
        paddingTop: 20,
        color: COLORS.white,
    },

    contentText: {
        color: COLORS.white,
    }
})

export default GirlDetailScreen