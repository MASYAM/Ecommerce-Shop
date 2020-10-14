import React from 'react';
import { View,  Image, TouchableOpacity } from 'react-native';
import styles from './style'
import { Drawer,Container, Content, Button, Text, Footer, Title, } from 'native-base'

export default class CollectionListingItemStyleOne extends React.PureComponent {

    render() {
        return (
            <TouchableOpacity  onPress={() => this.props.onPress(this.props.productId)}>

                <View style={styles.collectionItem}>
    
                    <View style={styles.imagecontainer}>
                        <Image  source={{ uri: this.props.Adimage  }} 
                        style={{ width: 150, height: 150 , borderRadius:10}} /> 
                    </View>
            
                    <View style={styles.productInfoContainer}>
                        <Text numberOfLines={1}  style={styles.productName}>{this.props.name}</Text>
                        <Text numberOfLines={1}  style={styles.productPrice}>${this.props.price}</Text>
                    </View> 

                    { this.props.isNewArrive  ? (
                    <View   style={styles.newItemStyle} onPress={this.doStart}>
                    <Text style={styles.newItemTextStyle} large>New</Text> 
                        </View>
                    ) : null}

                </View>
                
            </TouchableOpacity>
        );
    }
}
