import { ThemeSettings } from '../../../constants';
export default {


    slideContainer:{
        backgroundColor:'black'
    },
    imagecontainer: {
        alignItems: 'center',
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
    },


    blackLayer:{
        position: 'absolute', 
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        width:'100%',
        height:'100%'
    },

    promotionWordingsStyle:{
        position: 'absolute', 
         marginTop: 110, 
         marginLeft: 2,
         padding:20,
    },



    firstTextStyle: {
        textAlign: 'left',
        paddingTop: 15,
        fontSize: 15,
        fontFamily: ThemeSettings.textAlign,
        color: 'white'
    },

    firstLineStyle:{
        width:40,
        height:2,
        backgroundColor:'white',
        borderRadius:10,
        marginTop:10,
        fontWeight:'light'

    },

    secondTextStyle: {
        textAlign: 'left',
        fontSize: 50,
        fontFamily: ThemeSettings.buttonFont,
        fontWeight: '800',
        color:'white',
        marginTop: 10, 

    },

    thirdTextStyle: {
        textAlign: 'left',
        fontSize: 13,
        fontFamily: ThemeSettings.buttonFont,
        fontWeight: '800',
        color:'white',
        marginTop: 0, 

    },


    btnGoShopping:{
        position: 'absolute', 
        right:10,
        bottom:50,
        width: 100,
        height: 30,
        borderRadius: 24,
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor:'black',
        marginLeft:15,
    },
    btnGoShoppingTextStyle:{
        fontSize:10,
        color:'white'
    }
}