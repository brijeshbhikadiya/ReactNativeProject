import { Image, StyleSheet, Text, View,StatusBar, TextInput, TouchableOpacity, ScrollView, } from 'react-native'
import React, { Component } from 'react'

export default class MyOrder extends Component {
    constructor(){
        super()
        this.state={
            arrData:[{
                orderid:"ORDER ID",
                orderidnumber:"MAKP-10265955",
                orderinfotouchable:"Order Info",
                orderdate1:"Ordered on",
                orderdate2:"Sat, 12 June",
                orderimage:require('../assets/images/image_1.png'),
                ordername:"Jelly Cream With Jeju Cherry\nBlossom",
                orderqty:"Qty: 1  •  $10.00",
                orderstatus:"Confirmed"

            },
            {
                orderid:"ORDER ID",
                orderidnumber:"MAKP-10265955",
                orderinfotouchable:"Order Info",
                orderdate1:"Ordered on",
                orderdate2:"Sat, 12 June",
                orderimage:require('../assets/images/image_2.png'),
                ordername:"Apple Skin-Perfecting Hydrating\nFoundation ",
                orderqty:"Qty: 1  •  $10.00",
                orderstatus:"Confirmed"

            },
            {
                orderid:"ORDER ID",
                orderidnumber:"MAKP-10265955",
                orderinfotouchable:"Order Info",
                orderdate1:"Ordered on",
                orderdate2:"Sat, 12 June",
                orderimage:require('../assets/images/image_3.png'),
                ordername:"Jelly Cream With Jeju Cherry\nBlossom",
                orderqty:"Qty: 1  •  $10.00",
                orderstatus:"Confirmed"

            },
            {
                orderid:"ORDER ID",
                orderidnumber:"MAKP-10265955",
                orderinfotouchable:"Order Info",
                orderdate1:"Ordered on",
                orderdate2:"Sat, 12 June",
                orderimage:require('../assets/images/image_4.png'),
                ordername:"Eyeshadow palettes",
                orderqty:"Qty: 1  •  $10.00",
                orderstatus:"Confirmed"

            },
            {
                orderid:"ORDER ID",
                orderidnumber:"MAKP-10265955",
                orderinfotouchable:"Order Info",
                orderdate1:"Ordered on",
                orderdate2:"Sat, 12 June",
                orderimage:require('../assets/images/image_5.png'),
                ordername:"Jelly Cream With Jeju Cherry\nBlossom",
                orderqty:"Qty: 1  •  $10.00",
                orderstatus:"Confirmed"

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
            <Text style={styles.myordertext}>My Orders</Text>
        </View>

        <View style={[styles.view2,styles.shadow]}>
            <Image source={require('../assets/images/search.png')} style={styles.search}></Image>
            <TextInput
            placeholder='Search'
            style={styles.searchtext}></TextInput>
            <Image  source={require('../assets/images/volume.png')} style={styles.volume}></Image>
        </View>

        </View>

        {this.state.arrData.map((item)=>(
             <View style={styles.innerview2}>
             <View style={styles.view3}>
                 <View>
                     <Text style={styles.text1}>{item.orderid}</Text>
                     <Text style={styles.text2}>{item.orderidnumber}</Text>
                 </View>
                 <TouchableOpacity style={styles.touchableopacity1}>
                     <Text style={styles.text3}>{item.orderinfotouchable}</Text>
                 </TouchableOpacity>
             </View>
             <View style={styles.line}></View>
             <View style={{flexDirection:'row',marginHorizontal:19,marginTop:10}}>
                 <Text style={styles.text4}>{item.orderdate1}</Text><Text style={styles.text5}> {item.orderdate2}</Text>
             </View>
 
              <View style={styles.innerview3}>
                  <View style={styles.view4}>
                     <Image source={item.orderimage} style={{height:92,width:92}}></Image>
                     <View style={{marginLeft:16}}>
                         <Text style={styles.text6}>{item.ordername}</Text>
                         <Text style={styles.text7}>{item.orderqty}</Text>
                         <Text style={styles.text8}>{item.orderstatus}</Text>
                     </View>
                 </View>
              </View> 
         </View>
        ))}
      </View>
      </ScrollView>
    )
  }
}
 
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.04)',
    },
    line:{
        marginHorizontal:19,
        borderWidth:1,
        borderColor:'rgba(0, 0, 0, 0.04)',
        marginTop:12
    },
    innerview:{
        backgroundColor:'white',
        height:135
    },
    innerview2:{
        backgroundColor:'white',
        marginTop:4,
        height:240,
        marginBottom:5
    },
    innerview3:{
        marginTop:14,
        marginHorizontal:19
    },
    view1:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:21,
        
    },
    view2:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:350,
        height:48,
        backgroundColor:'white',
        borderColor:'rgba(0, 0, 0, 0.11)',
        borderWidth:1,
        borderRadius:100,
        marginHorizontal:20,
        marginTop:20
        
    },
    view3:{
        flexDirection:'row',
        marginTop:28,
        marginHorizontal:19,
        justifyContent:'space-between'
    },
    view4:{
        flexDirection:'row'
    },
    shadow:{   
    shadowColor: '#000000',
    shadowRadius: 3,
    shadowOpacity: 0.5,
    // shadowOffset: {width: 0, height: 0},
    elevation: 5,
    },
    backbutton:{
        left:16,
        position:'absolute'
    },
    search:{
        position:'absolute',
        left:22,
        top:17,
        
    },
    volume:{
        position:'absolute',
        right:15,
        top:15
    },
    myordertext:{
        fontSize:20,
        fontWeight:'600',
        color:'rgba(8, 2, 4, 1)'
    },
    searchtext:{
        position:'absolute',
        left:45,
        top:2,
        width:'78%'
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
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'500',
        fontSize:13
    },
    touchableopacity1:{
        borderColor:'rgba(254, 220, 237, 1)',
        borderRadius:100,
        borderWidth:1,
        height:30,
        width:84,
        justifyContent:'center',
        alignItems:'center'
    },
    text4:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:13
    },
    text5:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'500',
        fontSize:13
    },
    text6:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'400',
        fontSize:14
    },
    text7:{
        color:'rgba(138, 138, 138, 1)',
        fontWeight:'500',
        fontSize:14,
        marginTop:8
    },
    text8:{
        color:'rgba(11, 195, 96, 1)',
        fontWeight:'500',
        fontSize:16,
        marginTop:8
    },
    
})