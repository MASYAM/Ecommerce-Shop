import React from 'react';
import { View,  Image, TouchableOpacity } from 'react-native';
import styles from './style'
import { Drawer,Container, Content, Button, Text, Footer, Title, } from 'native-base'

export default class PomortionSlideItem extends React.PureComponent {

    render() {
        return (
            <View >
                <View style={styles.imagecontainer}>
                    <Image  source={{ uri: this.props.Adimage  }}
                    style={{ width: '100%', height: 340 }} />
                </View>
                <View style={styles.blackLayer}>
                </View> 

                <View style={styles.promotionWordingsStyle}>
                    <Text style={styles.firstTextStyle}>{this.props.firstText}</Text>
                    <View style={styles.firstLineStyle}></View>
                    <Text style={styles.secondTextStyle}>{this.props.secondText}</Text>
                    <Text style={styles.thirdTextStyle}>{this.props.thirdText}</Text>
                </View> 

                <Button transparent full  style={styles.btnGoShopping} onPress={this.props.onPress}>
                    <Text style={styles.btnGoShoppingTextStyle} large>Explore</Text>
                </Button>
            </View>
        );
    }
}
