import { ThemeSettings } from '../../../constants';
export default {

    imagecontainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15
    },

    titletxt: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: ThemeSettings.buttonFont,
        fontWeight: '800',
        color:'white'
    },

    descriptiontxt: {
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 15,
        fontFamily: ThemeSettings.textAlign,
        color: ThemeSettings.descriptionColor,
    },

    buttontxt: {
        fontSize: 15,
        fontFamily: ThemeSettings.textFont,
    },

    button: {
        borderWidth: 0.5,
        borderRadius: 3,
        paddingHorizontal: 40,
        paddingVertical: 8,
        borderColor: ThemeSettings.buttonBorderColor
    },

    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 60
    }
}