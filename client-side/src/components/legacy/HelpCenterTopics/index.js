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

export default class HelpCenterTopics extends React.PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.boxcontainer}>
                        <View style={styles.justifycontainer}>
                            <View style={styles.innercontainer}>
                                <View style={styles.justifycontainer}>
                                    <Image style={{ width: 30, height: 30 }} source={this.props.carimage} />
                                </View>
                                <View style={styles.subinnercontainer}>
                                    <View>
                                        <Text style={[styles.txt, { fontWeight: 'bold' }]}>{this.props.mainTextLabel}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        {/* <View style={{ justifyContent: 'center', marginRight: 5 }}>
                                            <Icon size={10} name='user' color={ThemeSettings.placeholderColor} />
                                        </View> */}
                                        <View style={styles.justifycontainer}>
                                            <Text style={[styles.txt1, { color: ThemeSettings.placeholderColor }]}>{this.props.subTitleText}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>       
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
