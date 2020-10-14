import React from 'react';
import { View,  Image, TouchableOpacity } from 'react-native';
import styles from './style'
import { Drawer,Container, Content, Button, Text, Footer, Title, } from 'native-base'

export default class ClothesDetailSlide extends React.PureComponent {

    render() {
        return (
            <View style={styles.slideContainer}>
 
                <View style={styles.imagecontainer}>
                    <Image source={{ uri: this.props.Adimage}} style={{ width: '100%', height: '100%' }} />
                </View>
                {/* <View style={styles.blackLayer}>
                </View>  */}

            </View>
        );
    }
}
