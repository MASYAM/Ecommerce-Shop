import { Platform } from 'react-native'
import { ThemeSettings } from '../../../constants';
export default {

    textcontainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 25
    },

    iconcontainer: {
        justifyContent: 'center',
        paddingLeft: 3,
        flex:1
    },

    textinputname: {
        justifyContent: 'center',
        borderBottomColor: ThemeSettings.inputPlaceholderColor,
        borderBottomWidth: 0.5,
        flex: 9
    },

    textinputtxt: {
        fontSize: 15,
        fontFamily: ThemeSettings.inputFont,
        fontStyle: 'italic',
    }
}