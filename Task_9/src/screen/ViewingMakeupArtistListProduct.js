import { Text, View ,StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React, { Component } from 'react'

export default class ViewingMakeupArtistListProduct extends Component {
    constructor(){
        super()
        this.state={
            arrData:[{
            image1:require('../assets/images/product_3.png'),
            image2:require('../assets/images/full_bag.png'),
            imagename1:"Apple Skin-Perfecting\nHydrating  Foundation" ,
            imageprice1:"$5.00",
            image3:require('../assets/images/product_4.png'),
            inamgename2:"Eyeshadow\npalettes"
            },
            {
            image1:require('../assets/images/product_5.png'),
            image2:require('../assets/images/full_bag.png'),
            imagename1:"Jelly Cream With Jeju\npalettes" ,
            imageprice1:"$5.00",
            image3:require('../assets/images/product_6.png'),
            inamgename2:"Eyeshadow\npalettes" 
        }],
        quantity:1}  
    }
    decrementQuantity = () => {
        if (this.state.quantity > 1) {
            this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
        }
    };

    incrementQuantity = () => {
        this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
    };
  render() {
    return (
        <ScrollView>
      <View style={styles.contianer}>
        <View style={{marginHorizontal:20}}>
        <View style={styles.view1}>
            <Image source={require('../assets/images/back.png')} style={styles.backimage}></Image>
            <Image source={require('../assets/images/profile_image.png')} style={styles.profileimage}></Image>
            <Text style={styles.profilename}>Celina Mark</Text>
        </View>

        <View style={styles.view2}>
            <Image source={require('../assets/images/search.png')} style={styles.searchimage}></Image>
            <TextInput
            placeholder='Search'
            placeholderTextColor={'rgba(79, 79, 79, 1)'}   
            style={styles.searchtext}></TextInput>
        </View>

        <Text style={styles.text1}>Celina's List</Text>

        <View style={styles.view3}>
            <View>
                <Image source={require('../assets/images/product_1.png')}></Image>
                <View style={styles.onsaleview}>
                    <Text style={styles.onsaletext}>On Sale</Text>
                </View>
                <View style={styles.productaddview}>
                    <TouchableOpacity onPress={this.decrementQuantity}>
                        <Image source={require('../assets/images/minus.png')} style={styles.minusimage} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text2}>{this.state.quantity}</Text>
                    <TouchableOpacity onPress={this.incrementQuantity}>
                        <Image source={require('../assets/images/plus_1.png')} style={styles.minusimage}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text3}>Eyeshadow{'\n'}palettes</Text>
                <View style={{flexDirection:'row',marginTop:6}}>
                    <Text style={styles.text4}>$5.00</Text>
                    <Text style={styles.text5}>$10.00</Text>
                </View>
                
            </View>
            <View style={{marginLeft:20}}> 
                <Image source={require('../assets/images/product_2.png')}></Image>
                <View style={styles.unavailableview}>
                    <Text style={styles.unavailabletext}>Unavailable</Text>
                </View>
                <Image source={require('../assets/images/empty_bag.png')} style={styles.emptybagimage}></Image>
                <Text style={styles.text3}>Sensational Sky High{'\n'}Mascara</Text>
                <Text  style={styles.text6}>$5.00</Text>
            </View>
        </View>
        {this.state.arrData.map((item)=>(
             <View style={{flexDirection:'row',marginTop:20}}>
             <View> 
                 <Image source={item.image1}></Image>
                 <Image source={item.image2} style={styles.fullbagimage}></Image>
                 <Text style={styles.text3}>{item.imagename1}</Text>
                 <Text  style={styles.text6}>{item.imageprice1}</Text>
             </View>
             <View style={{marginLeft:20}}> 
                 <Image source={item.image3}></Image>
                 <Image source={item.image2} style={styles.fullbagimage}></Image>
                 <Text style={styles.text3}>{item.inamgename2}</Text>
                 <Text  style={styles.text6}>{item.imageprice1}</Text>
             </View>
         </View>
        ))}
       

        </View>
       
      </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
    contianer:{
        flex:1,
        backgroundColor:'white'
    },
    view1:{
        flexDirection:'row'
    },  
    view2:{
        flexDirection:'row',
        marginTop:75,
        borderWidth:1,
        borderColor:'white',
        borderRadius:100,
        width:350,
        height:48,
        backgroundColor:'white',
        shadowColor:'#000000',
        shadowRadius:3,
        shadowOffset:0.8,
        shadowOffset:{width:6,height:6},
        elevation:5,
    },
    view3:{
        flexDirection:'row',
        marginTop:14,
    },
    onsaleview:{
        backgroundColor:'rgba(206, 28, 79, 1)',
        width:68,
        height:23,
        position:'absolute',
        borderRadius:1000,
        justifyContent:'center',
        alignItems:'center',
        top:9,
        left:9
    },
    unavailableview:{
        backgroundColor:'rgba(79, 79, 79, 1)',
        width:92,
        height:23,
        position:'absolute',
        borderRadius:1000,
        justifyContent:'center',
        alignItems:'center',
        top:9,
        left:9
    },
    productaddview:{
        flexDirection:'row',
        backgroundColor:'white',
        position:'absolute',
        width:79.49,
        height:32,
        borderRadius:16,
        justifyContent:'space-evenly',
        right:9,
        top:125

    },
    backimage:{
        position:'absolute',
        top:25
    },
    profileimage:{
        position:'absolute',
        left:50,
        height:40,
        width:40,
        top:20
    },
    searchimage:{
        marginLeft:22,
        marginTop:17
    },
    minusimage:{
        marginTop:10
    },
    emptybagimage:{
        position:'absolute',
        right:9,
        top:125
    },
    fullbagimage:{
        position:'absolute',
        top:124.56,
        bottom:0,
        left:124
    },
    profilename:{
        position:'absolute',
        left:110,
        top:25,
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'700',
        fontSize:18
    },
    searchtext:{
        marginLeft:9,
        marginTop:4,
        width:'85%'
    },
    onsaletext:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'500',
        fontSize:14
    },
    unavailabletext:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'500',
        fontSize:14
    },
    text1:{
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'700',
        fontSize:16,
        marginTop:25
    },
    text2:{
        marginTop:6,
        fontWeight:'500',
        fontSize:14,
        color:'rgba(8, 2, 4, 1)'
    },
    text3:{
        marginTop:11,
        fontWeight:'400',
        fontSize:13,
        color:'rgba(8, 2, 4, 1)'
    },
    text4:{
        fontWeight:'600',
        fontSize:14,
        color:'rgba(206, 28, 79, 1)',
    },
    text5:{
        marginLeft:10,
        fontWeight:'400',
        fontSize:13,
        color:'rgba(138, 138, 138, 1)',
        textDecorationLine:'line-through'
    },
    text6:{
        fontWeight:'600',
        fontSize:14,
        color:'rgba(206, 28, 79, 1)',
        marginTop:6
    },
})