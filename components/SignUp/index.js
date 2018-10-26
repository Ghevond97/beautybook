import React, { Component } from 'react';
import { View } from 'react-native';
import CountryCodePicker from "../CountryCodePicker";

class SignUp extends Component {
  render() {
    return (
      <View>
        <CountryCodePicker/>
      </View>
    );
  }
}

export default SignUp;
