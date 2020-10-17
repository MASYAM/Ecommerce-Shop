import { Platform } from 'react-native'
import { ThemeSettings } from '../../../constants';
export default {

    body: {
        padding: 20,
        paddingTop:0,
        marginTop:-25
    },

    descWrap: {
        marginTop: 20,
        marginHorizontal: 30,
    },

    txt: {
        fontSize: 30,
        fontFamily: ThemeSettings.buttonFont,
        fontWeight: "bold",
        color:'white',
        textAlign:'center'
    },

    formInputContainer:{
        backgroundColor:'white',
        borderRadius:10,
        width:'100%',
        padding:20,
        margin:5,
        marginTop:20

    },

    inputHeader: {
        fontSize: 10,
        fontFamily: ThemeSettings.buttonFont,
        fontWeight: "bold",
        color:'grey',
        marginLeft:10,
        marginTop:0

    },
    inputStyle:{
        fontSize: 10,
    },

    formRow: {
        flex:1 ,
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 30,
        width:'100%'
    },

    textinputtxt: {
        fontSize: 20,
    },

    buttoncontainer: {
        marginHorizontal: 30,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },

    button: {
        backgroundColor: 'black'
    },

    inputWrap: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: ThemeSettings.inputPlaceholderColor,
        padding: 10,
        borderRadius: 5,
    },

    formRow: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 35,
        marginBottom: 20,
    },

    flagcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5
    },

    downarrow: {
        justifyContent: 'center',
        marginLeft: 3,
        marginRight: 15,
    },

    countrycode: {
        justifyContent: 'center',
        marginRight:8,
    },

    countrycodetxt: {
        fontFamily: ThemeSettings.textFont,
        fontSize: 20
    },
    textInput: {
        color: 'black',
        fontSize: 20,
    },

    footercontainer: {
        marginVertical: 25,
    },

    footertxt: {
        fontSize: 13,
        color: ThemeSettings.primaryColor,
        textAlign: 'center'
        
    },
    backgroundImage: {
        flex: 1,
        opacity: 0.1
    },
    backgroundImage_imageStyle: {},
    registerBackgroundStyle:{
        backgroundColor:  '#039BE5'
    },


    bottomLayerFiller:{
        marginTop:30
    },

    btnLogin: {
    width: '90%',
    height: 49,
    borderRadius: 24,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor:'black',
    marginLeft:15,
    marginBottom:20
    },

    btnLoginFacebook: {
    width: '90%',
    height: 49,
    borderRadius: 24,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor:'white',
    marginLeft:15,
    marginBottom:20
    },
    btnLoginTextStyle:{
        color:'white'
    },
    btnLoginfacebookTextStyle:{
        color:'black'
    },

    menubuttoncontainer: {
        position: 'absolute',
        top: 0,
        marginLeft: 16,
        marginTop: 50,
    },
    textInputStyle:{
        fontSize:20,
        paddingLeft:12,
        paddingBottom:12,
        marginTop:20,
        marginBottom:20,
        borderBottomColor: "rgba(0,0,0,0.3)",
        borderBottomWidth: 1
        
    },
    btnLoginTextStyle:{
        color:'white'
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
        backgroundColor:  'white',
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
    tncstyle:{  
        marginLeft:20
    }
}