import { StyleSheet, Text, View,Image, TouchableOpacity, ViewComponent, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class OrderInfo extends Component {
    constructor(){
        super()
       this.state = {
        arrData:[   //this cocnept called as a map one array is make and use tham less component.
          {
            title:"Subtotal",
            date:"$220.00"
          },
          {
            title:"Shipping",
            date:"$10.00"
          },
          {
            title:"Payment Surcharge",
            date:"$5.00"
          },
        ]
       }
      }
  render() {
    return (
        <ScrollView>
      <View style={styles.container}>
        <View style={styles.innerview}>
            <View style={styles.view1}>
                <Image source={require('../assets/images/back_button.png')} style={styles.backbutton}></Image>
                <Text style={styles.myordertext}>Order Info</Text>
            </View>

            <View style={styles.line2}></View>

            <View style={styles.view3}>
                     <Text style={styles.text1}>ORDER ID</Text>
                     <Text style={styles.text2}>MAKP-10265955</Text>
            </View>

            <View style={styles.line}></View>

            <View style={{flexDirection:'row',marginHorizontal:19,marginTop:10}}>
                 <Text style={styles.text4}>Ordered on</Text><Text style={styles.text5}>  Sat, 12 June</Text>
             </View>
                 <View style={{marginTop:11,flexDirection:'row',marginHorizontal:19}}>
                    <Image source={require('../assets/images/mastercard.png')}></Image>
                    <Text style={styles.text3}>Paid by •••• 3255</Text>
                    <Text style={styles.text6}>Total:</Text><Text style={styles.text7}>$210.00</Text>
                 </View>
                 <View style={{marginTop:11,flexDirection:'row',marginHorizontal:19}}>
                    <Image source={require('../assets/images/discover.png')}></Image>
                    <Text style={styles.text8}>WAM Funds Used</Text>
                    <Text style={styles.text9}>Total:</Text><Text style={styles.text7}>$25.00</Text>
                 </View>
        </View>

        <View style={styles.innerview2}>
                <View style={styles.view4}>
                     <Image source={require('../assets/images/image_1.png')} style={{height:92,width:92}}></Image>
                     <View style={{marginLeft:16}}>
                         <Text style={styles.text10}>Jelly Cream With Jeju Cherry {'\n'}Blossom</Text>
                         <Text style={styles.text11}>Qty: 1</Text>
                         <Text style={styles.text12}>$10.00</Text>
                     </View>
                </View>
                <View style={styles.line}></View>

                <View style={{flexDirection:'row',marginTop:16,marginHorizontal:19}}>
                    <View>
                        <Text style={styles.text13}>Order Status</Text>
                        <Text style={styles.text14}>Confirmed!</Text>
                    </View>
                    <TouchableOpacity style={styles.helptouchable}>
                        <Text style={styles.helptext}>Help</Text>
                    </TouchableOpacity>
                </View>

            <View style={{flexDirection:'row',marginHorizontal:19,marginTop:20}}> 
                <Image source={require('../assets/images/check.png')} ></Image>
                <View>
                    <Text style={styles.text15}>Order Confirmed</Text>
                    <Text style={styles.text16}>Sat,12 June </Text>
                </View>
            </View>
            <View style={{flexDirection:'row',marginLeft:19,height:30}}>
                <View style={{height:30, borderWidth:1, borderColor:'#C7C7C7',marginLeft:10,marginTop:1}}></View>
            </View>
            <View style={{flexDirection:'row',marginLeft:19,marginTop:10}}>
                <Image source={require('../assets/images/circle.png')}></Image>
                <Text style={{marginLeft:24,color:'rgba(79, 79, 79, 1)',fontWeight:'500',fontSize:14}}>Shipped</Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:19,height:30,marginTop:10}}>
                <View style={{height:30, borderWidth:1, borderColor:'#C7C7C7',marginLeft:10,marginTop:1}}></View>
             </View>
            <View style={{flexDirection:'row',marginLeft:19,marginTop:10}}>
                <Image source={require('../assets/images/circle.png')}></Image>
                <Text style={{marginLeft:24,color:'rgba(79, 79, 79, 1)',fontWeight:'500',fontSize:14}}>Delivered</Text>
            </View>   
        </View>

        <View style={{marginTop:10,backgroundColor:'white',height:150}}>
            <Text style={styles.text17}>Shipping Address</Text>
            <Text style={styles.text18}>Home</Text>
            <Text style={styles.text19}>1901 Thornridge Cir. Shiloh{'\n'} Oak St, Burlington, CO 80807, USA</Text>
        </View>
        </View>

        <View style={{height:240,backgroundColor:'white',marginTop:10}}>
        <Text style={styles.paymentinfotext}>Payment Info</Text>

        {this.state.arrData.map((item)=>(
             <View style={styles.view5}>
                 <Text style={styles.text20}>{item.title}</Text>
                <Text style={styles.text21}>{item.date}</Text>
            </View>
        ))}

        <View style={styles.line}></View>

         <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:19,marginTop:10}}>
            <Text style={styles.text22}>Total</Text>
            <Text style={styles.text22}>$ 235.00</Text>
        </View>

        <Text style={styles.text23}>Note: All prices include GST</Text>
        
      </View>
      </ScrollView>
    )
  }
}


const styles= StyleSheet.create({
    container:{
        flex:1
    },
    innerview:{
        backgroundColor:'white',
        height:255
    },
    innerview2:{
        marginTop:10,
        backgroundColor:'white',
        height:395
    },
    view1:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:21,
        
    },
    view3:{
        //flexDirection:'row',
        marginTop:20,
        marginHorizontal:19,
        justifyContent:'space-between'
    },
    view4:{
        flexDirection:'row',
        marginHorizontal:19,
        marginTop:20
    },
    view5:{
        marginHorizontal:19,
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white'
    },
    backbutton:{
        left:16,
        position:'absolute'
    },
    myordertext:{
        fontSize:20,
        fontWeight:'600',
        color:'rgba(8, 2, 4, 1)'
    },
    text1:{
        color:'rgba(138, 138, 138, 1)',
        fontWeight:'500',
        fontSize:12,
    },
    text2:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'500',
        fontSize:15,
        marginTop:6
    },
    text3:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:14,
        marginLeft:9.6
    },
    text4:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:15
    },
    text5:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'500',
        fontSize:15
    },
    text6:{
        position:'absolute',
        right:63,
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:16
    },
    text7:{
        position:'absolute',
        right:0,
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'600',
        fontSize:16
    },
    text8:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:14,
        marginTop:3,
        marginLeft:12
    },
    text9:{
        position:'absolute',
        right:54,
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:16
    },
    text10:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'400',
        fontSize:14
    },
    text11:{
        color:'rgba(138, 138, 138, 1)',
        fontWeight:'500',
        fontSize:14,
        marginTop:8
    },
    text12:{
        color:'rgba(138, 138, 138, 1)',
        fontWeight:'500',
        fontSize:15,
        marginTop:8
    },
    text13:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'600',
         fontSize:16
    },
    text14:{
        color:'rgba(0, 173, 80, 1)',
        fontWeight:'400',
        fontSize:14,
        marginTop:5
    },
    text15:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'500',
        fontSize:14,
        marginLeft:24
    },
    text16:{
        color:'rgba(138, 138, 138, 1)',
        fontWeight:'400',
        fontSize:12,
        marginLeft:25
    },
    text17:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'600',
        fontSize:16,
        marginLeft:19,
        marginTop:21
    },
    text18:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'500',
        fontSize:16,
        marginLeft:19,
        marginTop:16
    },
    text19:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:14,
        marginLeft:19,
        marginTop:6
    },
    text20:{
        fontWeight:'400',
        fontSize:15,
        color:'rgba(79, 79, 79, 1)',
      },
      text21:{
        fontWeight:'500',
        fontSize:15,
        color:'rgba(79, 79, 79, 1)',
      },
      text22:{
        fontWeight:'700',
        fontSize:20,
        color:'rgba(206, 28, 79, 1)',
      },
      text23:{
        fontWeight:'300',
        fontSize:14,
        color:'rgba(138, 138, 138, 1)',
        marginLeft:19,
        marginTop:8
      },
    helptext:{
        color:'rgba(138, 138, 138, 1)',
        fontWeight:'500',
        fontSize:13
    },
    paymentinfotext:{
        marginLeft:19,
        marginTop:20,
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'600',
        fontSize:16
    },
    line:{
        marginHorizontal:19,
        borderWidth:1,
        borderColor:'rgba(0, 0, 0, 0.04)',
        marginTop:12
    },
    line2:{
        //marginHorizontal:19,
        borderWidth:1,
        borderColor:'rgba(0, 0, 0, 0.04)',
        marginTop:12
    },
    helptouchable:{
        height:30,
        width:84,
        position:'absolute',
        right:0,
        borderRadius:20,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000000',
        shadowRadius:3,
        shadowOffset:0.8,
        shadowOffset:{width:6,height:6},
        elevation:5,
        borderColor:'#E1E1E1',
        backgroundColor:'white'
    },
    tick:{
        position:'absolute',
        top:7,
        left:5.5
    }
    
})