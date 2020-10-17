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
      TopLayerFiller: {
        flex: 0
      },

      topLayer: {
        width: '90%',
        backgroundColor: "#b50000",
        borderRadius:20,
        opacity:0.85,
        shadowOpacity: 0.8,
        height: 130,
        marginTop: 65,
        alignSelf: "center"
      },

      bottomLayerFiller: {
        flex: 1
      },

      bottomLayer: {
        width: '90%',
        borderRadius:20,
        shadowOpacity: 0.01,
        height: 216,
        marginTop: 65,
        alignSelf: "center",
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
        width: '100%',
        height: 55,
        borderRadius: 24,
        backgroundColor: "orange",
        opacity:0.85,
        shadowOpacity: 0.8,
      },
      btnRegister: {
        width: '100%',
        height: 55,
        borderRadius: 25,
        backgroundColor:'#000',
        opacity:0.85,
        shadowOpacity: 0.8,
      },
      buttonContainer: {
        height: 49,
        width:'100%',
        flexDirection: "row",
        marginTop: 40,
      },
      btnLoginTextStyle:{
          color:'black',
          fontWeight:"bold"
      },
      btnRegisterTextStyle:{
        color:'white',
        fontWeight:"bold"
      }

})