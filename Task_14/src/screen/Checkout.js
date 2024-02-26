import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewComponent,Dimensions } from 'react-native'
import React, { Component } from 'react'
const screenWidth = Dimensions.get('window').width;


export default class Checkout extends Component {
    constructor(){
        super();
        this.state={
           currentIndex:0,
           email:"",
           cardno:"",
           fname:'',
           lname:"",
           country:"",
           phonenumber:'',
           postcode:'',
           screen1:true,
           screen2:false,
           screen3:false
        }
        this.scrollView = React.createRef();

    }

    handlePhonenumber=(text)=>{
        const numericvalue=text.replace(/[^0-9]/g, '');
        this.setState({phonenumber:numericvalue})
    }
     handlePhonenumber2=(text)=>{
        const numericvalue=text.replace(/[^0-9]/g, '');
        this.setState({postcode:numericvalue})
    }

    handleView=(index)=>{
        this.setState({
            currentIndex:index
        });
    }


    handleScreen = () =>{
        if(this.state.screen1){
            this.setState({
                screen1:false,
                screen2:true,
                screen3:false
            })
        }
        else if(this.state.screen2){
            this.setState({
                screen1:false,
                screen2:false,
                screen3:true
            })
        }
        else if(this.state.screen3){
            this.setState({
                screen1:false,
                screen2:false,
                screen3:false
            })
        }
    }
  render() {
    vEmail=(email)=>{
        const ex =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
        return ex.test(String(email).toLowerCase()) 
      }
      
    //   vCardNo=(cardno)=>{
    //     const ex1= "^4[0-9]{12}(?:[0-9]{3})?$"
    //     return ex1.test(String(cardno).toLowerCase())
    //   }

    handleName=(text)=>{
        const namerx=/^[a-zA-Z ]+$/
        return namerx.test(String(text))
     }
     handleName2=(text)=>{
        const namerx=/^[a-zA-Z ]+$/
        return namerx.test(String(text))
     }
     handleName3=(text)=>{
        const namerx=/^[a-zA-Z ]+$/
        return namerx.test(String(text))
     }
    return (
      <View style={styles.container}>
        <View style={styles.titlebar}>
            <Image source={require('../assets/images/back.png')} style={styles.backimage}></Image>
            <Text style={styles.reservationtext}>Reservation</Text>
        </View>
        <View>

        
        <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={this.scrollView}
        onScroll={evnt => {
            let indexValue = evnt.nativeEvent.contentOffset.x / screenWidth;
            //console.log('indexValue--', Math.ceil(indexValue));
            this.setState({currentIndex: Math.ceil(indexValue)});
          }}>
      
        
        <View style={{
        width: screenWidth,}}>
            <View style={styles.textinputview}>
                <TextInput
                placeholder='First Name'
                onChangeText={(text)=>{this.setState({fname: text})}}
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            {this.state.fname == ""?null:handleName(this.state.fname)?null:<Text style={{color:'red',marginLeft:20}}>Enter a valid Name..</Text>}
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Last Name'
                onChangeText={(text)=>{this.setState({lname: text})}}
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            {this.state.lname == ""?null:handleName2(this.state.lname)?null:<Text style={{color:'red',marginLeft:20}}>Enter a valid Name..</Text>}
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Email Address'
                keyboardType='email-address'
                onChangeText={(text)=>{
                    this.setState({email:text})
                  }}
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            {this.state.email==""?null:vEmail(this.state.email)?<Text style={{color:'green',marginLeft:20}}>Valid Email</Text>:<Text style={{color:'red',marginLeft:20}}>Invalid input</Text>} 
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Address'
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Post Code'
                onChangeText={this.handlePhonenumber2}
                value={this.state.postcode}
                maxLength={6}
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Country'
                onChangeText={(text)=>{this.setState({country: text})}}
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            {this.state.country == ""?null:handleName2(this.state.country)?null:<Text style={{color:'red',marginLeft:20}}>Enter a valid Country Name..</Text>}
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Mobile Phone'
                onChangeText={this.handlePhonenumber}
                value={this.state.phonenumber}
                maxLength={10}
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            {/* <TouchableOpacity style={styles.gotopaymentbutton} onPress={this.handleScreen}>
                <Text style={styles.gotopaymenttext} >Go to Payment</Text>
            </TouchableOpacity> */}
        </View>
        

        
        <View style={{width: screenWidth}}>
            <Image source={require('../assets/images/CreditCard.png')} style={styles.creditcardimage}>
            </Image>

            <View style={styles.textinputview}>
                <TextInput
                placeholder='Card Number'
                // onChangeText={(text)=>{
                //     this.setState({cardno:text})
                //   }}
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                ></TextInput>
            </View>
            {/* {this.state.cardno==""?null:vEmail(this.state.cardno)?<Text style={{color:'green',marginLeft:20}}>Valid CardNo</Text>:<Text style={{color:'red',marginLeft:20}}>Invalid CardNo</Text>}  */}

            <View style={{flexDirection:'row'}}>
            <View style={styles.expiryview}>
                <TextInput style={styles.expirytextinput}
                placeholder='Expiry'
                placeholderTextColor={'rgba(153, 153, 153, 1)'}></TextInput>
            </View>
            <View style={styles.cvview}>
                <TextInput style={styles.expirytextinput}
                placeholder='CVV'
                placeholderTextColor={'rgba(153, 153, 153, 1)'}></TextInput>
            </View>
            </View>
            
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Name'
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                ></TextInput>
            </View>

            <View style={{flexDirection:'row',marginHorizontal:24,marginTop:21}}>
            <Image source={require('../assets/images/checkbox.png')}>
            </Image>
            <Text style={styles.savethistext}>Save this credit card</Text>
            </View>

            {/* <TouchableOpacity style={styles.gotopaymentbutton} onPress={this.handleScreen}>
                <Text style={styles.gotopaymenttext} >Go to Confirmation</Text>
            </TouchableOpacity> */}
        </View>
  
  <View style={{marginHorizontal:22}}>
        <Image source={require('../assets/images/hotel_pic.png')} style={styles.hotelimage} ></Image>
        <Image source={require('../assets/images/like.png')} style={styles.likebutton}></Image>
        <Text style={styles.hotelname}>Beach Resort Lux</Text>
        <View style={styles.startextview}>
            <Text style={styles.startext}>4.5</Text>
            <Image source={require('../assets/images/star.png')} style={{marginLeft:3,marginTop:1}}></Image>
        </View>
        
        <Text style={styles.hoteldesc}>2 People{'\n'}Standard King Room{'\n'}2 nights{'\n'}Jan 18 2019 to Jan 20 2019</Text>

        <View style={styles.lineview}></View>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:36}}>
            <Text style={styles.hotelprice}>$1480 USD</Text>
            <Image source={require('../assets/images/Pricing.png')} style={{marginTop:10}}></Image>
        </View>

        {/* <TouchableOpacity style={styles.confirmbutton} onPress={this.handleScreen}>
            <Text style={styles.gotopaymenttext} >Complete</Text>
        </TouchableOpacity> */}
  </View>
 
  </ScrollView>
  </View>

  <TouchableOpacity style={styles.gotopaymentbutton} onPress={() => {
            if(this.state.currentIndex<2){
            this.scrollView.current.scrollTo({
              x: screenWidth * (this.state.currentIndex+1),
              animated: true,
            });
            this.setState({
              currentIndex: this.state.currentIndex + 1,
            });
        }
          }}>
            {this.state.currentIndex==0?<Text style={styles.gotopaymenttext} >Go to Payment</Text>:this.state.currentIndex==1?<Text style={styles.gotopaymenttext} >Go to Confirmation</Text>:<Text style={styles.gotopaymenttext} >Complete</Text>}
            </TouchableOpacity>
      
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    titlebar:{
        flexDirection:'row'
    },
    textinputview:{
        backgroundColor:'rgba(223, 222, 222, 0.3)',
        marginHorizontal:20,
        borderRadius:10,
        paddingHorizontal:14,
        marginTop:18
       },
    expiryview:{
        backgroundColor:'rgba(223, 222, 222, 0.3)',
        marginHorizontal:24,
        borderRadius:10,
        height:50,
        width:161,
        paddingHorizontal:14,
        marginTop:18
       },
    cvview:{
        backgroundColor:'rgba(223, 222, 222, 0.3)',
        //marginHorizontal:24,
        borderRadius:10,
        height:50,
        width:161,
        paddingHorizontal:14,
        marginTop:18
       },
    startextview:{
        backgroundColor:'rgba(248, 161, 112, 1)',
        borderRadius:40,
        paddingLeft:5,paddingRight:4,
        paddingVertical:4.35,
        flexDirection:'row',
        position:'absolute',
        right:20,
        top:158
    },
    lineview:{
        height:1,
        marginTop:30,
        backgroundColor:'rgba(223, 222, 222, 1)'
    },
    gotopaymentbutton:{
        marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(248, 161, 112, 1)',
        marginTop:40,
        borderRadius:10,
        paddingVertical:15
    },
    confirmbutton:{
        //marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(248, 161, 112, 1)',
        marginTop:40,
        borderRadius:10,
        paddingVertical:15
    },
    likebutton:{
        position:'absolute',
        right:20,
        top:12
    },
    backimage:{
        marginTop:25,
        marginLeft:19
    },
    hotelimage:{
        width:350
        //alignSelf:'center',
       // width:null,
        //resizeMode:'stretch'
    },
    savethistext:{
        color:'rgba(153, 153, 153, 1)',
        fontSize:14,
        lineHeight:21.01,
        fontFamily:'NunitoSans',
        marginLeft:10,
        //marginTop:1
      },
    reservationtext:{
        color:'rgba(57, 57, 57, 1)',
        fontSize:28,
        marginLeft:24,
        fontWeight:'bold',
        marginTop:14,
        fontFamily:"NunitoSans"
    },
    gotopaymenttext:{
        color:'rgba(255, 255, 255, 1)',
        fontSize:24,
        fontFamily:'NunitoSans',
        fontWeight:'bold'
    },
    creditcardimage:{
        alignSelf:'center',
        
      },
    hotelname:{
        position:'absolute',
        top:155,
        bottom:16,
        left:25,
        color:'rgba(255, 255, 255, 1)',
        fontSize:22,
        fontFamily:'NunitoSans',
        fontWeight:'bold'
      },
      startext:{
        color:'rgba(255, 255, 255, 1)',
        fontSize:12,
        fontFamily:'NunitoSans',
        fontWeight:'bold'
      },
      hoteldesc:{
        marginTop:30,
        color:'rgba(97, 97, 103, 1)',
        fontSize:16,
        lineHeight:32,
        fontFamily:'NunitoSans'
      },
      hotelprice:{
        color:'rgba(57, 57, 57, 1)',
        fontSize:36,
        lineHeight:46.8,
        fontFamily:'NunitoSans',
        fontWeight:'bold'
      }
})