import { Platform, StyleSheet } from 'react-native'
import { ThemeSettings } from '../../../constants';
import Colors from '../../../constants/Colors';
export default StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#b50000',
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
        flex: 1
      },

      bottomLayer: {
        width: '100%',
        backgroundColor: "#b50000",
        shadowOpacity: 0.01,
        height: 316,
        marginBottom: 1,
        alignSelf: "center"
      },
      appTitle: {
        color: "rgba(255,255,255,1)",
        fontSize: 45,
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
        backgroundColor: "orange"
      },
      btnRegister: {
        width: '50%',
        height: 49,
        borderRadius: 25,
        marginLeft: 10,
        backgroundColor:'black'
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

})