import React from 'react';
import { View,  Image, TouchableOpacity } from 'react-native';
import styles from './style'
import { Drawer,Container, Content, Button, Text, Footer, Title, } from 'native-base'

export default class PomortionSlideItemStyleTwo extends React.PureComponent {

    render() {
        return (
            <View >
                <View style={styles.imagecontainer}>
                    <Image source={this.props.Adimage} style={{ width: '100%', height: 250 }} />
                </View>
                <View style={styles.blackLayer}>
                </View> 

                <View style={styles.promotionWordingsStyle}>
                    <Text style={styles.hightlighTextStyle}>{this.props.firstText}</Text>
                    <Text style={styles.subTextStyle}>{this.props.secondText}</Text>
                </View>   
            </View>
        );
    }
}
