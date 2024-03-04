import { StyleSheet, Text, View,Image, TouchableOpacity, FlatList,ScrollView} from 'react-native'
import React, { Component } from 'react'
import { Switch } from 'react-native-switch';


export default class MyProfile extends Component {
  constructor(){
    super()
    this.state={
      switchValue:true,
      AboutHelp:[{
        AboutHelpImage:require('../assets/images/AboutUs.png'),
        AboutHelpText:"About Us"
      },
      {
        AboutHelpImage:require('../assets/images/ContactUs.png'),
        AboutHelpText:"Contact Us"
      },
      {
        AboutHelpImage:require('../assets/images/TermsAndConditions.png'),
        AboutHelpText:"Terms and Conditions"
      },
      {
        AboutHelpImage:require('../assets/images/PrivacyPolicy.png'),
        AboutHelpText:"Privacy Policy"
      },
      {
        AboutHelpImage:require('../assets/images/HelpAndFaq.png'),
        AboutHelpText:"Help & FAQ’s"
      },
      {
        AboutHelpImage:require('../assets/images/Share.png'),
        AboutHelpText:"Share App"
      },
      {
        AboutHelpImage:require('../assets/images/DeleteAccount.png'),
        AboutHelpText:"Delete Account"
      }  
    ],
      Account:[{
        AccountImage:require('../assets/images/ChangePassword.png'),
        AccountText:"Change Password"
      },
      {
        AccountImage:require('../assets/images/PaymentMethod.png'),
        AccountText:"Payment Methods"
      },
      {
        AccountImage:require('../assets/images/MyAddresses.png'),
        AccountText:"My Addresses"
      },
      {
        AccountImage:require('../assets/images/RaisedTickets.png'),
        AccountText:"Raised Tickets"
      }
    ]
    }
  }

  ToggleSwitch= () =>{
    this.setState({
      switchValue:!this.state.switchValue
    })
  }
  render() {
    return (
      <View style={styles.Container}>
         <View style={styles.HeaderView}>
            <Image source={require('../assets/images/More.png')} style={styles.MoreImage}></Image>
         </View>
        <ScrollView>
         <View style={styles.ProfileView}>
          <Image source={require('../assets/images/MainProfile.png')}></Image>
          <View style={styles.ProfileInnerView}>
            <Text style={styles.ProfileNameText}>Celina Mark</Text>
            <View style={{flexDirection:'row',marginTop:5}}>
              <Image source={require('../assets/images/Diamond.png')}></Image>
              <Text style={styles.DiamondText}>500 </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.EditView}>
              <Image source={require('../assets/images/Edit.png')}></Image>
          </TouchableOpacity>
         </View>

         <View style={styles.AccountView}>
          <Text style={styles.AccountText}>Account</Text>

          <FlatList
          data={this.state.Account}
          scrollEnabled={false}
          renderItem={({item})=>
            <TouchableOpacity style={styles.AccountFlatlistView}>
              <Image source={item.AccountImage}></Image>
              <Text style={styles.AccountTextStyle}>{item.AccountText}</Text>
            </TouchableOpacity>
          }></FlatList>
         </View>

         <View style={styles.NotificationView}>
          <Text style={styles.AccountText}>Notifications</Text>
          <TouchableOpacity style={styles.AccountFlatlistView}>
            <Image source={require('../assets/images/PushNotifications.png')}></Image>
            <Text style={styles.AccountTextStyle}>Push Notifications</Text> 
            <View style={{position:'absolute',right:20,top:-4}}>
            <Switch 
              onValueChange={this.ToggleSwitch} 
              value={this.state.switchValue}
              activeText=''
              inActiveText=''
              backgroundActive={'rgba(56, 207, 117, 1)'}
              innerCircleStyle={{marginRight:10,borderWidth:null,marginVertical:5}}
              circleSize={25} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={10}
              barHeight={30}
         ></Switch>
            </View>
            
          </TouchableOpacity>
        
         </View>

         <View style={styles.AboutHelpView}>
          <Text style={styles.AccountText}>About & Help</Text>

          <FlatList
          scrollEnabled={false}
          data={this.state.AboutHelp}
          renderItem={({item})=>
            <TouchableOpacity style={styles.AccountFlatlistView}>
              <Image source={item.AboutHelpImage}></Image>
              <Text style={styles.AccountTextStyle}>{item.AboutHelpText}</Text>
            </TouchableOpacity>
          }></FlatList>

          <View style={styles.Line}></View>

          <TouchableOpacity style={styles.LogoutView}>
          <Image source={require('../assets/images/LogOut.png')}></Image>
          <Text style={styles.LogoutText}>Logout</Text>
          </TouchableOpacity>
         </View>

         
         </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'rgba(245, 249, 251, 1)'
  },
  //View
  HeaderView:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:22
  },
  ProfileView:{
    marginHorizontal:20,
    flexDirection:'row',
    marginTop:45
  },
  ProfileInnerView:{
    marginLeft:14,
    marginTop:9
  },
  EditView:{
    backgroundColor:'rgba(255, 255, 255, 1)',
    height:30,
    width:30,
    borderRadius:100,
    shadowColor:'black',
    shadowOpacity:0.5,
    elevation:5,
    shadowOffset:{
      height:6,
      width:5
    },
    position:'absolute',
    right:0,
    top:20,
    justifyContent:'center',
    alignItems:'center'
  },
  AccountView:{
    backgroundColor:'white',
    marginTop:23,
    paddingBottom:30
  },
  AboutHelpView:{
    backgroundColor:'white',
    marginTop:10,
    paddingBottom:22.5
  },
  NotificationView:{
    backgroundColor:'white',
    marginTop:10,
    paddingBottom:26 
  },
  AccountFlatlistView:{
    marginTop:28,
    flexDirection:'row',
    marginLeft:20,
  },
  Line:{
    borderWidth:1,
    borderColor:'rgba(0, 0, 0, 0.08)',
    marginTop:20
  },
  LogoutView:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:24
  },
  //Images
  MoreImage:{
    position:'absolute',
    left:20
  },
  //Text
  ProfileNameText:{
    color:'rgba(23, 46, 81, 1)',
    fontWeight:'800',
    fontSize:22,
    lineHeight:26.8
  },
  DiamondText:{
    color:'rgba(241, 147, 87, 1)',
    fontWeight:'600',
    fontSize:16,
    lineHeight:16,
    marginLeft:4,
    marginTop:4
  },
  AccountText:{
    color:'rgba(101, 101, 101, 1)',
    fontWeight:'700',
    fontSize:18,
    lineHeight:21.92,
    marginLeft:20,
    marginTop:22
  },
  AccountTextStyle:{
    color:'rgba(28, 28, 28, 1)',
    fontWeight:'500',
    fontSize:16,
    lineHeight:19.49,
    marginLeft:21,
    marginTop:2.5
  },
  LogoutText:{
    color:'rgba(150, 150, 150, 1)',
    fontWeight:'500',
    fontSize:16,
    lineHeight:19.49,
    marginLeft:9.33
  }
})