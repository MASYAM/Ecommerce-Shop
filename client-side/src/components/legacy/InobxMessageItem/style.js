import { ThemeSettings, Colors } from '../../../constants';
export default {

    messageIconBox:{ 
        justifyContent: 'center', 
        marginTop: 9, 
    },
    messageIconStyle:{
        color:Colors.primaryColor
    },
    boxcontainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingBottom: 10
    },

    middleContentBox: {
        width:'80%',
        marginLeft:10
    },

    innercontainer: {
        flexDirection: 'row',
        marginTop: 10
    },

    subinnercontainer: {
        marginVertical: 4,
    },

    rightSideTextStyle: {
        fontSize: 12,
        fontFamily: ThemeSettings.textFont,
        color: ThemeSettings.secondaryColor
    },

    messageTitle: {
        fontSize: 15,
        color:'black',
        width:'100%',
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
        width:'100%',
        fontFamily: ThemeSettings.textFont,
    },

    trashIcon:{
        color: "rgba(100,92,87,0.8)",
        fontSize:20,
        paddingTop:10,
    },

    messageDate:{
        fontSize:12,
        marginTop:10,
        color: "rgba(0,0,0,0.2)",

    },
    
    subTitleCntainer:{
        width:'100%'
    }
}