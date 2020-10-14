import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style'

export default class TutorialCard extends React.PureComponent {

    render() {
        return (
            <View>       
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={styles.titletxt}>{this.props.maintxt}</Text>
                    <Text style={styles.descriptiontxt}>{this.props.description}</Text>
                </View>
                <View style={styles.imagecontainer}>
                    <Image source={this.props.Adimage} style={{ width: 300, height: 300 }} />
                </View>
            </View>
        );
    }
}
