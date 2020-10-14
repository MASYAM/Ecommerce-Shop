import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Platform
} from 'react-native';
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from 'native-base';
import { Actions } from "react-native-router-flux";
import { ThemeSettings, Colors, ImageSources, ScreenNames } from '../../../constants';
import { BackButton } from "../../../components/StandardButtons";

export default class CheckoutPaymentRow extends React.PureComponent {

    render() {
        return (
            <View>
                
              <View style={[styles.textinputcontainer, { borderBottomColor: ThemeSettings.inputPlaceholderColor, borderBottomWidth: 0.5 }]}>
                  <View style={styles.iconcontainer}>
                    <Icon size={20} name='credit-card' />
                  </View>
                  <View style={styles.firsttextinput}>
                    <TextInput placeholder='Credit card number' placeholderTextColor={ThemeSettings.inputPlaceholderColor} style={{ fontSize: 15 }} />
                  </View>
                  <View style={[styles.iconcontainer, { alignItems: 'flex-end' }]}>
                    <TouchableOpacity>
                      <Icon size={17} name='camera' />
                    </TouchableOpacity>
                  </View>
              </View>

              <View style={styles.textinputcontainer}>
                  <View style={styles.textinput1}>
                    <TextInput placeholder='MM/YY' placeholderTextColor={ThemeSettings.inputPlaceholderColor} style={{ fontSize: 15 }}></TextInput>
                  </View>
                  <View style={styles.textinput2}>
                    <TextInput placeholder='CVV' placeholderTextColor={ThemeSettings.inputPlaceholderColor} style={{ fontSize: 15 }}></TextInput>
                  </View>
                  <View style={styles.flagcontainer}>
                    <View style={styles.arrowdown}>
                      <Image source={ImageSources.DownArrow} style={{ width: 10, height: 10 }} />
                    </View>
                  </View>
              </View>

              <View style={styles.paycontainer}>
                <Text style={styles.paytxt}>Or pay with</Text>
              </View>

              <View style={styles.buttoncontainer}>
                <View style={[styles.button, { paddingHorizontal: 40 }]}>
                  <TouchableOpacity>
                    <Image source={ImageSources.GPay} style={{ width: 40, height: 25 }} />
                  </TouchableOpacity>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity>
                    <Image source={ImageSources.Paypal} style={{ width: 80, height: 20 }} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.footercontainer}>
                <View style={styles.footerview}>
                  <Icon size={10} name='lock' style={{ marginTop: 4 }} />
                  <Text style={styles.footertxt}> Your payment info will be stored securely</Text>
                </View>
              </View>

            </View>
        );
    }
}
