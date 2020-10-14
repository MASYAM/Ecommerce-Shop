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
import { CheckBox} from 'native-base';

export default class CheckoutShippingRow extends React.PureComponent {

    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.boxcontainer}>
                        <View style={styles.justifycontainer}>
                            
                            <View style={styles.innercontainer}>
                                <View style={styles.checkboxProfielContainer}>
                                    <View  style={styles.checkbox_children}>
                                         <CheckBox  color="green"/>
                                    </View>
                                    <View style={styles.children}>
                                            <Image style={{ width: 60, height: 60 }} source={this.props.image} />
                                    </View>
                                </View>

                                <View style={styles.subinnercontainer}>
                                    <View>
                                        <Text style={[styles.txt, { fontWeight: 'bold' }]}>{this.props.cartype}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        {/* <View style={{ justifyContent: 'center', marginRight: 5 }}>
                                            <Icon size={10} name='user' color={ThemeSettings.placeholderColor} />
                                        </View> */}
                                        <View style={styles.justifycontainer}>
                                            <Text style={[styles.txt1, { color: ThemeSettings.placeholderColor }]}>{this.props.availablepersons}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ justifyContent: 'center', marginTop: 9 }}>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.companyNameStyle}>{this.props.company}</Text>
                                <Text style={[styles.priceAdditionalInfoStyle, { textAlign: 'right' }]}>{this.props.priceInfo}</Text>
                            </View>
                        </View>
                    </View>

            </View>
        );
    }
}
