import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome';

import { ThemeSettings, Colors } from '../../../constants';

export default class InobxMessageItem extends React.PureComponent {

    render() {
        return (
            <TouchableOpacity  onPress={() => this.props.onPressViewDetail(this.props.id)}>
                <View style={styles.container}>
                    <View style={styles.boxcontainer}>

                        <View style={styles.messageIconBox}>
                            <Icon color={Colors.primary} size={25} name={this.props.icon} />
                        </View>

                        <View style={styles.middleContentBox} >
                            <View style={styles.innercontainer}>
                                <View style={styles.subinnercontainer}>
                                    <View>
                                        <Text style={[styles.messageTitle, { fontWeight: 'bold' }]}>{this.props.title}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        {/* <View style={{ justifyContent: 'center', marginRight: 5 }}>
                                            <Icon size={10} name='user' color={ThemeSettings.placeholderColor} />
                                        </View> */}
                                        <View style={styles.subTitleCntainer}>
                                            <Text style={[styles.productCondition]}>{this.props.subTitle}</Text>
                                        </View>                                       
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        {/* <View style={{ justifyContent: 'center', marginRight: 5 }}>
                                            <Icon size={10} name='user' color={ThemeSettings.placeholderColor} />
                                        </View> */}
                                        <View style={styles.justifycontainer}>
                                            <Text style={styles.messageDate}>{this.props.createDateTime}</Text>
                                        </View>                                       
                                    </View>                                  
                                </View>
                            </View>
                        </View>
            

                        {this.props.isRead ?
                            <View> </View>
                            :
                            <View style={{ justifyContent: 'center', marginTop: 9 }}>
                                <View style={{ marginLeft: 0 }}>
                                    <Text style={styles.productPriceStyle}><Icon color={Colors.primary} size={10} name={'circle'} /></Text>
                                </View>
                            </View>
                        }

                        <View style={styles.seperator}>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
