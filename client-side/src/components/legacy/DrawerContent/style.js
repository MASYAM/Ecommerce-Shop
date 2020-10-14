import {  StyleSheet } from 'react-native';
import { ThemeSettings } from '../../../constants';
import Colors from '../../../constants/Colors';
export default StyleSheet.create({

    container: {backgroundColor: Colors.primary },
    userProfileContainer: {
        backgroundColor:'red',
        marginTop:-50,
        height:350,
    },

    userProfileWrap: {
        paddingTop:100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    userProfilePicWrap: {
        width: 70,
        position: "relative",
        alignItems: 'center',
        justifyContent: 'center',
    },

    userImage: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    cameraButton: {
        position: 'absolute',
        right: -2,
        bottom: -2,
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryInverse,
    },

    cameraIcon: {color: Colors.primary, fontSize:14},

    usernameWrap: {
        marginVertical: 10,
    },

    usernameText: {
        textAlign: 'center',
        fontFamily: ThemeSettings.textFont,
        fontWeight: "bold",
        fontSize: 18,
        color: Colors.primaryInverse,
    },

    usernameSubtext: {
        textAlign: 'center',
        fontFamily: ThemeSettings.textFont,
        fontSize: 12,
        color: Colors.secondary,
        paddingVertical: 5,
        color: Colors.primaryInverse,
    },

    backgroundImage: {
        flex:1
      },
      backgroundImage_imageStyle: {},
})