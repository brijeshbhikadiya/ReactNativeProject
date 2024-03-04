import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class HomeScreen extends Component {
  constructor(){
    super();
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
            AdvertismentImage:require('../assets/images/ads2.png')
        }
    ]
    }
  }
  render() {
    return (
      <View style={styles.Container}>
        
        {/* HeaderView */}
        <View style={styles.HeaderView}>
            <Image source={require('../assets/images/More.png')} style={styles.MoreImage}></Image>
            <View>
                <Text style={styles.UserName}>Hy James!</Text>
                <View style={styles.HeaderInnerView}>
                    <Image source={require('../assets/images/Location.png')} style={{marginTop:6}}></Image>
                    <Text style={styles.UserLocationName}>Bukit Batok, Singapore</Text>
                </View>
            </View>
        </View>

        <FlatList
        data={this.state.Advertisement}
        horizontal
        renderItem={({item})=>
        <Image source={item.AdvertismentImage} style={styles.AdvertismentImage}></Image>
        }></FlatList>
        

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
                        <Text style={styles.CategoriesItemText}>{item.CategoriesName1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.CategoriesItemView}>
                        <Image source={item.CategoriesImage2} style={{alignSelf:'center'}}></Image>
                        <Text style={styles.CategoriesItemText}>{item.CategoriesName2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.CategoriesItemView}>
                        <Image source={item.CategoriesImage3} style={{alignSelf:'center'}}></Image>
                        <Text style={styles.CategoriesItemText}>{item.CategoriesName3}</Text>
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
        resizeMode:'cover'
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