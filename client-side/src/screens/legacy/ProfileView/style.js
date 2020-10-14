import { Platform, StyleSheet } from 'react-native'
import { ThemeSettings } from '../../../constants';
import Colors from '../../../constants/Colors';
export default StyleSheet.create({
      profilePageStyle:{
         backgroundColor: "rgba(192,169,111,0.71)",

      },
      backgroundImage: {
         flex: 1
      },
      backgroundImage_imageStyle: {},
      bottomLayerFiller: {
         flex: 1
      },

      profileContainer: {
        width: '90%',
        height: '100%',
        marginTop:60,
        backgroundColor: "white",
        borderRadius: 26,
        shadowOpacity: 0.01,
        marginBottom: 1,
        alignSelf: "center",
        padding:20,
        paddingTop:80,
        paddingBottom:180
      },
      profileName: {
        color: "black",
        fontSize: 20,
        fontFamily: ThemeSettings.fashionFont,
        fontWeight:'bold',
        textAlign: "center",
        marginTop: 30
      },
      profileIntroduce: {
        color: "black",
        fontSize: 13,
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
        color:'black'

      },
      userProfilePicWrap: {
        width: '100%',
        height:120,
        marginTop:100,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
      },

      headertxt:{
          color:'white'
      },

      userImage: {
          width: 120,
          height: 120,
          borderRadius: 5,
      },
      menubuttoncontainer: {
          position: 'absolute',
          marginTop: 35,
          marginLeft: 16
      },
})