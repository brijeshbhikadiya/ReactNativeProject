import React, { Component } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phoneno: '',
      creditCardNo: '',
      expiryDate: '',
      cvv: '',
      creditCardName: ''
    };
  }

  validateForm = () => {
    const { firstname, lastname, email, phoneno,creditCardNo,expiryDate,cvv,creditCardName } = this.state;

    if (!firstname ) {
      Alert.alert('Firstname required');
      return;
    }
    if ( !lastname ) {
      Alert.alert('lastname required');
      return;
    }
    if ( !email ) {
      Alert.alert('email required');
      return;
    }
    if (!phoneno) {
      Alert.alert('phoneno required');
      return;
    }

    if (creditCardNo.length !== 16 || !/^\d+$/.test(creditCardNo)) {
      Alert.alert('Please enter a valid 16-digit credit card number.');
      return;
    }

    // Credit card expiry date validation - Assuming MMYY format
    if (!/^(0[1-9]|1[0-2])([2-9][0-9])$/.test(expiryDate)) {
      Alert.alert('Please enter a valid expiry date in MMYY format.');
      return;
    }

    // CVV validation - Assuming 3 digits
    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
      Alert.alert('Please enter a valid 3-digit CVV number.');
      return;
    }
  
  

    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(firstname) || !nameRegex.test(lastname)) {
      Alert.alert('First name and last name should not contain numbers.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Please enter a valid email address.');
      return;
    }

    const phoneLength = phoneno.length;
    if (phoneLength < 10 || phoneLength > 10 || !/^\d+$/.test(phoneno)) {
      Alert.alert('Phone number should be 10 digits long and contain only numbers.');
      return;
    }

     // Credit card number validation - Assuming 16 digits for simplicity
    

    // Validation successful, perform further actions here
    // For now, just showing an alert
    Alert.alert('Form validated successfully!');
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="First Name"
          value={this.state.firstname}
          onChangeText={text => this.setState({ firstname: text })}
        />
        <TextInput
          placeholder="Last Name"
          value={this.state.lastname}
          onChangeText={text => this.setState({ lastname: text })}
        />
        <TextInput
          placeholder="Email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          placeholder="Phone Number"
          value={this.state.phoneno}
          onChangeText={text => this.setState({ phoneno: text })}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Credit Card Number"
          value={this.state.creditCardNo}
          onChangeText={text => this.setState({ creditCardNo: text })}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Expiry Date (MMYY)"
          value={this.state.expiryDate}
          onChangeText={text => this.setState({ expiryDate: text })}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="CVV"
          value={this.state.cvv}
          onChangeText={text => this.setState({ cvv: text })}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Credit Card Name"
          value={this.state.creditCardName}
          onChangeText={text => this.setState({ creditCardName: text })}
        />
        <Button title="Submit" onPress={this.validateForm} />
      </View>
    );
  }
}

export default MyForm;