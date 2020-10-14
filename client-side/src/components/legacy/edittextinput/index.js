import React from 'react';
import {
    View,
    TextInput,
} from 'react-native';
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome';

import { ThemeSettings } from '../../../constants';

export default class Edittextinput extends React.Component {

    render() {
        return (
            <View style={styles.textcontainer}>
                <View style={styles.iconcontainer}>
                    <Icon size={20} name={this.props.iconname} />
                </View>
                <View style={styles.textinputname}>
                    <TextInput style={styles.textinputtxt} placeholder={this.props.placeholder} placeholderTextColor={ThemeSettings.inputPlaceholderColor}>{this.props.placeholdertxt}</TextInput>
                </View>
            </View>
        );
    }
}
