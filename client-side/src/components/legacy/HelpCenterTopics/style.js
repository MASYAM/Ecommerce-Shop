import { ThemeSettings } from '../../../constants';
export default {

    container: {
        marginHorizontal: 16,
        backgroundColor: 'white',
        marginTop: 15
    },

    boxcontainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        borderColor: ThemeSettings.secondaryColor,
    },

    justifycontainer: {
        justifyContent: 'center',
        marginRight:20
    },

    innercontainer: {
        flexDirection: 'row',
        marginTop: 10
    },

    subinnercontainer: {
        justifyContent: 'center',
        marginVertical: 4,
        marginLeft: 5
    },

    txt1: {
        fontSize: 12,
        fontFamily: ThemeSettings.textFont,
        color: ThemeSettings.secondaryColor
    },

    txt: {
        fontSize: 15,
        fontFamily: ThemeSettings.textFont,
    }
}