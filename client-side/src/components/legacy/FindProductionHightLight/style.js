import { ThemeSettings } from '../../../constants';
export default {

    mainContainer:{
        width:'100%',
        height:250,
        borderRadius:10,
        marginBottom:10,
        backgroundColor:'yellow'
    },

    imagecontainer: {
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 15,
        borderRadius:10,

    },

    mainImageStyle:{ 
        width: '100%', 
        height: 250 ,
        borderRadius:10
    },

    blackLayer:{
        position: 'absolute', 
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        width:'100%',
        height:250,
        borderRadius:10,
        marginBottom:10
    },

    promotionWordingsStyle:{
        position: 'absolute', 
         marginLeft: 2,
         padding:20,
         marginTop:70,
         width:'100%'
    },

    firstTextStyle: {
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 24,
        fontFamily: ThemeSettings.textAlign,
        color: 'white',
        fontWeight:'bold'
    },

    secondTextStyle: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: ThemeSettings.buttonFont,
        fontWeight: '800',
        color:'white',
        marginTop: 10, 

    },

    thirdTextStyle: {
        textAlign: 'center',
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