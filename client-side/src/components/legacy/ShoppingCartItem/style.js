import { ThemeSettings } from '../../../constants';
export default {

    container: {

    },

    boxcontainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 10
    },

    justifycontainer: {
       
    },

    innercontainer: {
        flexDirection: 'row',
        marginTop: 10
    },

    subinnercontainer: {
        paddingLeft:10,
        marginVertical: 4,
        marginLeft: 5
    },

    rightSideTextStyle: {
        fontSize: 12,
        fontFamily: ThemeSettings.textFont,
        color: ThemeSettings.secondaryColor
    },

    txt: {
        fontSize: 15,
        color:ThemeSettings.primaryColor,
        width:100,
        fontFamily: ThemeSettings.textFont,
    },

    productPriceStyle:{
        fontSize:14,
        fontWeight:'bold'     
    },

    seperator:{
        position:'absolute',
        width:'100%',
        height:1,
        bottom:1,
        marginLeft:12,
        backgroundColor: "rgba(0,0,0,0.2)",
    },

    productCondition:{
        paddingTop:10,
        fontSize: 14,
        color: "rgba(100,92,87,0.8)",
        width:100,
        fontFamily: ThemeSettings.textFont,
    },

    trashIcon:{
        color: "rgba(100,92,87,0.8)",
        fontSize:20,
        paddingTop:10,
    }
}