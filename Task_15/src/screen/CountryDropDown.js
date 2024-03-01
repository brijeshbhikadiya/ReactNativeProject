//this code fot custom dropdown for phone number country code and image
import { Text, View,StyleSheet,TextInput,TouchableOpacity,Image,ScrollView } from 'react-native'
import React, { Component } from 'react'
const countryFlags = {
  US: require('../assets/images/us.png'),
  CA: require('../assets/images/us.png'),
  IN:require('../assets/images/india.png'),
  AM:require('../assets/images/america.png'),
  NW:require('../assets/images/newzeland.png'),
  AUS:require('../assets/images/aus.png'),
  SA:require('../assets/images/South.png')
  // Add more country codes and their flag images as needed
};

const allcountries=[
  {code:'US',callingCode:'65'},
  {code:'CA',callingCode:'93'},
  {code:'IN',callingCode:'91'},
  {code:'AM',callingCode:'44'},
  {code:'NW',callingCode:'64'},
  {code:'AUS',callingCode:'01'},

]

export default class CountryDropDown extends Component {
  constructor(){
    super()
    this.state={
        selectedCountry: {code: 'US', callingCode: '1' }, // Default country
        modalVisible: false,
        searchQuery:'',
    }
}

handleSearch=(text)=>{
  this.setState({searchQuery:text})
};



onSelectCountry = (country) => {
    this.setState({ countryCode: country.callingCode });
    this.setModalVisible(false);
};



  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  onSelectCountry = (country) => {
    this.setState({ selectedCountry: country });
    this.setModalVisible(false);
  };

  render() {
    const { selectedCountry, modalVisiblesearchQuery,searchQuery,modalVisible} = this.state;

    const filterCountries=allcountries.filter((country)=>
      country.callingCode.includes(searchQuery)
    );
    
    return (
      <View>
        <View style={styles.phonenumberview}>
                    <TextInput
                    placeholder='Phone Number'
                    maxLength={10}
                    placeholderTextColor={'rgba(23, 46, 81, 0.5)'}
                    onChangeText={this.handlePhoneNumberChange}
                    style={styles.phonenumbertextinput}></TextInput>
                    <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                        <View style={styles.container2}>
                        <Text style={styles.countryCode}>+{selectedCountry.callingCode}</Text>
                        <Image source={countryFlags[selectedCountry.code]} style={styles.flag} />
                        </View>
                    </TouchableOpacity>
          </View>

          {modalVisible && ( 
         <View style={styles.modalContainer}>
         <ScrollView showsVerticalScrollIndicator={false}>
         <TextInput
         placeholder='country Code'
         value={searchQuery}
         onChangeText={this.handleSearch}
         style={styles.serachInput}

         ></TextInput>
         {filterCountries.map((item,index)=>(
            <TouchableOpacity key={item.code} onPress={() => this.onSelectCountry(item)}>
             <View style={styles.countryItem}>
               <Text style={styles.countryCode}>+{item.callingCode}</Text>
               <Image source={countryFlags[item.code]} style={[styles.flag,{width:index==0?25:30},{height:index==0?25:30}]} /> 
             </View>

           </TouchableOpacity>
           
           
         ))}
     
           </ScrollView>
         </View>
        
       )}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  container2:{
      //flex:1,
      flexDirection:'row',
      marginTop:15,
      marginRight:5
      
  },
  phonenumberview:{
      borderWidth:1,
      borderColor:'rgba(229, 229, 229, 1)',
      backgroundColor:'white',
      borderRadius:10,
      marginHorizontal:20,
      marginTop:48,
      flexDirection:'row'
  },
  deshview:{
      height:1,
      width:12,
      backgroundColor:'rgba(0, 0, 0, 0.3)',
      marginVertical:28
  },
  roundview:{
      borderRadius:100,
      borderColor:'rgba(185, 203, 223, 1)',
      borderWidth:1,
      height:46,
      width:46,
      marginTop:46,
      marginHorizontal:165,
      justifyContent:'center',
      alignItems:'center'
      //backgroundColor:'red'
  },
  resetpasswordbutton:{
      backgroundColor:'rgba(22, 80, 149, 1)',
      borderRadius:100,
      marginHorizontal:40,
      //position:'absolute',
      marginTop:109,
      //bottom:40,
      // paddingVertical:15.5,
      // paddingHorizontal:90,
      height:53,
      justifyContent:'center',
      alignItems:'center'
  },
  resetpasswordbutton2:{
      backgroundColor:'rgba(22, 80, 149, 1)',
      borderRadius:100,
      marginHorizontal:20,
      marginTop:40,
      paddingVertical:15.5,
      justifyContent:'center',
      alignItems:'center'
  },
  phonenumbertextinput:{
      marginLeft:22,
      fontWeight:'400',
      //opacity:50,
      fontSize:16,
      flex:1,
      lineHeight:10
  },
  backbutton: {
      marginTop:21,
      marginLeft:16
  },
  lockimage:{
      alignSelf:'center',
      marginTop:90
  },
  forgotpasswordtext:{
      color:'rgba(28, 28, 28, 1)',
      fontWeight:'700',
      fontSize:24,
      lineHeight:46,
      alignSelf:'center',
      marginTop:35
  },
  forgotpassworddes:{
      color:'rgba(62, 62, 62, 1)',
      fontWeight:'400',
      fontSize:16,
      lineHeight:24.5,
      textAlign:'center',
      marginTop:5,
  },
  resetpasswordtext:{
      color:'rgba(255, 255, 255, 1)',
      fontWeight:'700',
      fontSize:18,
      lineHeight:21.92
  },
  otptext1:{
      borderWidth:1,
      width:44,
      height:55,
      borderColor:'rgba(229, 229, 229, 1)',
      borderRadius:10,
      fontSize:16,
      fontWeight:'700',
      lineHeight:10,
      color:'rgba(28, 28, 28, 1)',
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:16
      //marginHorizontal:16
     
  },
  flag: {
      width: 20,
      height: 20,
      marginLeft: 10,
    },
    countryCode: {
      fontSize: 16,
    },
    modalContainer: {
      marginTop: -150,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor:'white',
     // padding: 10,
    // marginRight:100,
      width:80,
      marginLeft:290
    },
    countryItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    selectedphonenumber:{
      color:'rgba(62, 62, 62, 1)',
      fontWeight:'600',
      fontSize:16,
      lineHeight:24.5
    },
    innerloadingimage:{
        position:'absolute',
        //marginVertical:15,
        top:15,
        left:15
    },
    serachInput:{
      height:40,
      width:120,
      backgroundColor:'white',
      //borderWidth:0.1,
      borderRadius:10,
      shadowColor:'black',
      //elevation:2,
      marginTop:2,
     // marginLeft:4,
      shadowOpacity:0.5
    }
   
})