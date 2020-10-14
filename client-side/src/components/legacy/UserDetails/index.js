import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style'

export default class UserDetails extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconcontainer}>
                    <Icon name={this.props.iconname} size={17} />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.texttxt}>{this.props.text}</Text>
                </View>
            </View>
        );
    }
}
