import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style'
import Colors from '../../../constants/Colors';

type DrawerMenuItemProps = {
    icon: string,
    title: string,
    notification: Number,
    onPress?: () => void,
}

export const DrawerMenuItem: React.FC<DrawerMenuItemProps> = (props: DrawerMenuItemProps) => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                <View style={styles.iconcontainer}>
                    <Icon size={17} color={Colors.primary} name={props.icon} />
                </View>
                <View style={styles.titlecontainer}>
                    <Text style={styles.titletxt}>{props.title}</Text>
                </View>

                <View style={styles.notificationcontainer}>

                    { props.notification > 0  ? (
                        <View style={styles.notificationRedAlert}>
                            <Text style={styles.alertTextStyle}>{props.notification}</Text>
                        </View>
                    ) : null}

                </View>
            </View>
        </TouchableOpacity>
    );
}
