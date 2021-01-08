import React from 'react';
import { 
    Text,
    Image,
    StyleSheet,
    Dimensions,
    View,
    ScrollView,
    Pressable
  } from 'react-native';

var { width } = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import { COLORS } from '../../../constants';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ScrollView>
              <View style={ styles.container } >
                    <Swiper style={ styles.swiper } showsButtons={false} autoplay={true} autoplayTimeout={3}>
                        {
                            this.props.data.map((item)=>{
                                return(
                                    <Pressable onPress={() => this.handleToSliderScreen(item)} key={item.Id} >
                                        <Image style={styles.image} resizeMode="cover" source={{uri:item.Image.FullPath}}/>
                                    </Pressable>
                                )
                            })
                        }
                    </Swiper>
                    <View style={{height:10}} />
                </View>
            </ScrollView>
          );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width, 
        alignItems:'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: COLORS.bg,
        paddingTop: 5
    },

    swiper: {
        height: width / 2 
    },

    image: {
        height: width / 2,
        width: width - 20,
    }, 

    notFound: {
        color: COLORS.textGray
    }
});

export default Gallery;