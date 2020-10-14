import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../../constants/Colors';
import TitleText from './TitleText';

const Header = props =>{
    return (
        <View style={{
                ...styles.headerBase, 
                ...Platform.select({ 
                    ios:styles.headerIOS, 
                    android: styles.headerAndroid
                })
            }}
        >
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase:{
        width:'100%',
        height: 30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    headerIOS:{
        backgroundColor:  'white',
        borderBottomColor: '#ccc',
        borderBottomWidth:1
    },
    headerAndroid:{
        backgroundColor: Colors.primary,
        borderBottomColor: '#ccc' ,
        borderBottomWidth: 1
    },
    headerTitle:{
        color:'black',
        fontSize: 18,
        fontFamily:'open-sans-bold'

    },
    title:{
        color: Platform.OS === 'ios' ? Colors.primary : 'white'
    }
});

export default Header;