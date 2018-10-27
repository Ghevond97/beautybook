import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input';
import ModalPicker from '../ModalPickerImage';

import styles from './style';
import phoneNumberValidator from "../../validation/PhoneNumValidation";

class CountryCodePicker extends Component {
  constructor() {
    super();

    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      pickerData: null,
      text: ''
    };
  }

  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData()
    });
  }

  onSubmit() {
    phoneNumberValidator(this.state.text);
  }

  onPressFlag() {
    this.myCountryPicker.open();
  }

  selectCountry(country) {
    this.phone.selectCountry(country.iso2);
  }

  render() {
    return (
      <View style={styles.container}>
        <PhoneInput
          ref={ref => {
            this.phone = ref;
          }}
          onChangePhoneNumber={number => {
            this.setState({ text: number });
          }}
          onPressFlag={this.onPressFlag}
        />
        <ModalPicker
          ref={ref => {
            this.myCountryPicker = ref;
          }}
          data={this.state.pickerData}
          onChange={country => {
            this.selectCountry(country);
          }}
          cancelText="Cancel"
        />
        <Button onPress={this.onSubmit} title="REGISTER" />
      </View>
    );
  }
}

export default CountryCodePicker;
