import { Dimensions, Platform } from "react-native";
const width = Dimensions.get("window").width; //full width
import { ThemeSettings, Colors } from '../../../constants';
export default {

    container: {
        flex: 1,
        backgroundColor: '#b50000',
    },
    loadingStyle:{
      margin:20
    },  
    body: {
        flex: 1,
        padding: 40,
        alignItems: "center",
        justifyContent: "center", 
    },
    
    signupButton: {
        width: "100%",
        marginHorizontal: 60,
        justifyContent: 'flex-end',
        marginBottom: 20,
        backgroundColor: Colors.primary,
        borderRadius: 80,
    },
    
    signupButtonText: {
        color: Colors.primary,
    },
    
    loginButton: {
        width: "100%",
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: Colors.supportingColor,
        borderWidth: 1,
        marginHorizontal: 60,
        marginBottom: 20,
        borderRadius: 80
    },
    
    buttonText: {
        textAlign: 'center',
        fontSize: 17,
        color: 'black',
        paddingVertical: 15,
        fontWeight: 'bold',
        fontFamily: ThemeSettings.buttonFont,
    },
    
    footer: {
        flexDirection: 'row',
        marginBottom: 25,
        justifyContent:'center',
        alignItems: 'center',
    },
    
    footertxt: {
        color: 'white',
        fontSize: 12,
        fontFamily: ThemeSettings.textFont,
    },
    
    backgroundImage: {
        flex: 1
    },
    backgroundImage_imageStyle: {},
    bottomLayerFiller: {
      flex: 0
    },
    
    bottomLayer: {
      width: '90%',
      borderRadius:20,
      backgroundColor: "#b50000",
      opacity:1,
      shadowOpacity: 0.02,
      height: 200,
      marginTop: 65,
      alignSelf: "center"
    },
    appTitle: {
      color: "rgba(255,255,255,1)",
      fontSize: 40,
      fontFamily: ThemeSettings.fashionFont,
      textAlign: "center",
      marginTop: 18
    },
    moto: {
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      fontFamily: ThemeSettings.fashionFont,
      textAlign: "center",
      marginTop: 9
    },
    btnLogin: {
      width: '50%',
      height: 49,
      borderRadius: 24,
      borderColor: "rgba(255,239,239,1)",
      borderWidth: 3,
    },
    btnRegister: {
      width: '50%',
      height: 49,
      borderRadius: 25,
      marginLeft: 12,
      backgroundColor:ThemeSettings.mainColor 
    },
    buttonContainer: {
      height: 49,
      width:'100%',
      flexDirection: "row",
      marginTop: 57,
      paddingLeft:10,
      paddingRight:20
    },
    btnLoginTextStyle:{
        color:'black'
    },
    btnRegisterTextStyle:{
      color:'white'
  
    }
}