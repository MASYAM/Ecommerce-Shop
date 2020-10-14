import { Platform } from 'react-native'
import { ThemeSettings } from '../../../constants';
export default {

    header: {
        flexDirection: 'row',
        marginBottom: 10,
        borderBottomColor: ThemeSettings.buttonBorderColor,
        borderBottomWidth: 0.5,
        paddingBottom: 15
    },

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    headerimagecontainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 16,
        marginTop: Platform.OS === 'ios' ? 32 : 38,
    },

    titlecontainer: {
        flex: 7,
        alignItems: 'flex-start',
        marginTop: Platform.OS === 'ios' ? 30 : 37,
    },

    titletxt: {
        fontSize: 15,
        fontFamily: ThemeSettings.textFont,
        fontWeight: "bold",
    },

    toprighttxt: {
        flex: 2,
        alignItems: 'flex-end',
        marginRight: 16,
        marginTop: Platform.OS === 'ios' ? 30 : 37,
    },

    textinputcontainer: {
        paddingBottom: 5,
        marginTop: 15,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    iconcontainer: {
        flex: 1,
        justifyContent: 'center'
    },

    firsttextinput: {
        flex: 8,
        justifyContent: 'center'
    },

    textinput1: {
        flex: 6,
        borderBottomColor: ThemeSettings.inputPlaceholderColor,
        borderBottomWidth: 0.5,
        marginRight: 15,
        paddingBottom: Platform.OS === 'ios' ? 5 : 0,
    },

    textinput2: {
        flex: 2,
        borderBottomColor: ThemeSettings.inputPlaceholderColor,
        borderBottomWidth: 0.5,
    },

    flagcontainer: {
        flexDirection: 'row',
        flex: 1,
        borderBottomColor: ThemeSettings.inputPlaceholderColor,
        borderBottomWidth: 0.5,
        paddingBottom: Platform.OS === 'ios' ? 5 : 0,
    },

    flag: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    arrowdown: {
        justifyContent: 'center',
        marginTop: 2,
        marginLeft: 5
    },

    paycontainer: {
        marginVertical: 15,
    },

    paytxt: {
        fontSize: 12,
        fontFamily: ThemeSettings.textFont,
        textAlign: 'center'
    },

    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    button: {
        borderWidth: 0.5,
        borderColor: ThemeSettings.buttonBorderColor,
        borderRadius: 3,
        paddingVertical: 5,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },

    footercontainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 15
    },

    footerview: { flexDirection: 'row' },

    footertxt: {
        justifyContent: 'center',
        fontSize: 12,
        fontFamily: ThemeSettings.textFont,
        fontWeight: '200',
        marginLeft: 3,
        fontStyle: 'italic',
    }
}