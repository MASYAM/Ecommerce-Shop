
import { Platform, StyleSheet } from 'react-native';
import { ThemeSettings } from '../../../constants';
export default StyleSheet.create({
    container: {
        alignItems: "center",
    },
    leftWrap: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 16,
        // marginTop: Platform.OS === 'ios' ? 32 : 38,
    },

    bodyWrap: {
        flex: 7,
        alignItems: 'flex-start',
        // marginTop: Platform.OS === 'ios' ? 30 : 37,
    },

    rightWrap: {
        flex: 2,
        alignItems: 'flex-end',
        marginRight: 16,
        // marginTop: Platform.OS === 'ios' ? 30 : 37,
    },

    bodyTitle: {
        fontSize: 16,
        fontFamily: ThemeSettings.textFont,
    },

    codetxt: {
        fontSize: 16,
        fontFamily: ThemeSettings.textFont,
    },

    codecontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: ThemeSettings.inputPlaceholderColor,
        borderBottomWidth: 0.5,
        paddingBottom: 12
    },

    footercontainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    footerinnercontainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5F4FA'
    },

    messagetxt: { 
        textAlign: 'center', 
        fontSize: 15, 
        fontFamily: ThemeSettings.textFont
    },

    buttoncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: ThemeSettings.buttonBorderColor,
        marginHorizontal: 140,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        backgroundColor: 'white'
    },

    btntxt: {
        fontSize: 15,
        fontFamily: ThemeSettings.buttonFont,
    },

})