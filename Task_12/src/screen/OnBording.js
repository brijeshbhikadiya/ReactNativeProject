import { Image, ImageBackground, StyleSheet, Text, View,TouchableOpacity, ViewComponent, ScrollView,Dimensions, FlatList} from 'react-native'
import React, { Component } from 'react'
const screenWidth = Dimensions.get('window').width;

export default class OnBording extends Component {
constructor(){
    super()
    this.scrollViewRef = React.createRef();
    this.state={
        currentIndex:0,
        arrData:[{
            image:require('../assets/images/S1main_image.png'),
            backimage:require('../assets/images/S1image_back.png'),
            likei:require('../assets/images/S1like.png'),
            title:'Spread Love Easier',
            des:'Find your favourite charity through \n  user-friendly search options and \n donate at the press of the buttons.',
        },
        {
            image:require('../assets/images/main_image2.png'),
            backimage:require('../assets/images/S2image_back.png'),
            likei:require('../assets/images/right_image.png'),
            title:'Trusted Institution',
            des:'Funder includes only transparent and \n accountable charities registered and \nregulated by ACNC (Australian Charities \n      and Not-for-profit Commission).',
        }, 
        {
            image:require('../assets/images/main_image3.png'),
            backimage:require('../assets/images/S3image_back.png'),
            likei:require('../assets/images/hand_image.png'),
            title:'Start to Help',
            des:'It is easier now to help people in the midst \n     your busy life by using bagee.in your \n           trusted fundraising online apps',
        }
    ]
    }
}
handleView=(index)=>{
    this.setState({
        currentIndex:index
    });
}
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled ref={this.scrollViewRef}    
                onScroll={evnt => {
                  let indexValue = evnt.nativeEvent.contentOffset.x / screenWidth;
                  console.log('indexValue--', Math.ceil(indexValue));
                  this.setState({currentIndex: Math.ceil(indexValue)});
                }}>
        {this.state.arrData.map((item,index)=>(
        <ImageBackground source={item.backimage}>
             <View key={index} 
            style={{display:this.state.currentIndex === index ? 'flex':'flex',
            width: screenWidth,
            alignSelf: 'center',}}>
            <Image source={item.image} style={styles.mainimage1}></Image>
            <Image source={item.likei} style={styles.likeimage}></Image>
            <Text style={styles.imagetitle1}>{item.title}</Text>
            <Text style={styles.imgaedes1}>{item.des}</Text>

            </View>

            <View style={{flexDirection:'row',justifyContent:'center'}}>
                {this.state.arrData.map((item,index)=>{
                    return(
                        <TouchableOpacity onPress={() => {
                            this.scrollViewRef.current?.scrollTo({
                                x:screenWidth*index
                            })
                            this.handleView(index);
                            }}>
                            {this.state.currentIndex === index ?(<View style={styles.blueLine}></View>) :(<View style={styles.roundIcon}></View>)}
                        </TouchableOpacity>
                    );
                })}
            </View>
            
        </ImageBackground>
        ))}
        </ScrollView>
        <View style={styles.buttonview}>
                <TouchableOpacity style={styles.logintoachable}>
                    <Text style={styles.logintext}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signuptoachable}>
                    <Text style={styles.signuptext}>Signup</Text>
                </TouchableOpacity>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(35, 155, 86, 1)'
    },
    logintoachable:{
        backgroundColor:'rgba(219, 255, 57, 1)',
        width:150,
        height:60,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
       
    },
    signuptoachable:{
        borderWidth:2,
        borderColor:'rgba(219, 255, 57, 1)',
        borderRadius:10,
        width:150,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:18,
    },
    buttonview:{
        flexDirection:'row',
        marginHorizontal:40,
        marginTop:42,
        //borderWidth:1,
        marginBottom:30
    },
    mainimage1:{
        alignSelf:'center',
        marginTop:165.74
    },
    likeimage:{
        position:'absolute',
        left:40,
        top:359.74
    },
    imagetitle1:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'700',
        fontSize:40,
        lineHeight:50.4,
        alignSelf:'center',
        marginTop:29,
        fontFamily:'Caveat'
    },
    imgaedes1:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'400',
        fontSize:15,
        lineHeight:18.15,
        alignSelf:'center',
        marginTop:12,
        letterSpacing:0.5
    },
    blueLine:{
        width:24,
        height:6,
        backgroundColor:'rgba(255, 255, 255, 1)',
        marginTop:40,
        borderRadius:30,
        marginHorizontal:5

      },
      roundIcon:{
        backgroundColor:'rgba(216, 216, 216, 1)',
        borderRadius:30,
        height:6,
        width:6,
        marginTop:40,
        marginHorizontal:5,
        opacity:20
      },
      logintext:{
        color:'rgba(35, 155, 86, 1)',
        fontWeight:'600',
        fontSize:16,
        lineHeight:19.36,
        letterSpacing:0.57
      },
      signuptext:{
        color:'rgba(219, 255, 57, 1)',
        fontWeight:'600',
        fontSize:16,
        lineHeight:19.36,
        letterSpacing:0.57
      }
    
})