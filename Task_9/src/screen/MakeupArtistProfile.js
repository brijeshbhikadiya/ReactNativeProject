import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class MakeupArtistProfile extends Component {
    constructor(){
        super()
        this.state={
            arrData:[{
                image1:require('../assets/images/image_1.png'),
                image2:require('../assets/images/image_2.png'),
                image3:require('../assets/images/image_3.png')
            },
            {
                image1:require('../assets/images/image_4.png'),
                image2:require('../assets/images/image_5.png'),
                image3:require('../assets/images/image_6.png')
            },
            {
                image1:require('../assets/images/image_7.png'),
                image2:require('../assets/images/image_8.png'),
                image3:require('../assets/images/image_9.png')
            },
            {
                image1:require('../assets/images/image_10.png'),
                image2:require('../assets/images/image_11.png'),
                image3:require('../assets/images/image_12.png')
            }
        ]
        }
    }
  render() {
    return (
        <ScrollView>
      <View style={styles.contianer}>
            <View style={styles.innerview}>
                <View style={styles.view1}>
                    <Image source={require('../assets/images/back.png')} style={styles.backimage}></Image>
                    <View>
                        <Text style={styles.title1}>Celina Mark</Text>
                        <Text style={styles.title2}>Makeup Artist</Text>
                    </View>
                    <Image source={require('../assets/images/more.png')} style={styles.moreimage}></Image>
                    <Image source={require('../assets/images/shopping_bag.png')} style={styles.shoppingimage}></Image>
                </View>

                <View style={{marginHorizontal:13,marginTop:14}}>
                    <View style={styles.view2}>
                    <TouchableOpacity style={styles.followbutton}>
                        <Image source={require('../assets/images/plus.png')} style={{marginRight:6}}></Image>
                        <Text style={styles.followtext}>Follow</Text>
                    </TouchableOpacity>
                        <Image source={require('../assets/images/profile_image.png')} style={styles.profileimage}></Image>
                        <View style={styles.view3}>
                        <View>
                            <Text style={styles.text1}>256</Text>
                            <Text style={styles.text2}>Followers</Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>320</Text>
                            <Text style={styles.text2}>Followings</Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>15</Text>
                            <Text style={styles.text2}>List</Text>
                        </View>
                        </View>
                    </View>
                    <View style={styles.view4}>
                        <TouchableOpacity style={styles.messagebutton}>
                            <Text style={styles.messagetext}>Message</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.booknowbutton}>
                            <Text style={styles.booknowtext}>Book Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.line}></View>

                    <Text style={styles.text3}>Hi I'm celina! I love people and people love to feel{'\n'}beautiful, which is the reason I've spent last 14 years{'\n'}engulfed in doing makeup. I believe if you feel{'\n'}comfortable in your skin..More</Text>

                    </View>
                    <View style={styles.view5}>
                        <TouchableOpacity>
                            <Text style={styles.text4}>Posts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text4}>Services</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text4}>Products Used</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{color:'rgba(222, 128, 154, 1)',fontWeight:'400',fontSize:14}}>Gallery</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line2}></View>
            </View>
            <View style={{height:580,backgroundColor:'white',marginTop:4}}>
            {this.state.arrData.map((item)=>(
                 <View style={styles.innerview2}>
                 <Image source={item.image1}></Image>
                 <Image source={item.image2}></Image>
                 <Image source={item.image3}></Image>
             </View>
            ))}
            </View>
           
           
            
      </View>
      </ScrollView>
    )
  }
}

const styles =StyleSheet.create({
    contianer:{
        flex:1
    },
    innerview:{
        backgroundColor:'white',
        height:410,
        shadowColor:'#000000',
        shadowRadius:3,
        shadowOffset:0.8,
        shadowOffset:{width:6,height:6},
        elevation:2,

    },
    innerview2:{
        flexDirection:'row',
        marginHorizontal:14,
        marginTop:22,
        justifyContent:'space-around',
        //marginBottom:30
    },
    line:{
        height:1,
        width:332,
        backgroundColor:'rgba(255, 255, 255, 0.16)',
        marginHorizontal:16,
        marginTop:15
    },
    line2:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:3,
        width:110,
        backgroundColor:'rgba(222, 128, 154, 1)',
        marginTop:18,
        marginLeft:290
    },
    view1:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
    },
    view2:{
        flexDirection:'row',
        position:'absolute',
        top:15,
        backgroundColor:'rgba(206, 28, 79, 1)',
        width:364,
        height:265,
        borderRadius:10
    },
    view3:{
        marginLeft:18,
        justifyContent:'space-around',
        flexDirection:'row',
        height:47,
        width:240,
        marginTop:45
    },
    view4:{
        marginLeft:113,
        marginTop:115,
        flexDirection:'row'
    },
    view5:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:32
    },
    backimage:{
        position:'absolute',
        left:20.26,
        top:9
    },
    moreimage:{
        position:'absolute',
        right:54,
        top:9
    },
    shoppingimage:{
        position:'absolute',
        right:20,
        top:9
    },
    profileimage:{
        marginLeft:24,
        marginTop:33
    },
    title1:{
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'600',
        fontSize:18
    },
    title2:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:13,
        marginLeft:10
    },
    followtext:{
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'500',
        fontSize:13
    },
    followbutton:{
        width:96,
        position:'absolute',
        top:-12,
        height:30,
        borderWidth:1,
        borderRadius:100,
        borderColor:'rgba(206, 28, 79, 1)',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:16,
        shadowColor:'#000000',
        shadowRadius:3,
        shadowOffset:0.8,
        shadowOffset:{width:6,height:6},
        elevation:10,
        backgroundColor:'white',
    },
    messagebutton:{
        width:112,
        height:35,
        backgroundColor:'white',
        borderRadius:100,
        borderWidth:1,
        shadowColor:'#000000',
        shadowRadius:3,
        shadowOffset:0.8,
        shadowOffset:{width:6,height:6},
        elevation:10,
        borderColor:'white',
        justifyContent:'center',
        alignItems:'center'

    },
    booknowbutton:{
        width:112,
        height:35,
        backgroundColor:'rgba(243, 167, 93, 1)',
        borderRadius:100,
        borderWidth:1,
        shadowColor:'#000000',
        shadowRadius:3,
        shadowOffset:0.8,
        shadowOffset:{width:6,height:6},
        elevation:10,
        borderColor:'white',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    },
    text1:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'700',
        fontSize:16,
        textAlign:'center',
    },
    text2:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'400',
        fontSize:14
    },
    text3:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'400',
        fontSize:14,
        marginLeft:15,
        textAlign:'left',
        marginTop:11,
        lineHeight:21
    },
    text4:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'400',
        fontSize:14
    },
    messagetext:{
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'600',
        fontSize:16
    },
    booknowtext:{
        color:'white',
        fontWeight:'600',
        fontSize:16
    }


})