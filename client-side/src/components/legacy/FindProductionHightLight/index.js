import React from 'react';
import { View,  Image, TouchableOpacity } from 'react-native';
import styles from './style'
import { Drawer,Container, Content, Button, Text, Footer, Title, } from 'native-base'

export default class FindProductionHightLight extends React.PureComponent {

    render() {
        return (
            <TouchableOpacity  onPress={() => this.props.onPress(this.props.productId)}>
                <View style={styles.mainContainer} > 
                    <View style={styles.imagecontainer}>
                        <Image source={{uri: this.props.Adimage}} style={styles.mainImageStyle} />
                    </View>
                    <View style={styles.blackLayer}>
                    </View> 

                    <View style={styles.promotionWordingsStyle}>
                        <Text style={styles.firstTextStyle}>{this.props.firstText}</Text>
                        <Text style={styles.secondTextStyle}>{this.props.secondText}</Text>
                    </View> 
                </View>
            </TouchableOpacity>
        );
    }
}
