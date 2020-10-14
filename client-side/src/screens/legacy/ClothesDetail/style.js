import { Dimensions, Platform } from "react-native";
const width = Dimensions.get("window").width; //full width
import { ThemeSettings } from '../../../constants';
export default {

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    mapContainer: {
        width: '100%',
        height: 300
    },

    menubuttoncontainer: {
        position: 'absolute',
        top: 0,
        marginLeft: 16,
        marginTop: 50,
    },

    menucontainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10
    },

    searchBox: {
        top: 0,
        position: "absolute",
        width: width
    },

    searchBoxview: {
        marginHorizontal: 16,
    },

    searchBoxinnerview: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: ThemeSettings.inputPlaceholderColor,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },

    pickuplocation: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    locationtxt: {
        fontSize: 12,
        fontFamily: ThemeSettings.inputFont
    },

    directionarrow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 5
    },

    droplocation: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },


    productName:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    productPrice:{
        textAlign:'center',
        fontSize:14,
        padding:10
    },

    rankingContainer:{
        height:25,
        marginBottom:10
    },
    
    productRanking:{
        width:'100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rankingIcon:{
        color:'black',
        padding:5,

    },  
    rankingIconWhite:{
        color:'white',
        padding:5,

    },
    
    bottomLayer: {
        position:'absolute',
        width: '100%',
        borderRadius: 26,
        shadowOpacity: 0.01,
        height: 300,
        marginBottom: 1,
        bottom:0,
        padding:20,
        textAlign:'center',
        backgroundColor: "rgba(255,239,239,0.8)",

      },
      paginationContainer: {
        position:'absolute',
        width:'100%',
        top:'60%',
        paddingVertical: 8,
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

    detailPicker:{
        backgroundColor:'white',
        width:150,
        borderRadius:35,
        marginLeft:10,
        marginRight:10,
    },
    pickerTextStyle:{
        textAlign:'center',
        paddingLeft:50,
        color:'black',
    },
    arrowDownIcon:{
        fontSize:25,
        marginRight:20
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

}