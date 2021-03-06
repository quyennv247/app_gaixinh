import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList, Dimensions, Pressable, Image, SafeAreaView  } from "react-native";
import { COLORS } from "../../constants";
var { width, height } = Dimensions.get('window');
import albumService from "../../api/albumService";
import SearchBar from './components/SearchBar';
import Icon from "react-native-vector-icons/Feather";
Icon.loadFont();
import { Spinner } from "../../components";

class AlbumScreen extends React.Component {
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

    handleLoadMore = () => {
        if(this.state.isLoadMore){
            this.setState({ loadingMore: true });
            this.setState({ pageIndex: this.state.pageIndex += 1 });
            this.getData();
        }
    }

    getData = () => {
        albumService.getAlbums(this.state.pageIndex, this.state.pageSize).then((response) => {
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

    handleClickItem(id){
        this.props.navigation.navigate('Album-Detail', {
            id: id
        });
    }

    render(){
        if(this.state.loading){
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar backgroundColor={COLORS.bgHeader} translucent barStyle="light-content" />
                    <SearchBar navigation={this.props.navigation} />
                    <Spinner /> 
                </SafeAreaView>
            )
        }
        else{
            return(
                <SafeAreaView style={styles.container}>
                    <StatusBar backgroundColor={COLORS.bgHeader} translucent barStyle="light-content" />
                    <SearchBar navigation={this.props.navigation} />
                    <View style={styles.wrapper}>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(e, i) => i.toString()}
                            renderItem={({ item }) => this.renderItem(item)}
                            ListFooterComponent={this.renderFooter.bind(this)}
                            onEndReachedThreshold={0}
                            scrollEnabled={true}
                            numColumns={2}
                        />
                    </View>
                </SafeAreaView>
            )
        }
    }

    renderItem = (item) => {
        return (
            <Pressable onPress={() => this.handleClickItem(item.Id)} key={item.Id} style={styles.itemContainer}>
                <View style={styles.itemWrapper}>
                    <Image style={styles.image} source={{uri : item.Image.FullPath}}/>
                    <View style={styles.info}>
                        <Text style={styles.title}>{item.Title}</Text>
                        <View style={styles.address}>
                            <Text style={styles.addressText}>{item.Amount} Ảnh</Text>
                        </View>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>NEW</Text>
                    </View>
                </View>
            </Pressable>
        )
    }

    renderFooter = () => {
        return(
            <View style={this.state.isLoadMore ? styles.footer : styles.none}>
                {
                    this.state.isLoadMore
                    ? <TouchableOpacity activeOpacity={1} onPress={this.handleLoadMore} style={styles.loadMoreBtn}>  
                    {
                        this.state.loadingMore 
                        ? 
                            <Text style={styles.loadMoreText}>Đang tải...</Text>
                            
                        : <Text style={styles.btnText}>Xem thêm</Text>
                    }
                    </TouchableOpacity>
                    : null
                }
                
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgHeader,
    }, 

    none: {
        display: 'none'
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
        width: '100%',
        backgroundColor: COLORS.bg,
        paddingTop: 10
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

    info:{
        position: 'absolute',
        bottom: 0,
        paddingLeft: 15,
        backgroundColor: 'rgba(0,0,0,.4)',
        width: '100%',
        paddingTop: 5
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
        flexDirection: 'row',
        paddingBottom: 3
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

    footer: {
        borderColor: COLORS.borderButton,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: COLORS.bg,
        marginBottom: 0,
        marginLeft: 10,
        marginBottom: 10
    },

    loadMoreBtn: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    loadMoreText: {
        color: COLORS.white
    },

    btnText: {
        color: COLORS.white
    }

});

export default AlbumScreen