import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native'
import React, { Component } from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen';

let CurrentSlide = 0;
let IntervalTime = 3000;

export default class HomeScreen extends Component {
   
  constructor(){
    super();
    this.flatList = React.createRef();
    this.state={
        categories:[{
            CategoriesImage1:require('../assets/images/Aircon.png'),
            CategoriesImage2:require('../assets/images/Plumbing.png'),
            CategoriesImage3:require('../assets/images/Electrical.png'),
            CategoriesName1:"Aircon",
            CategoriesName2:"Plumbing",
            CategoriesName3:"Electrical"
        },
        {
            CategoriesImage1:require('../assets/images/Cleaning.png'),
            CategoriesImage2:require('../assets/images/Disinfection.png'),
            CategoriesImage3:require('../assets/images/PestControl.png'),
            CategoriesName1:"Cleaning",
            CategoriesName2:"Disinfection",
            CategoriesName3:"Pest Control"
        }],
        Advertisement:[{
            AdvertismentImage:require('../assets/images/ads1.jpeg')
        },
        {
            AdvertismentImage:require('../assets/images/ads1.jpeg')
        },
        {
            AdvertismentImage:require('../assets/images/ads1.jpeg')
        },
        {
            AdvertismentImage:require('../assets/images/ads1.jpeg')
        },
        {
            AdvertismentImage:require('../assets/images/ads1.jpeg')
        },
        {
            AdvertismentImage:require('../assets/images/ads1.jpeg')
        }
    ]
    }
  }

  _goToNextPage = () => {
    if (CurrentSlide >= this.state.Advertisement.length-1) CurrentSlide = 0;

    this.flatList.current.scrollToIndex({
      index: ++CurrentSlide,
      animated: true,
    });
  };

  _startAutoPlay = () => {
    this._timerId = setInterval(this._goToNextPage, IntervalTime);
  };

  _stopAutoPlay = () => {
    if (this._timerId) {
      clearInterval(this._timerId);
      this._timerId = null;
    }
  };

  _keyExtractor(item, index) {
    // console.log(item);
    return index.toString();
  }


  componentDidMount() {
    this._stopAutoPlay();
    this._startAutoPlay();
  }

  componentWillUnmount() {
    this._stopAutoPlay();
  }
  
  render() {

    return (
      <View style={styles.Container}>      
        {/* HeaderView */}
        {/* <View style={styles.HeaderView}>
            <TouchableOpacity style={styles.MoreImage}>
                <Image source={require('../assets/images/More.png')} ></Image>
            </TouchableOpacity>

            <View>
                <Text style={styles.UserName}>Hy James!</Text>
                <View style={styles.HeaderInnerView}>
                    <Image source={require('../assets/images/Location.png')} style={{marginTop:6}}></Image>
                    <Text style={styles.UserLocationName}>Bukit Batok, Singapore</Text>
                </View>
            </View>
        </View> */}

        <FlatList
        data={this.state.Advertisement}
        horizontal
        keyExtractor={this._keyExtractor.bind(this)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>
        <Image source={item.AdvertismentImage} style={styles.AdvertismentImage}></Image>
        }
        flatListRef={React.createRef()}
        ref={this.flatList}
        ></FlatList>
        

        <View style={styles.CategoriesView}>

            <View style={styles.CategoriesTitleView}>
                <Text style={styles.CategoriesFYText}>Categories for you!</Text>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Text style={styles.MoreText}>More</Text>
                    <Image source={require('../assets/images/MoreArrow.png')} style={{marginTop:1}}></Image>
                </TouchableOpacity>
            </View>

            <FlatList
            data={this.state.categories}
            renderItem={({item})=>
                <View style={styles.CategoriesFlatListView}>
                    <TouchableOpacity style={styles.CategoriesItemView}>
                        <Image source={item.CategoriesImage1} style={{alignSelf:'center'}}></Image>
                        <Text style={styles.CategoriesItemText} ellipsizeMode='clip' numberOfLines={1}>{item.CategoriesName1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.CategoriesItemView}>
                        <Image source={item.CategoriesImage2} style={{alignSelf:'center'}}></Image>
                        <Text style={styles.CategoriesItemText}  ellipsizeMode='clip' numberOfLines={1}>{item.CategoriesName2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.CategoriesItemView}>
                        <Image source={item.CategoriesImage3} style={{alignSelf:'center'}}></Image>
                        <Text style={styles.CategoriesItemText}  ellipsizeMode='clip' numberOfLines={1}>{item.CategoriesName3}</Text>
                    </TouchableOpacity>
                </View>
            }></FlatList>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'white'
    },
    //View
    HeaderView:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:22
    },
    HeaderInnerView:{
        flexDirection:'row'
    },
    CategoriesView:{
        backgroundColor:'rgba(241, 246, 249, 1)',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        marginTop:20,
        paddingBottom:115
    },
    CategoriesTitleView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginTop:31,
        marginBottom:20
    },
    CategoriesFlatListView:{
        flexDirection:'row',
        marginHorizontal:20,
        marginTop:6,
        marginBottom:6,
        justifyContent:'space-between'
    },
    CategoriesItemView:{
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderRadius:14,
        shadowColor:'black',
        shadowOpacity:0.5,
        elevation:2,
        shadowOffset:{
            height:6,
            width:5
        },
        justifyContent:'center',
        height:109,
        width:104
    },
    //Image
    MoreImage:{
        position:'absolute',
        left:20
    },
    AdvertismentImage:{
       marginHorizontal:15,
       marginTop:15,
       borderRadius:15
    },
    
    //Name
    UserName:{
        alignSelf:'center',
        color:'rgba(23, 46, 81, 1)',
        fontWeight:'800',
        fontSize:19,
        lineHeight:18
    },
    UserLocationName:{
        color:'rgba(241, 147, 87, 1)',
        fontWeight:'500',
        fontSize:13,
        lineHeight:16,
        marginLeft:5,
        marginTop:5
    },
    CategoriesFYText:{
        color:'rgba(23, 46, 81, 1)',
        fontWeight:'700',
        fontSize:16,
        lineHeight:15
    },
    MoreText:{
        color:'rgba(247, 161, 106, 1)',
        fontWeight:'500',
        lineHeight:14,
        fontSize:14,
        marginRight:6
    },
    CategoriesItemText:{
       color:'rgba(23, 46, 81, 1)',
       fontWeight:'600',
       fontSize:14,
       lineHeight:14,
       marginTop:25,
       alignSelf:'center'
    }
})