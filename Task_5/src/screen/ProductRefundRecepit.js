import { Text, View ,StyleSheet,ScrollView,Image, ImageBackground} from 'react-native'
import React, { Component } from 'react'



export default class ProductRefundRecepit extends Component {
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
   
      
      <ImageBackground source={require('../assets/images/background.png')} style={styles.container} >
        <ScrollView>
          <View style={styles.outercontainer}>
              <Image source={require('../assets/images/backbutton.png')} style={styles.backimage}></Image> 
              <Text style={styles.text1}>Refund Receipt</Text>
          </View>
          <View style={styles.container3}>
              <Text style={styles.text2}>ORDER  ID: ABCD2562</Text>
          </View>

        
      <ImageBackground source={require('../assets/images/background_design.png')} style={styles.innercontainer}>
              <View style={styles.view1}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.text3}>Order Date:</Text>
                  <Text style={styles.text3}>Sat, 12 June, 2022</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
                  <Text style={styles.text3}>Arrival Date:</Text>
                  <Text style={styles.text3}>Mon, 14 June, 2022</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
                  <Text style={styles.text3}>Refunded Date:</Text>
                  <Text style={styles.text3}>Mon, 20 June, 2022</Text>
                </View>
              </View>

            <View style={{marginTop:25}}>
            <View style={styles.line}></View>

<View style={styles.view2}>
    <View>
      <Image source={require('../assets/images/product_image.png')} style={{height:95,width:95}}></Image>
    </View>
    <View style={{marginLeft:20}}>
      <Text style={styles.text4}>Jelly Cream With Jeju Cherry {'\n'}Blossom</Text>
      <Text style={styles.text5}>L'Oreal</Text>
      <Text style={styles.text6}>Qty: 1 •  $10.00</Text>
    </View>
</View>

<View style={styles.line}></View>

<View style={styles.view3}>
  <View>
    <Text style={styles.text7}>Shipping Address</Text>
    <Text style={styles.text8}>1901 Thornridge Cir. Shiloh {'\n'}Oak St, Burlington, CO 80807, USA</Text>
  </View>
</View>

<View style={styles.line}></View>

<Text style={styles.text9}>Payment Info</Text>

{this.state.arrData.map((item)=>(
    <View style={styles.view4}>
      <Text style={styles.text10}>{item.title}</Text>
      <Text style={styles.text12}>{item.date}</Text>
    </View>
  ))}

{/* <View style={styles.view4}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={styles.text10}>Subtotal</Text>
    <Text style={styles.text12}>$220.00</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={styles.text11}>Shipping</Text>
    <Text style={styles.text13}>$10.00</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={styles.text11}>Payment Surcharge</Text>
    <Text style={styles.text13}>$5.00</Text>
  </View>
</View> */}

<View style={styles.line}></View>

<View style={styles.view5}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={styles.text14}>Total</Text>
    <Text style={styles.text14}>$ 235.00</Text>
  </View>
</View>

<Text style={styles.text9}>Refund Info</Text>

{this.state.arrData.map((item)=>(
    <View style={styles.view4}>
      <Text style={styles.text10}>{item.title}</Text>
      <Text style={styles.text12}>{item.date}</Text>
    </View>
  ))}

{/* <View style={styles.view4}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={styles.text10}>Subtotal</Text>
    <Text style={styles.text12}>$220.00</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={styles.text11}>Shipping</Text>
    <Text style={styles.text13}>$10.00</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={styles.text11}>Payment Surcharge</Text>
    <Text style={styles.text13}>$5.00</Text>
  </View>
</View> */}

<View style={styles.line}></View>

<View style={styles.view5}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={styles.text14}>Total Refunded</Text>
    <Text style={styles.text14}>$ 235.00</Text>
  </View>
</View>


<View style={styles.view6}>
  <View style={{flexDirection:'row',marginTop:11,justifyContent:"space-between"}}>
  <Image source={require('../assets/images/discover.png')}></Image>
    <Text style={styles.text15}>Refunded To WAM Acc</Text>
    <Text style={styles.text16}>Total:</Text><Text style={styles.text17}> $235.00</Text>
  </View>
  <View style={styles.line2}></View>

  <View style={{marginTop:11}}>
  <Text style={styles.text7}>Refund reason</Text>
  <Text style={styles.text19}>Wrong product arrived</Text>
  </View>

  <View style={styles.line2}></View>
  
  <Text style={styles.text18}>Note: All prices include GST</Text>
  <View style={{flexDirection:'row',justifyContent:'center',marginTop:32}}>
    <Image source={require('../assets/images/share.png')}></Image>
  </View>
</View>
            </View>
             
             </ImageBackground>
            
            
            </ScrollView>
        </ImageBackground>
        
    

    )
  }
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
        //backgroundColor:'yellow',
        //marginBottom:50
    },
      outercontainer:{
        flexDirection:'row',
        marginTop:14.43,
        justifyContent:'center'
      },
      container3:{
        flexDirection:'row',
        justifyContent:'center',
      },
      view1:{
        marginTop:25,
        marginHorizontal:25,
        height:50
      },
      view2:{
        marginTop:16,
        marginHorizontal:25,
        height:95,
        flexDirection:'row'
      },
      view3:{
        height:70,
        marginTop:16,
        marginHorizontal:25
      },
      view4:{
        //height:82,
        marginHorizontal:25,
        marginTop:9,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      view5:{
        marginTop:12,
        marginHorizontal:25,
        //height:203
      },
      view6:{
        marginHorizontal:25,
        marginTop:14,
      },
      view7:{
        marginHorizontal:25,
      },
      backimage:{
        position:'absolute',
        left:0,
        marginLeft:16,
        marginTop:20
      },
      text1:{
        fontSize:26,
        fontWeight:'400',
        color:'#CE1C4F',
        fontFamily:'DM Serif Display', 
        marginTop:20
      },
      text2:{
        marginTop:3,
        fontSize:16,
        fontWeight:'400',
        color:'#8B433C'
      },
      innercontainer:{
        flex:1,
        //position:'absolute',
        //backgroundColor:'#FFFFFF',
        marginTop:24,
        marginBottom:50,
        marginHorizontal:14,
        ////borderTopLeftRadius:20,
        //borderTopRightRadius:20,
        //borderBottomWidth:1,
       // borderColor:'rgba(0, 0, 0, 0.04)',
        height:1000
      },
      text3:{
        fontSize:15,
        color:'#4F4F4F'
      },
      text4:{
        fontWeight:'500',
        fontSize:14,
        color:'rgba(8, 2, 4, 1)'
      },
      text5:{
        fontWeight:'400',
        fontSize:14,
        color:'rgba(206, 28, 79, 1)',
        marginTop:9
      },
      text6:{
        fontWeight:'400',
        fontSize:14,
        color:'rgba(79, 79, 79, 1)',
        marginTop:9
      },
      text7:{
        fontWeight:'500',
        fontSize:14,
        color:'rgba(222, 128, 154, 1)',
      },
      text8:{
        fontWeight:'400',
        fontSize:14,
        color:'rgba(79, 79, 79, 1)',
        marginTop:9
      },
      text9:{
        marginTop:16,
        fontWeight:'500',
        fontSize:14,
        color:'rgba(222, 128, 154, 1)',
        marginHorizontal:25
        
  
      },
      text10:{
        fontWeight:'400',
        fontSize:15,
        color:'rgba(79, 79, 79, 1)',
      },
      text11:{
        fontWeight:'400',
        fontSize:15,
        color:'rgba(79, 79, 79, 1)',
        marginTop:5
      },
      text12:{
        fontWeight:'500',
        fontSize:15,
        color:'rgba(79, 79, 79, 1)',
      },
      text13:{
        fontWeight:'500',
        fontSize:15,
        color:'rgba(79, 79, 79, 1)',
        marginTop:5
      },
      text14:{
        fontWeight:'600',
        fontSize:15,
        color:'rgba(206, 28, 79, 1)',
      },
      text15:{
        position:'absolute',
        marginLeft:40,
        fontWeight:'400',
        fontSize:14,
        marginTop:4,
        color:'rgba(79, 79, 79, 1)',
      },
      text16:{
        fontWeight:'400',
        fontSize:15,
        color:'rgba(79, 79, 79, 1)',
        marginLeft:190,
        marginTop:3
      },
      text17:{
        fontWeight:'400',
        fontSize:15,
        color:'rgba(206, 28, 79, 1)',
        marginTop:3
      },
      text18:{
        fontWeight:'300',
        fontSize:14,
        color:'rgba(138, 138, 138, 1)',
        marginTop:7
      },
      text19:{
        fontWeight:'400',
        fontSize:14,
        color:'rgba(79, 79, 79, 1)',
        marginTop:6
      },
      line:{
        borderBottomWidth:1,
        borderColor:'rgba(0, 0, 0, 0.04)',
        marginTop:16,
        width:315,
        marginHorizontal:25
      },
      line2:{
        borderBottomWidth:1,
        borderColor:'rgba(0, 0, 0, 0.04)',
        marginTop:16,
        width:315,
       
      }
  
  
    })


