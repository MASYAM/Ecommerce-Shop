import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Container } from 'native-base';
import styles from './style'
import { ThemeSettings, ImageSources, ScreenNames } from '../../../constants';
import Textinput from '../../../components/legacy/edittextinput'
import { CloseButton } from '../../../components/StandardButtons';

import { Input } from 'react-native-elements';



export default class CheckoutAddressRow extends React.PureComponent {

    render() {
        return (
            <View>               
                <Text style={styles.inputTitleStyle}>Your name</Text>
                        <Input
                         style={styles.inputStyle}
                         placeholder='Your Name'
                        />

                        <Text style={styles.inputTitleStyle}>Address Line 1</Text>
                        <Input
                         style={styles.inputStyle}
                         placeholder='Address Line 1'
                        />
                          <Text style={styles.inputTitleStyle}>Address Line 2</Text>
                        <Input
                         style={styles.inputStyle}
                         placeholder='Address Line 2'
                        />
 

                        <Text style={styles.inputTitleStyle}>City</Text>
                        <Input
                         style={styles.inputStyle}
                         placeholder='City'
                        />
 


                        <Text style={styles.inputTitleStyle}>Zip</Text>
                        <Input
                         style={styles.inputStyle}
                        placeholder='Zip'
                        />


                        <Text style={styles.inputTitleStyle}>State</Text>
                        <Input
                         style={styles.inputStyle}
                         placeholder='State'
                        />
 
                        <Text style={styles.inputTitleStyle}>Country</Text>
                        <Input
                         style={styles.inputStyle}
                         placeholder='Country'
                        />

            </View>
        );
    }
}
