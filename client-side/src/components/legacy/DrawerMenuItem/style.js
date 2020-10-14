import { Platform } from 'react-native';
import {  ThemeSettings } from "../../../constants";
export default {

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 20,
        marginVertical: 15,
    },

    iconcontainer: {
        flex: 1.5,
        justifyContent: 'center',
    },

    titlecontainer: {
        flex: 6.5,
        justifyContent: 'center'
    },

    notificationcontainer: {
        flex: 2,
        justifyContent: 'center'
    },

    titletxt: {
        fontFamily: ThemeSettings.textFont,
        fontSize: 15
    },
    notificationRedAlert: {
        position: 'absolute',
        right: -2,
        bottom: -2,
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        marginRight:10,
    },
    alertTextStyle:{
        color:'white'
    }

}