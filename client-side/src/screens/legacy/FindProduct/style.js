import { Platform, StyleSheet, Dimensions  } from 'react-native'

const width = Dimensions.get("window").width; //full width

import { ThemeSettings } from '../../../constants';
import Colors from '../../../constants/Colors';
export default StyleSheet.create({
      profilePageStyle:{
        backgroundColor: "#221f3b",
      },
      backgroundImage: {
        flex: 1
      },
      backgroundImage_imageStyle: {},
      bottomLayerFiller: {
        flex: 1
      },

      profileContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: "white",
        borderRadius: 26,
        shadowOpacity: 0.01,
        marginBottom: 1,
        alignSelf: "center",
        padding:20,
        paddingBottom:180,
        paddingTop:70

      },
      pageTitle: {
        color: "black",
        fontSize: 30,
        fontFamily: ThemeSettings.fashionFont,
        fontWeight:'bold',
        textAlign: "left",
        marginTop: 18
      },

      pageSubTitle: {
        color: "black",
        fontSize: 14,
        fontFamily: ThemeSettings.fashionFont,
        fontWeight:'bold',
        textAlign: "left",
        marginTop: 18
      },

      profileIntroduce: {
        color: "black",
        fontSize: 13,
        fontFamily: ThemeSettings.fashionFont,
        textAlign: "left",
        marginTop: 9
      },
      btnLogin: {
        width: '50%',
        height: 49,
        borderRadius: 24,
        borderColor: "rgba(166,166,166,1)",
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

      searchBox: {
          width: '100%'
      },

      searchcontainer: {
          marginTop: 10
      },

      searchview: {
          flexDirection: 'row',
          justifyContent: 'center',
          borderWidth: 0.5,
          borderColor: ThemeSettings.inputPlaceholderColor,
          padding: Platform.OS === 'ios' ? 15 : 10,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          backgroundColor: "rgba(166,166,166,0.2)"
      },

      location: {
          flex: 8,
          justifyContent: 'center',
          alignItems: 'flex-start',
      },

      searchBar: { marginLeft: 10, },

      searchBarText: {
          fontSize: 12,
          fontFamily: ThemeSettings.textFont,
          color: 'black'
      },

      searchIconContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
      },

      deleteIconContainer: {
        justifyContent: 'center',
      },

      questionContainer:{ width:150, height:150, backgroundColor:'red', padding:20, borderRadius:20 },
      questionTitle:{ color:'white', fontSize:14, fontWeight:'bold'},

      slider:{
        marginTop:20
      },

      questionIconContainer:{
        position:'absolute',
        right:20,
        bottom:20,
      },
      questionIcon:{
        color:'white',
        fontSize:40
      },
      highlightItemContainer:{
        marginTop:20,
      }

})