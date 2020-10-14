import { ThemeSettings } from '../../../constants';
export default {

    imagecontainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15
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
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 60
    },

    collectionItem:{
        flex:1,
        width:140,
        height:200,
        marginLeft:10,
        marginRight:10
    },

    productInfoContainer:{
        position: 'absolute', 
         marginTop: 140, 
         marginLeft: -20,
         padding:20,
    },

    productName: {
        textAlign: 'left',
        fontSize: 15,
        fontWeight:'bold',
        fontFamily: ThemeSettings.textAlign,
        color: 'black'
    },
    productPrice: {
        textAlign: 'left',
        paddingTop: 5,
        fontSize: 12,
        fontFamily: ThemeSettings.textAlign,
        color: 'black'
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

    newItemStyle:{
        position: 'absolute', 
        left:0,
        bottom:50,
        width: 50,
        height: 15,
        borderRadius: 24,
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor:'white',
        marginLeft:0,
        textAlign:'center'
    },

    newItemTextStyle:{
        fontSize:10,
        marginTop:-1,
        textAlign:'center',
        color:'black',
        width: 45,
        height: 20,
    }
}