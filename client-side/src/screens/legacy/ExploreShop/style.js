import { Platform, StyleSheet } from 'react-native'
import { ThemeSettings } from '../../../constants';
import Colors from '../../../constants/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
    headline:{
        fontSize:20,
        fontWeight:'bold'

    },

    mainContentContainer: {
        width: '100%',
        borderRadius: 26,
        shadowOpacity: 0.01,
        marginBottom: 1,
        alignSelf: "center",
        padding:20
    },
    appTitle: {
        color: "rgba(255,255,255,1)",
        fontSize: 50,
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
        width: '90%',
        height: 49,
        borderRadius: 24,
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor:'black',
        marginLeft:15,
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
          color:'white'
    },
    btnRegisterTextStyle:{
        color:'white'
    },
    body: {
        backgroundColor: 'white',
        marginTop:-10
    },

    headerimagecontainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 16,
        marginTop: Platform.OS === 'ios' ? 32 : 38,
    },

    titlecontainer: {
        flex: 7,
        alignItems: 'flex-start',
        marginTop: Platform.OS === 'ios' ? 30 : 37,
    },

    toprighttxt: {
        flex: 2,
        alignItems: 'flex-end',
        marginRight: 16,
        marginTop: Platform.OS === 'ios' ? 30 : 37,
    },

    titletxt: {
        fontSize: 16,
        fontFamily: ThemeSettings.textFont,
    },

    codetxt: {
        fontSize: 16,
        fontFamily: ThemeSettings.textFont,
    },

    codecontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: ThemeSettings.buttonBorderColor,
        borderBottomWidth: 0.5,
        paddingBottom: 12
    },

    footercontainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    footerinnercontainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: ThemeSettings.supportingBgColor,
    },

    messagetxt: { 
        textAlign: 'center', 
        fontSize: 15, 
        fontFamily: ThemeSettings.textFont,
    },

    buttoncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: ThemeSettings.buttonBorderColor,
        marginHorizontal: 140,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        backgroundColor: 'white'
    },

    btntxt: {
        fontSize: 15,
        fontFamily: ThemeSettings.buttonFont,
        fontWeight: '200',
    },

    menubuttoncontainer: {
        position: 'absolute',
        marginTop: 35,
        marginLeft: 16
    },

    contentContainer: {
        paddingVertical: 20
      },

      paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    sliderContentContainer: {
        paddingVertical: 10, // for custom animation,
        backgroundColor:'black'
    },
    promotionBannerContainer:{
        backgroundColor:'black',
    },
    loadingDialog:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    loadingStyle:{
        margin:20,
        top:'45%'
      },  
    registerSuccessDialog:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    sucessWordingsContainer:{
        width:'95%',
        height:200,   
        backgroundColor:  '#e3d9d2',
        borderRadius:10,
        margin:10,
        top:'34%',
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
    tncstyle:{  marginLeft:0}
})