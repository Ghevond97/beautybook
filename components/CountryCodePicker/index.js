import React, { Component } from 'react';
import { View } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import ModalPicker from '../ModalPickerImage';

import styles from './style';

class CountryCodePicker extends Component {
  constructor() {
    super();

    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.state = {
      pickerData: null
    };
  }

  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData()
    });
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
      </View>
    );
  }
}

export default CountryCodePicker;
