import { ThemeSettings } from '../../../constants';
export default {

    container: {
        backgroundColor: 'white',
    },

    boxcontainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        borderColor: ThemeSettings.secondaryColor,

    },

    justifycontainer: {
        justifyContent: 'center'
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
    },


    companyNameStyle: {
        fontSize: 20,
        fontWeight:'bold',
        fontFamily: ThemeSettings.textFont,
        textAlign:'right'
    },
    priceAdditionalInfoStyle: {
        fontSize: 12,
        fontFamily: ThemeSettings.textFont,
        color: 'rgba(52, 52, 52, 0.5)',
        textAlign:'right'

    },
    checkboxProfielContainer:{
        flexDirection:'row',
        padding:0,
        margin:0
    },
    checkbox_children: {
        justifyContent: 'center',
        width: 30,   
        marginRight:10,
        color:'#fff',
    },
    children: {
        justifyContent: 'center',
        width: 50,       
        color:'#fff',
    },

}