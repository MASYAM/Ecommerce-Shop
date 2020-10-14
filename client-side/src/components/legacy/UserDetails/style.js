import { Platform } from 'react-native'
import { ThemeSettings } from '../../../constants';
export default {

    container: {
        flexDirection: 'row',
        marginHorizontal: 16,
        paddingVertical: 5
    },

    iconcontainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textcontainer: {
        flex: 9,
        justifyContent: 'center'
    },

    texttxt: {
        fontSize: 15,
        fontFamily: ThemeSettings.textFont,
    }
}