import { Dimensions, Platform } from "react-native";
const width = Dimensions.get("window").width; //full width
import { ThemeSettings } from '../../../constants';
export default {

    shoppingCartContainer:{
        width:'100%',
        padding:20,
        paddingTop:0
    },
    titleContainer:{
        width:'100%',
        height:50,
        paddingVertical:10,
    },
    titleStyle:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'left',
        color:'black'
    },

    btnShoppingCart: {
        width: '90%',
        height: 49,
        borderRadius: 24,
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor:'black',
        marginLeft:15,
        marginTop:30
      },
      btnShoppingCartText:{
          color:'white'
      },
      shoppingIcon:{
          color:'white',
      },
      shopIconContainer:{
        paddingRight:10,
        
      },
      menubuttoncontainer: {
        position: 'absolute',
        marginTop: 35,
        marginLeft: 16
      },
      pageTitle: {
        color: "black",
        fontSize: 20,
        fontFamily: ThemeSettings.fashionFont,
        fontWeight:'bold',
        textAlign: "left",
        marginTop: 10,
        marginBottom:20
      },
}