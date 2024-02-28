import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewComponent,
  Dimensions,
  Animated,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      selectedStep: 1,
      progress1: new Animated.Value(0),
      progress2: new Animated.Value(0),
      progress3: new Animated.Value(0),
      date:'',
      currentIndex: 0,
      checkbox:false,
      expiry: '',
      cardname: '',
      email: '',
      cardno: '',
      fname: '',
      lname: '',
      cvv: '',
      country: '',
      phonenumber: '',
      postcode: '',
      screen1: true,
      screen2: false,
      screen3: false,
    };
  }

  //For Animation Uses
  start1 = () => {
    Animated.timing(this.state.progress1, {
      toValue: 28,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  start2 = () => {
    Animated.timing(this.state.progress2, {
      toValue: 28,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  //Handle Function For Validation

  handleCheckBox = () => {
    this.setState({checkbox:!this.state.checkbox});
  }
  handlePhonenumber = text => {
    const numericvalue = text.replace(/[^0-9]/g, '');
    this.setState({phonenumber: numericvalue});
  };
  handlePhonenumber2 = text => {
    const numericvalue = text.replace(/[^0-9]/g, '');
    this.setState({postcode: numericvalue});
  };
  handleCardNo = text => {
    const numericvalue = text.replace(/[^0-9]/g, '');
    this.setState({cardno: numericvalue});
  };
  handleCvv = text => {
    const numericvalue = text.replace(/[^0-9]/g, '');
    this.setState({cvv: numericvalue});
  };

  //This Function Is Use For Handle All 3 Screen

  handleScreen = () => {
    //This is called When Scrren1 is true
    if (this.state.screen1) {
      if (!this.state.fname.trim()) {
        Alert.alert('Alert', 'Please Enter First Name');
        return;
      }
      if (!this.state.lname.trim() ) {
        Alert.alert('Alert', 'Please Enter Last Name');
        return;
      }
      if (!this.state.email.trim() ) {
        Alert.alert('Alert', 'Please Enter the Email');
        return;
      }
      if (!this.state.country.trim()) {
        Alert.alert('Alert', 'Please Enter a Country');
        return;
      }
      if (!this.state.phonenumber.trim() ) {
        Alert.alert('Alert', 'Please Enter a Phone Number');
        return;
      }
      if ( !this.state.postcode.trim()) {
        Alert.alert('Alert', 'Please Enter a Post Code');
        return;
      }
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(this.state.email)) {
        Alert.alert('Please enter a valid email address.');
        return;
      }
      const phoneLength = this.state.phonenumber.length;
      if (phoneLength < 10 || phoneLength > 10 || !/^\d+$/.test(this.state.phonenumber)) {
        Alert.alert('Phone number should be 10 digits long and contain only numbers.');
        return;
      }

      //This condition is For Handle The Animation
      if (this.state.selectedStep == 1) {
        this.start1();
      }
      if (this.state.selectedStep == 2) {
        this.start2();
      }
      if (this.state.selectedStep == 0) {
        this.setState({selectedStep: this.state.selectedStep + 1});
      } else {
        setTimeout(() => {
          this.setState({selectedStep: this.state.selectedStep + 1});
        }, 1000);
      }
      this.setState({
        screen1: false,
        screen2: true,
        screen3: false,
      });

      //This is callrd when the Second Screen Is True
    } else if (this.state.screen2) {
      if (!this.state.cardno.trim() ) {
        Alert.alert('Alert', 'Please Enter CardNo');
        return;
      }
      if (!this.state.date.trim()) {
        Alert.alert('Alert', 'Please Enter Expiry Date');
        return;
      }
      if (!this.state.cvv.trim() ) {
        Alert.alert('Alert', 'Please Enter Cvv Number');
        return;
      }
      if (!this.state.cardname.trim()) {
        Alert.alert('Alert', 'Please Enter a CardName');
        return;
      }

      //This is For Handle The Animation Part
      if (this.state.selectedStep == 1) {
        this.start1();
      }
      if (this.state.selectedStep == 2) {
        this.start2();
      }
      if (this.state.selectedStep == 0) {
        this.setState({selectedStep: this.state.selectedStep + 1});
      } else {
        setTimeout(() => {
          this.setState({selectedStep: this.state.selectedStep + 1});
        }, 1000);
      }
      this.setState({
        screen1: false,
        screen2: false,
        screen3: true,
      });
    } else {
      this.setState({
        screen1: false,
        screen2: false,
        screen3: false,
      });
    }
  };

  render() {
    const {selectedStep, progress1, progress2, progress3} = this.state;

    vDate = date =>{
      const re = /\b(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})\b/;
      return re.test(String(date));
    }

    vEmail = email => {
      const ex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      return ex.test(String(email).toLowerCase());
    };

    handleName = text => {
      const namerx = /^[a-zA-Z ]+$/;
      return namerx.test(String(text));
    };
    handleName2 = text => {
      const namerx = /^[a-zA-Z ]+$/;
      return namerx.test(String(text));
    };
    handleName3 = text => {
      const namerx = /^[a-zA-Z ]+$/;
      return namerx.test(String(text));
    };
    handleCardName = text => {
      const namerx = /^[a-zA-Z ]+$/;
      return namerx.test(String(text));
    };

    return (
      <View style={styles.container}>
        {/* //Titlebar View */}
        <View style={styles.titlebar}>
          <Image
            source={require('../assets/images/back.png')}
            style={styles.backimage}></Image>
          <Text style={styles.reservationtext}>Reservation</Text>
        </View>
        {/* animationview  */}
        <View style={styles.animationview}>
          <View style={styles.firstroundview}>
            <Text style={{color: '#fff'}}>1</Text>
          </View>
          <View
            style={{height: 3, width: 25, backgroundColor: '#f2f2f2'}}></View>
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 100,
              backgroundColor: selectedStep > 1 ? 'orange' : '#f2f2f2',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff'}}>2</Text>
          </View>
          <View
            style={{height: 3, width: 25, backgroundColor: '#f2f2f2'}}></View>
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 100,
              backgroundColor: selectedStep > 2 ? 'orange' : '#f2f2f2',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff'}}>3</Text>
          </View>
        </View>
        
        <View
          style={{
            height: '100%',
            marginTop: 10,
            marginLeft: 30,
            padding: 50,
            position: 'absolute',
            top: 0,
            flexDirection: 'row',
          }}>
          <Animated.View
            style={{
              height: 3,
              width: progress1,
              marginLeft: 74,
              marginTop: 53,
              backgroundColor: 'orange',
            }}></Animated.View>
          <Animated.View
            style={{
              height: 3,
              width: progress2,
              marginLeft: 33,
              marginTop: 53,
              backgroundColor: 'orange',
            }}></Animated.View>
          <Animated.View
            style={{
              height: 3,
              width: progress3,
              backgroundColor: 'orange',
            }}></Animated.View>
        </View>
      
        {this.state.screen1 ? (
          <ScrollView>
            <View>
              <View style={styles.textinputview}>
                <TextInput
                  placeholder="First Name"
                  onChangeText={text => {
                    this.setState({fname: text});
                  }}
                  placeholderTextColor={'rgba(153, 153, 153, 1)'}
                  style={styles.textinputtext}></TextInput>
              </View>
              {this.state.fname == '' ? null : handleName(
                  this.state.fname,
                ) ? null : (
                <Text style={{color: 'red', marginLeft: 20}}>
                  Enter a valid Name..
                </Text>
              )}
              <View style={styles.textinputview}>
                <TextInput
                  placeholder="Last Name"
                  onChangeText={text => {
                    this.setState({lname: text});
                  }}
                  placeholderTextColor={'rgba(153, 153, 153, 1)'}
                  style={styles.textinputtext}></TextInput>
              </View>
              {this.state.lname == '' ? null : handleName2(
                  this.state.lname,
                ) ? null : (
                <Text style={{color: 'red', marginLeft: 20}}>
                  Enter a valid Name..
                </Text>
              )}
              <View style={styles.textinputview}>
                <TextInput
                  placeholder="Email Address"
                  keyboardType="email-address"
                  onChangeText={text => {
                    this.setState({email: text});
                  }}
                  placeholderTextColor={'rgba(153, 153, 153, 1)'}
                  style={styles.textinputtext}></TextInput>
              </View>
              {this.state.email == '' ? null : vEmail(this.state.email) ? (
                null
              ) : (
                <Text style={{color: 'red', marginLeft: 20}}>
                  Invalid input
                </Text>
              )}
              <View style={styles.textinputview}>
                <TextInput
                  placeholder="Address"
                  placeholderTextColor={'rgba(153, 153, 153, 1)'}
                  style={styles.textinputtext}></TextInput>
              </View>
              <View style={styles.textinputview}>
                <TextInput
                  placeholder="Post Code"
                  onChangeText={this.handlePhonenumber2}
                  value={this.state.postcode}
                  maxLength={6}
                  placeholderTextColor={'rgba(153, 153, 153, 1)'}
                  style={styles.textinputtext}></TextInput>
              </View>
              <View style={styles.textinputview}>
                <TextInput
                  placeholder="Country"
                  onChangeText={text => {
                    this.setState({country: text});
                  }}
                  placeholderTextColor={'rgba(153, 153, 153, 1)'}
                  style={styles.textinputtext}></TextInput>
              </View>
              {this.state.country == '' ? null : handleName2(
                  this.state.country,
                ) ? null : (
                <Text style={{color: 'red', marginLeft: 20}}>
                  Enter a valid Country Name..
                </Text>
              )}
              <View style={styles.textinputview}>
                <TextInput
                  placeholder="Mobile Phone"
                  onChangeText={this.handlePhonenumber}
                  value={this.state.phonenumber}
                  maxLength={10}
                  placeholderTextColor={'rgba(153, 153, 153, 1)'}
                  style={styles.textinputtext}></TextInput>
              </View>
              <TouchableOpacity
                style={styles.gotopaymentbutton}
                onPress={this.handleScreen}>
                <Text style={styles.gotopaymenttext}>Go to Payment</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : this.state.screen2 ? (
          <ScrollView>
            <View>
              <Image
                source={require('../assets/images/CreditCard.png')}
                style={styles.creditcardimage}></Image>

              <View style={styles.textinputview}>
                <TextInput
                  placeholder="Card Number"
                  onChangeText={this.handleCardNo}
                  value={this.state.cardno}
                  maxLength={19}
                  placeholderTextColor={'rgba(153, 153, 153, 1)'}></TextInput>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={styles.expiryview}>
                  <TextInput
                    style={styles.expirytextinput}
                    maxLength={7}
                    onChangeText={text => {
                      this.setState({date: text});
                    }}
                    placeholder="Expiry"
                    placeholderTextColor={'rgba(153, 153, 153, 1)'}></TextInput>
                    {this.state.date == '' ? null : vDate(this.state.date) ? (
               null
              ) : (
                <Text style={{color: 'red', marginLeft: 10}}>
                  Invalid Date
                </Text>
              )}
                </View>
                
                <View style={styles.cvview}>
                  <TextInput
                    style={styles.expirytextinput}
                    placeholder="CVV"
                    onChangeText={this.handleCvv}
                    value={this.state.cvv}
                    maxLength={3}
                    placeholderTextColor={'rgba(153, 153, 153, 1)'}></TextInput>
                </View>
              </View>

              <View style={styles.textinputview}>
                <TextInput
                  placeholder="Name"
                  onChangeText={text => {
                    this.setState({cardname: text});
                  }}
                  placeholderTextColor={'rgba(153, 153, 153, 1)'}></TextInput>
              </View>
              {this.state.cardname == '' ? null : handleCardName(
                  this.state.cardname,
                ) ? null : (
                <Text style={{color: 'red', marginLeft: 20}}>
                  Enter a valid Name..
                </Text>
              )}

              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 24,
                  marginTop: 21,
                }}>
                  <TouchableOpacity onPress={this.handleCheckBox}>
                    {this.state.checkbox?
                  <Image
                  source={require('../assets/images/checkbox.png')}></Image>:
                  <Image
                  source={require('../assets/images/uncheck.png')}></Image>}
                  </TouchableOpacity>
                
                <Text style={styles.savethistext}>Save this credit card</Text>
              </View>

              <TouchableOpacity
                style={styles.gotopaymentbutton}
                onPress={this.handleScreen}>
                <Text style={styles.gotopaymenttext}>Go to Confirmation</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : (
          <ScrollView>
            <View style={{marginHorizontal: 22}}>
              <Image
                source={require('../assets/images/hotel_pic.png')}
                style={styles.hotelimage}></Image>
              <Image
                source={require('../assets/images/like.png')}
                style={styles.likebutton}></Image>
              <Text style={styles.hotelname}>Beach Resort Lux</Text>
              <View style={styles.startextview}>
                <Text style={styles.startext}>4.5</Text>
                <Image
                  source={require('../assets/images/star.png')}
                  style={{marginLeft: 3, marginTop: 1}}></Image>
              </View>

              <Text style={styles.hoteldesc}>
                2 People{'\n'}Standard King Room{'\n'}2 nights{'\n'}Jan 18 2019
                to Jan 20 2019
              </Text>

              <View style={styles.lineview}></View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 30,
                }}>
                <Text style={styles.hotelprice}>$1480 USD</Text>
                <Image
                  source={require('../assets/images/Pricing.png')}
                  style={{marginTop: 10}}></Image>
              </View>
              <TouchableOpacity
                style={styles.confirmbutton}
                onPress={() => {
                  this.handleScreen;
                }}>
                <Text style={styles.gotopaymenttext}>Complete</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titlebar: {
    flexDirection: 'row',
  },
  animationview: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 120,
    marginTop: 46,
    marginBottom: 46,
  },
  firstroundview: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundicon: {
    //backgroundColor:'orange',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: 36,
  },
  textinputview: {
    backgroundColor: 'rgba(223, 222, 222, 0.3)',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginTop: 18,
  },
  expiryview: {
    backgroundColor: 'rgba(223, 222, 222, 0.3)',
    marginHorizontal: 24,
    borderRadius: 10,
    height: 50,
    width: 161,
    paddingHorizontal: 14,
    marginTop: 18,
  },
  cvview: {
    backgroundColor: 'rgba(223, 222, 222, 0.3)',
    //marginHorizontal:24,
    borderRadius: 10,
    height: 50,
    width: 161,
    paddingHorizontal: 14,
    marginTop: 18,
  },
  startextview: {
    backgroundColor: 'rgba(248, 161, 112, 1)',
    borderRadius: 40,
    paddingLeft: 5,
    paddingRight: 4,
    paddingVertical: 4.35,
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
    top: 158,
  },
  lineview: {
    height: 1,
    marginTop: 30,
    backgroundColor: 'rgba(223, 222, 222, 1)',
  },
  gotopaymentbutton: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(248, 161, 112, 1)',
    marginTop: 30,
    borderRadius: 10,
    paddingVertical: 15,
  },
  confirmbutton: {
    //marginHorizontal:20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(248, 161, 112, 1)',
    marginTop: 30,
    borderRadius: 10,
    paddingVertical: 15,
  },
  likebutton: {
    position: 'absolute',
    right: 20,
    top: 12,
  },
  backimage: {
    marginTop: 25,
    marginLeft: 19,
  },
  hotelimage: {
    //width: 350,
    //alignSelf:'center',
    width:null,
    resizeMode:'stretch'
  },
  savethistext: {
    color: 'rgba(153, 153, 153, 1)',
    fontSize: 14,
    lineHeight: 21.01,
    fontFamily: 'NunitoSans',
    marginLeft: 10,
    //marginTop:1
  },
  reservationtext: {
    color: 'rgba(57, 57, 57, 1)',
    fontSize: 28,
    marginLeft: 24,
    fontWeight: 'bold',
    marginTop: 14,
    fontFamily: 'NunitoSans',
  },
  gotopaymenttext: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 24,
    fontFamily: 'NunitoSans',
    fontWeight: 'bold',
  },
  creditcardimage: {
    //  alignSelf:'center',,
    marginHorizontal: 22,
    width: 350,
  },
  hotelname: {
    position: 'absolute',
    top: 155,
    bottom: 16,
    left: 25,
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 22,
    fontFamily: 'NunitoSans',
    fontWeight: 'bold',
  },
  startext: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 12,
    fontFamily: 'NunitoSans',
    fontWeight: 'bold',
  },
  hoteldesc: {
    marginTop: 30,
    color: 'rgba(97, 97, 103, 1)',
    fontSize: 16,
    lineHeight: 32,
    fontFamily: 'NunitoSans',
  },
  hotelprice: {
    color: 'rgba(57, 57, 57, 1)',
    fontSize: 36,
    lineHeight: 46.8,
    fontFamily: 'NunitoSans',
    fontWeight: 'bold',
  },
  numbertext: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'NunitoSans',
    fontWeight: 'bold',
    lineHeight: 24.55,
  },
});
