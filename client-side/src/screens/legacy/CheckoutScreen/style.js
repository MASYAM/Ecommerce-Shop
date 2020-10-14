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

    subtitleStyle:{
        fontSize:18,
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

    registerSuccessDialog:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    sucessWordingsContainer:{
        width:'95%',
        height:260,   
        backgroundColor:  '#e3d9d2',
        borderRadius:10,
        margin:10,
        top:'34%',
        padding:20
    },
    sucessHeading:{
        fontSize:30,
        color:'green',
        width:'95%',
        textAlign:'center',
        margin:20,
        fontWeight:'bold',
    },
    errorHeading:{
        fontSize:30,
        color:'red',
        width:'95%',
        textAlign:'center',
        margin:20,
        fontWeight:'bold',
    },
    sucessDescription:{
        fontSize:14,
        color:'black',
        width:'95%',
        textAlign:'center',
        margin:5,
        fontWeight:'bold',
    },
    btnLogonNow: {
        width: '90%',
        height: 49,
        borderRadius: 24,
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor:'black',
        marginLeft:20,
        marginTop:30
  
      },
      btnLogonNowTextStyle:{
        color:'white'
    },
}