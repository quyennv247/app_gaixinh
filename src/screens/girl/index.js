import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, FlatList, Dimensions, Pressable, Image  } from "react-native";
import { COLORS } from "../../constants";
var { width, height } = Dimensions.get('window');
import girlService from "../../api/girlService";
import SearchBar from './components/SearchBar';
import Icon from "react-native-vector-icons/Feather";
Icon.loadFont();

class GirlScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            data: null,
            pageIndex: 1,
            pageSize: 20,
            isShow: false,
            product: null,
            quantity: 1,
            pager: null,
            latitude: '',
            longitude: '',
            total: 0,
            refreshing: false,
            isLoadMore: false,
            loadingMore: false
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.getData();
    }

    getData = () => {
        girlService.getGirls(this.state.pageIndex, this.state.pageSize).then((response) => {
            this.setState({ loading: false });
            if(response.statusCode == 200){
                if(response.data.Pager.PageIndex == 1){
                    this.setState({ data: response.data.Items });
                }
                else{
                    let data = this.state.data.concat(response.data.Items)
                    this.setState({ data: data });
                    this.setState({ loadingMore: false });
                }

                if(response.data.Pager.TotalPages > response.data.Pager.PageIndex){
                    this.setState({ isLoadMore: true });
                }
                else{
                    this.setState({ isLoadMore: false });
                }
                
                this.setState({ pager: response.data.Pager, total: response.data.Total });
            }
            else{
                alert(response.error);
            }
            }).finally(() => { this.setState({ loading: false });; 
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.bgHeader} translucent barStyle="light-content" />
                <SearchBar navigation={this.props.navigation} />
                <View style={styles.wrapper}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(e, i) => i.toString()}
                        renderItem={({ item }) => this.renderItem(item)}
                        ListFooterComponent={this.renderFooter.bind(this)}
                        onEndReachedThreshold={0}
                        onEndReached={() => this.handleLoadMore()}
                        scrollEnabled={true}
                        numColumns={2}
                    />
                </View>
            </View>
        )
    }

    renderItem = (item) => {
        return (
            <Pressable onPress={() => this.onOpenModal(item)} key={item.Id} style={styles.itemContainer}>
                <View style={styles.itemWrapper}>
                    <Image style={styles.image} source={{uri : item.Image.FullPath}}/>
                    <View style={styles.info}>
                        <Text style={styles.title}>{item.Title}</Text>
                        <View style={styles.address}>
                            <Icon style={styles.mapIcon} name='map-pin'></Icon>
                            <Text style={styles.addressText}>{item.Category.CategoryName}</Text>
                        </View>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>{item.Price}K</Text>
                    </View>
                </View>
            </Pressable>
        )
    }

    renderFooter = () => {
        if (!this.props.loading) return null;
        return (
            <Spinner size="small" />
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.bg,
    }, 
    
    line: {
        height: 0.5,
        width: '100%',
        backgroundColor: COLORS.grey
    },

    header: {
        paddingVertical: 10,
    },

    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
        marginTop: 10,
        width: '100%',
        backgroundColor: COLORS.bg
    },

    itemContainer: {
        flexDirection: 'row',
        flex:0.5,
        backgroundColor: COLORS.bg,
        marginBottom: 20,
        maxWidth: '50%'
    },

    itemWrapper: {
        paddingLeft: 10,
    },

    image: {
        width: width / 2,
        height: height / 3,
    },

    footer: {
        position: 'absolute',
        bottom: 3,
        paddingLeft: 10,
        width: '100%',
    },

    info:{
        position: 'absolute',
        bottom: 3,
        paddingLeft: 15,
    },

    title: {
        color: COLORS.white,
        textTransform: 'uppercase',
        fontSize: 14
    },

    mapIcon: {
        color: COLORS.secondary,
        fontSize: 12,
        paddingTop: 3
    },

    address: {
        flexDirection: 'row'
    },

    addressText: {
        color: COLORS.secondary,
        paddingLeft: 5,
        fontSize: 14
    },

    price:{
        position: 'absolute',
        left: 10,
        top: 0,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 5,
        paddingVertical: 3
    },

    priceText:{
        color: COLORS.white
    },

});

export default GirlScreen