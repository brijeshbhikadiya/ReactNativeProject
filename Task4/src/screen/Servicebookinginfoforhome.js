import { Button, Image, ScrollView, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class serviceBookingInfo extends Component {
  
  goToTop = () => {
    this.scroll.scrollTo({x: 0, y: 0, animated: true});
 }
  render() {
    return (
      <View style={styles.container}>
    
      <ScrollView
      ref={(c)=>{this.scroll=c}}>

      <View style={{height:190,backgroundColor:'white'}}>
        <View style={styles.viewFirst}>
        <Image source={require('../assets/images/arrow.png')} style={{marginLeft:16}}></Image>
        <Text style={styles.requestInfoText}>Request Info</Text>
        <Image source={require('../assets/images/dot.png')} style={{position:'absolute',right:11}}></Image>
        </View>
        
          
            <View  style={styles.viewSecond}>
                  <Text style={styles.bookingIdText}>BOOKING ID</Text>
                  <Text style={styles.requestSentText}>Request Sent</Text>
            </View>
            <Text style={styles.wamText}>WAM-10265955</Text>
            <View style={styles.viewWam}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:17}}>
            <Text style={styles.bookedText}>Booked on <Text style={styles.satText}>Sat, 12 June</Text></Text>
            <Text style={styles.totalText}>Total:<Text style={styles.totalrupeesText}> $325.00</Text></Text>
            </View>
           
            
            
            </View>
            <View style={{height:175,marginTop:10,backgroundColor:'white'}}>
             <View style={styles.viewMakeUpArtist}> 
            <Image source={require('./../assets/images/rec.png')} height={59} width={59} style={styles.girlImage}></Image>
            <TouchableOpacity style={styles.ChatImage}>
            <Image source={require('./../assets/images/fbutton.png')} height={59} width={59} ></Image>
            </TouchableOpacity>
          
            <View style={{flexDirection:'column'}}>
            <Text style={styles.makeupArtistText}>Makeup artist</Text>
            <Text style={styles.dynaMarkTxt}>Dyna Mark</Text>
           
            </View>
           
           </View> 
           <View style={{borderBottomWidth:1,borderColor:'rgba(0, 0, 0, 0.04)',marginTop:11,marginHorizontal:20}}></View>
           <Text style={styles.dynaMarkText}>Dyna Mark is reviewing your booking request{'\n'}and will contact you shortly.</Text>
         



            </View>
            <Text style={styles.bookingInfoTxt}>Booking Info</Text>
            <View style={styles.bookingInfoView}>
              <View style={{flexDirection:'row',marginTop:19}}>
                <Text style={styles.timeText}>Time</Text>
                <Text style={styles.timeContentText}>Wednesday, 20 June, 2022,{'\n'} 6:30 am</Text>
               
              </View>
              <View style={styles.timelineView}></View>
              {/* secondview */}
              <View style={{flexDirection:'row',marginTop:20}}>
                <Text style={styles.timeText}>Where</Text>
                <Image source={require('../assets/images/v1.png')} style={{marginLeft:48}}></Image>
                <Text style={styles.homeAddText}>Home Address</Text>

                <Text style={styles.whereContentText}>4517 Washington Ave. Manchester,{'\n'} Kentucky 39495</Text>
               
              </View>
              <View style={styles.timelineView}></View>
              {/* thirdview */}
              <View style={{flexDirection:'row',marginTop:19}}>
                <Text style={styles.timeText}>Occation</Text>
                <Text style={styles.weddingContentText}>Wedding</Text>
               
              </View>
              
             {/* u forthview */}
             <View style={{flexDirection:'row',marginTop:-7}}>
                <Text style={styles.timeText}>Age</Text>
                <Text style={styles.ageContentText}>26 Years</Text>
               
              </View>
             
              
            </View>
          <View style={styles.fitzpatrickScaleView}>
          <Text style={styles.fitzpatrickScaleText}>Your Fitzpatrick Scale</Text>
          <View style={styles.scaleBrideView}>
            <Image source={require('../assets/images/firstS.png')}></Image>
            <Text style={styles.brideText}>Bride : <Text style={styles.paleText}>Pale</Text></Text>
          </View>

          <View style={styles.scaleBridemadeView}>
            <Image source={require('../assets/images/seconds.png')}></Image>
            <Text style={styles.brideText}>Bridesmaid 1 : <Text style={styles.paleText}>Light Olive</Text></Text>
          </View>

          <View style={styles.scaleBridemadeView}>
            <Image source={require('../assets/images/thirds.png')}></Image>
            <Text style={styles.brideText}>Bridesmaid 2 :  <Text style={styles.paleText}>Brown</Text></Text>
          </View>
          <View style={styles.scaleBridemadeView}>
            <Image source={require('../assets/images/fours.png')}></Image>
            <Text style={styles.brideText}>Mother of the bride : <Text style={styles.paleText}>Dark </Text></Text>
          </View>

          </View>
          <View style={styles.makeUpLookView}>
          <Text style={styles.makeUpLookText}>Makeup looks to be used as inspiration </Text>
          <View style={{flexDirection:'row'}}>
          <View style={styles.makeUpLookInnerView}>
            <Text style={styles.brideAgeText}>Bride</Text>
            <Text style={styles.ageText}>Age : 21 - 30</Text>
          </View>
          <View style={{flexDirection:'row',marginLeft:140,marginTop:10,flex:1,justifyContent:'flex-end',marginRight:15,marginTop:22,}}>
          <Image source={require('../assets/images/image1_1.png')}></Image>
          <Image source={require('../assets/images/image1_2.png')} style={{marginLeft:8}}></Image>
          <Image source={require('../assets/images/img3.png')} style={{marginLeft:8}}></Image>
          </View>
          </View>


          <View style={{flexDirection:'row',marginTop:5}}>
          <View style={styles.makeUpLookInnerView}>
            <Text style={styles.brideAgeText}>Bridesmaid 1</Text>
            <Text style={styles.ageText}>Age : 21 - 30</Text>
          </View>
          <View style={{flexDirection:'row',marginLeft:115,marginTop:16,flex:1,justifyContent:'flex-end',marginRight:15}}>
          <Image source={require('../assets/images/imgae2_1.png')}></Image>
          <Image source={require('../assets/images/image2_2.png')} style={{marginLeft:8}}></Image>
          <Image source={require('../assets/images/img3.png')} style={{marginLeft:8}}></Image>
          </View>
          </View>

          <View style={{flexDirection:'row',marginTop:5,flex:1}}>
          <View style={styles.makeUpLookInnerView}>
            <Text style={styles.brideAgeText}>Bridesmaid 2</Text>
            <Text style={styles.ageText}>Age : 100 - 200</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:11,flex:1,justifyContent:'flex-end',marginRight:15}}>
          <Image source={require('../assets/images/r4img2.png')}></Image>
          <Image source={require('../assets/images/image3_2.png')} style={{marginLeft:8}}></Image>
         
          </View>
          </View>

          <View style={{flexDirection:'row',flex:1}}>
          <View style={styles.motherInnerView}>
            <Text style={styles.motherAgeText}>Mother of the bride</Text>
            <Text style={styles.ageText}>Age : 41 - 50</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:1,flex:1,justifyContent:'flex-end',marginRight:15}}>
          <Image source={require('../assets/images/v2img2.png')}></Image>
          <Image source={require('../assets/images/r3img1.png')} style={{marginLeft:8}}></Image>
         
          </View>
          </View>
          </View>

          <View style={styles.hairStyleView}>
          <Text style={styles.makeUpLookText}>Hairstyle looks to be used as inspiration </Text>
          <View style={{flexDirection:'row',marginTop:13,marginLeft:23,}}>
         
            <Text style={styles.brideAgeText}>Bride</Text>
          
         
          <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end',marginRight:15,marginTop:-10}}>
          <Image source={require('../assets/images/image3_1.png')}></Image>
          <Image source={require('../assets/images/image3_2_2.png')} style={{marginLeft:8}}></Image>
          <Image source={require('../assets/images/image3_3.png')} style={{marginLeft:8}}></Image>
          </View>
          </View>

          <View style={{flexDirection:'row',marginTop:29,marginLeft:23,}}>
         
            <Text style={styles.brideAgeText}>Bridesmaid 1</Text>
          
         
          <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end',marginRight:15,marginTop:-10}}>
          <Image source={require('../assets/images/image4_1.png')}></Image>
          <Image source={require('../assets/images/image4_2.png')} style={{marginLeft:8}}></Image>
          <Image source={require('../assets/images/image4_3.png')} style={{marginLeft:8}}></Image>
          </View>
          </View>

          <View style={{flexDirection:'row',marginTop:29,marginLeft:23,}}>
         
         <Text style={styles.brideAgeText}>Bridesmaid 2</Text>
       
      
       <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end',marginRight:15,marginTop:-10}}>
       <Image source={require('../assets/images/image5_1.png')}></Image>
       <Image source={require('../assets/images/image5_2.png')} style={{marginLeft:8}}></Image>

       </View>
       </View>

       <View style={{flexDirection:'row',marginTop:29,marginLeft:23,}}>
         
         <Text style={styles.brideAgeText}> Mother of the bride</Text>
       
      
       <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end',marginRight:15,marginTop:-10}}>
       <Image source={require('../assets/images/v2img2.png')}></Image>
       <Image source={require('../assets/images/v2img8.png')} style={{marginLeft:8}}></Image>

       </View>
       </View>

         

          

         
          
          </View>
          <Text style={styles.serviceInfoText}>Services Info</Text>
          <View style={styles.serviceInfoView}>
          <Text style={styles.eventmakeUpText}>Event Makeup</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={styles.glamMakeUpText}>Glam Makeup</Text>
            <Text style={styles.service2Text}>2 Services</Text>
            <Text style={styles.rupeesText}>$100.00</Text>
          </View>
         <Text style={styles.rupees50Text}>$50.00</Text>
         <Text style={styles.specialOffer}>Special Offer 50% {'\n'}Off</Text>
         <View style={styles.bottomView}></View>


         <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
            <Text style={styles.glamMakeUpText}>Glam Makeup & Hair</Text>
            <Text style={styles.service2Text5}>1 Service</Text>
            <Text style={styles.rupeesText}>$40.00</Text>
          </View>
          <Text style={styles.rupees50Text}>$40.00</Text>
          <View style={styles.bottomView1}></View>

        {/* //weddingview */}
          <Text style={styles.weddingInfoText}>Wedding</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={styles.glowbrideText}>Bride</Text>
            <Text style={styles.service2Text3}>1 Service</Text>
            <Text style={styles.rupeesText}>$100.00</Text>
          </View>
         <Text style={styles.rupees50Text}>$50.00</Text>
         
         <View style={styles.bottomView1}></View>


         <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
            <Text style={styles.glamMakeUpText}>Bridesmaids  </Text>
            <Text style={styles.service2Text2}>2 Services</Text>
            <Text style={styles.rupeesText}>$80.00</Text>
          </View>
          <Text style={styles.rupees50Text}>$40.00</Text>
          <View style={styles.bottomView1}></View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
            <Text style={styles.glamMakeUpText}>Mother of the {'\n'}Bride{'\n'}Groom                </Text>
            <Text style={styles.motherServiceText}>1 Service</Text>
            <Text style={styles.rupeesText}>$40.00</Text>
          </View>
          <Text style={styles.rupees50Text}>$40.00</Text>
          <View style={styles.bottomView1}></View>
          
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,}}>
            <Text style={styles.travelText}>Travel Fee</Text>
            
            <Text style={styles.travelRupeesText}>$30.00</Text>
          </View>
          <View style={styles.bottomTravelView}></View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.totalFeeText}>Total</Text>
          <Text style={styles.totalRupeesText}>$ 390.00</Text>
         
          </View>
          <Text style={styles.depositText}>$100 Deposit still required</Text>
          <Text style={styles.lastLineText}>All makeup artist booking deposits are only{'\n'}
refundable at their discretion </Text>
          


         
          </View>
          <TouchableOpacity onPress={this.goToTop}>
            <Text style={styles.scrollText}>Scroll To Top</Text>
          </TouchableOpacity>
         
            </ScrollView>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5',
        marginBottom:20,marginTop:20
    },
    //firstview
    viewFirst:{
      flexDirection:'row',
      //justifyContent:"space-between"
      borderBottomWidth:1,
      borderColor:'rgba(0, 0, 0, 0.04)',
      marginTop:14,
      paddingBottom:10
    },
    bookingInfoView:{
        height:300,
        backgroundColor:'white',
        marginHorizontal:8,
        borderRadius:5,
        marginTop:11,
    },
    fitzpatrickScaleView:{
      backgroundColor:'white',
      marginTop:10,
      marginHorizontal:8,
      height:253,
      borderRadius:5,
    },
    makeUpLookInnerView:{
      flexDirection:'column',
      marginLeft:20,
      //marginRight:15.77,
      marginTop:13,
      
    },
    motherInnerView:{
      flexDirection:'column',
      marginLeft:20,
      //marginRight:15.77,
      //marginTop:4,
    },
    scaleBrideView:{
        flexDirection:'row',
        marginTop:14,
        marginLeft:16,

    },
    serviceInfoView:{
      height:718,
      backgroundColor:'white',
      marginHorizontal:8,
      borderRadius:5,
      marginTop:7
    },
    scaleBridemadeView:{
      flexDirection:'row',
      marginTop:15,
      marginLeft:16,
    },
    makeUpLookView:{
      height:340,
      backgroundColor:'white',
      borderRadius:5,
      marginHorizontal:8,
      marginTop:10,
    },
    hairStyleView:{
      height:290,
      backgroundColor:'white',
      borderRadius:5,
      marginHorizontal:8,
      marginTop:10,
    },
   
    viewSecond:{
      flexDirection:'row',
      justifyContent:'space-between',
      
    },
    viewWam:{
      borderBottomWidth:1,
      borderColor:'rgba(0, 0, 0, 0.04)',
      marginTop:15,
      marginHorizontal:20,
    },
    bottomView:{
      borderBottomWidth:1,
      borderColor:'#E5E5E5',
      marginHorizontal:16,
    },
    bottomView1:{
      borderBottomWidth:1,
      borderColor:'#E5E5E5',
      marginHorizontal:16,
      marginTop:16,
    },
    travelView:{
      borderBottomWidth:1,
      borderColor:'#E5E5E5',
      marginHorizontal:16,
      marginTop:15,
    },
    bottomTravelView:{
      borderBottomWidth:1,
      borderColor:'#E5E5E5',
      marginHorizontal:16,
      marginTop:12,

    },
    viewMakeUpArtist:{
     // height:116,
      //width:380,
      //flex:1,
      flexDirection:'row',

      
      //backgroundColor:'blue'
    },
    timelineView:{
      borderColor:'#EEEEEE',
      borderWidth:1,
      marginTop:15,
      marginLeft:104,
      marginRight:16,
    },

    requestInfoText:{
      fontSize:20,
      letterSpacing:2,
      fontWeight:'700',
      color:'#080204',
      position:'absolute',
      left:138,
      
      
    },
    bookingIdText:{
      fontSize:16,
      fontWeight:'700',
     // letterSpacing:2,
      color:'#8A8A8A',
      lineHeight:21,
      marginLeft:20,
     // letterSpacing:2,
      //height:18,
      marginTop:20,
    },
    requestSentText:{
      fontSize:16,
      fontWeight:'700',
      lineHeight:21,
      textAlign:'right',
      color:'#F3A75D',
      marginRight:19,
      marginTop:19,
      
  },
  wamText:{
    color:'#080204',
    fontSize:15,
    lineHeight:15,
    height:13,
    fontWeight:'700',
    marginLeft:20,
    marginTop:7,
   
  },
  bookedText:{
    height:21,
    lineHeight:21,
    fontSize:16,
    color:'rgba(79, 79, 79, 1)',
   
  },
  satText:{
    color:'rgba(8, 2, 4, 1)',
    fontWeight:'700',
    lineHeight:21
  },
  totalText:{
    color:'rgba(79, 79, 79, 1)',
    fontSize:16,
    textAlign:'right',
    fontWeight:'400',
    textAlign:'right'
  },
  totalrupeesText:{
    color:'rgba(206, 28, 79, 1)',
    fontWeight:'700',
    lineHeight:21,
  },
  makeupArtistText:{
    fontSize:14,
    fontWeight:'400',
    height:16,
    color:'rgba(222, 128, 154, 1)',
    marginTop:28,
    marginLeft:18,
    
    
  },
  dynaMarkText:{
      color: 'rgba(138, 138, 138, 1)',
      fontSize:13,
      lineHeight:17,
      marginLeft:20,
      marginTop:12,
      letterSpacing:1,
      
      
  },
  girlImage:{
    marginTop:19,
    marginLeft:20,
  },
  ChatImage:{
    marginTop:30,
    position:'absolute',
    right:20,
    marginLeft:20,
  },
  dynaMarkTxt:{
      marginTop:9,
      marginLeft:17,
      fontWeight:'700',
      lineHeight:17,
      paddingTop:3,
      fontSize:20,
      color:'rgba(8, 2, 4, 1)',
      height:20,
      //backgroundColor:'pink'
  },
  bookingInfoTxt:{
    fontSize:16,
    color:'rgba(8, 2, 4, 1)',
    fontWeight:'700',
    lineHeight:29,
    letterSpacing:1,
    marginTop:16,
    marginLeft:20,
  },
  timeText:{
    color:'#DE809A',
    fontSize:15,
    fontWeight:'700',
    lineHeight:29,
    marginLeft:16,
    
  },
  timeContentText:{
    marginLeft:47,
    color:'#4F4F4F',
    fontSize:15,
    lineHeight:24,
    letterSpacing:0.38,
    height:48,

  },
  weddingContentText:{
    marginLeft:30,
    color:'#4F4F4F',
    fontSize:15,
    lineHeight:24,
    letterSpacing:0.38,
    height:48,
  },
  ageContentText:{
    marginLeft:65,
    color:'#4F4F4F',
    fontSize:15,
    lineHeight:24,
    letterSpacing:0.38,
    height:48,
  },
  whereContentText:{
    color:'#4F4F4F',
    fontSize:15,
    lineHeight:24,
    letterSpacing:0.38,
    height:48,
   marginLeft:-130,
   marginTop:25

  },
  homeAddText:{
    fontSize:15,
    color:'#080204',
    lineHeight:24,
    letterSpacing:0.38,
    fontWeight:'700',
    marginLeft:7,
    marginTop:-2,
  },
  fitzpatrickScaleText:{
    marginTop:15,
    marginLeft:16,
    color:'rgba(8, 2, 4, 1)',
    fontWeight:'700',
    lineHeight:29,
    height:29,
    letterSpacing:3,

  },
  brideText:{
    color:'rgba(79, 79, 79, 1)',
    fontWeight:'400',
    lineHeight:29,
    letterSpacing:1,
    marginLeft:18,
    height:29
  },
  paleText:{
    color:'#DE809A',
    lineHeight:29,
    fontWeight:'400',
    height:29,
    letterSpacing:1,

  },
  makeUpLookText:{
    fontWeight:'700',
    color:'#080204',
    fontSize:15,
    height:29,
    letterSpacing:1,
    marginTop:15,
    marginLeft:16,
  },
  brideAgeText:{
    color:'#4F4F4F',
    fontWeight:'400',
    //lineHeight:29,
    letterSpacing:1,
    height:18,
    fontSize:16,
    
   
  },
  motherAgeText:{
    color:'#4F4F4F',
    fontWeight:'400',
    //lineHeight:29,
    letterSpacing:1,
    height:18,
    fontSize:16,
  },
  ageText:{
    color:'#DE809A',
    fontWeight:'700',
    //fontSize:13,
   // height:22,
    //lineHeight:13,
    marginTop:10,
    

  },
  brideImg1:{
    marginLeft:150,
   
  },
  brideImg2:{
    marginLeft:8
  },
  brideImg3:{
    marginLeft:8,
    marginRight:15,
  },
  serviceInfoText:{
    color:'#080204',
    fontSize:16,
    fontWeight:'700',
    lineHeight:29,
    height:29,
    marginTop:10,
    marginLeft:16,
  },
  travelRupeesText:{
   
    color:'#4F4F4F',
    fontSize:14,
    fontWeight:'700',
    //lineHeight:13,
    height:24,
    marginRight:16,
    marginTop:6,
    
  
    
  },
  weddingInfoText:{
    color:'#DE809A',
    fontSize:15,
    height:29,
    lineHeight:29,
    fontWeight:'700',
    marginTop:16,
    marginLeft:12,
    letterSpacing:1,
  },
  eventmakeUpText:{
    color:'#DE809A',
    fontSize:15,
    height:29,
    lineHeight:29,
    fontWeight:'700',
    marginTop:11,
    marginLeft:16,
    letterSpacing:1,
  },
  glamMakeUpText:{
    color:'#4F4F4F',
    fontWeight:'700',
    lineHeight:24,
    letterSpacing:0.38,
    marginLeft:16,
  },
  glowbrideText:{
    color:'#4F4F4F',
    fontWeight:'700',
    lineHeight:24,
    letterSpacing:0.38,
    marginLeft:13,
  },
  travelText:{
    color:'#4F4F4F',
    fontWeight:'700',
    lineHeight:24,
    letterSpacing:0.38,
    marginLeft:13,
  },

  
  service2Text:{
    color:'#8A8A8A',
    fontSize:14,
    lineHeight:21,
    letterSpacing:2,
  },
  service2Text2:{
    color:'#8A8A8A',
    fontSize:14,
    lineHeight:21,
    letterSpacing:2,
    marginLeft:-10,
    justifyContent:'center',
    alignSelf:'center',
  },
  motherServiceText:{
    color:'#8A8A8A',
    fontSize:14,
    lineHeight:21,
    letterSpacing:2,
    marginLeft:-30,
  
  },
  service2Text3:{
    color:'#8A8A8A',
    fontSize:14,
    lineHeight:21,
    letterSpacing:2,
    marginLeft:55,
  },
  service2Text5:{
    color:'#8A8A8A',
    fontSize:14,
    lineHeight:21,
    letterSpacing:2,
    marginLeft:-60,
  },

  rupeesText:{
    color:'#4F4F4F',
    fontSize:14,
    fontWeight:'700',
    //lineHeight:13,
    height:24,
    marginRight:16,
    marginTop:6,

  },
  rupees50Text:{
    color:'#8A8A8A',
    fontSize:13,
    lineHeight:21,
    fontWeight:'400',
    height:21,
    marginLeft:16,
    marginTop:-5,
   
  },
  specialOffer:{
    color:'#F3A75D',
    fontSize:12,
    lineHeight:16,
    fontWeight:'400',
    marginLeft:16,

  },
  totalFeeText:{
    color:'#CE1C4F',
    fontSize:20,
    height:29,
    lineHeight:29,
    fontWeight:'700',
    letterSpacing:1,
    marginTop:8,
    marginLeft:16,

  },
  totalRupeesText:{
    color:'#CE1C4F',
    fontWeight:'700',
    fontSize:20,
    height:29,
    //letterSpacing:1,
    marginTop:8,
    marginRight:16,

  },
  depositText:{
    color:'#F3A75D',
    fontWeight:'400',
    lineHeight:24,
    letterSpacing:0.38,
    fontSize:15,
    height:24,
    marginLeft:16,
    marginTop:11,
  },
  lastLineText:{
    color:'#8A8A8A',
    fontSize:13,
    lineHeight:17,
    fontWeight:'400',
    letterSpacing:1,
    height:34,
    marginLeft:16,
    marginTop:11
},
scrollText:{
  marginTop:19,
  textAlign:'center',
  color:'#CE1C4F',
  fontSize:20,
  fontWeight:'700',
  letterSpacing:2,
  height:29,
  lineHeight:29

}

    
})