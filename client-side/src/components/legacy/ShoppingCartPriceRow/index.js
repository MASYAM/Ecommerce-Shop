import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome';

import { ThemeSettings } from '../../../constants';

export default class ShoppingCartPriceRow extends React.PureComponent {

    render() {
        return (
            <View style={styles.container}>               
                <View style={styles.boxcontainer}>
                        <View style={styles.justifycontainer}>
                            <View style={styles.innercontainer}>                       
                                <View style={styles.subinnercontainer}>
                                    <View>
                                        <Text style={[styles.txt, { fontWeight: 'bold' }]}>{this.props.title}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        {/* <View style={{ justifyContent: 'center', marginRight: 5 }}>
                                            <Icon size={10} name='user' color={ThemeSettings.placeholderColor} />
                                        </View> */}
                                        <View style={styles.justifycontainer}>
                                            <Text style={[styles.productCondition]}>{this.props.productType}</Text>
                                        </View>                                      
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ justifyContent: 'center', marginTop: 9 }}>
                            <View style={{ marginLeft: 10 }}>
                               <Text style={styles.productPriceStyle}>$USD {this.props.price}</Text>
                                 {/*
                                <Text style={[styles.rightSideTextStyle, { textAlign: 'right' }]}>22222</Text> */}
                            </View>
                        </View>

                        <View style={styles.seperator}>
                        </View>
                </View>
            </View>
        );
    }
}
