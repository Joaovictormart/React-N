import { StyleSheet} from "react-native";


const styles = StyleSheet.create({

    nCnt:{
        width:"100%",
        height:"60%",
        backgroundColor:"gray",
        bottom:0,
        top:40,
        alignItems:"center",
        marginTop:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },

        
errorMessage:{
    fontSize: 12,
    color: red,
    fontWeight: "bold",
    paddingLeft: 20,
    
    },

    form:{

        width:"100%",
        height:"auto",
        marginTop: 30,
        padding:10,
        
        },

        formLabel:{

            color:"#000000",
            fontSize:18,
            paddingLeft:20,
            },

    textInput:{
        // width:'80%' ,
        // height:40,
        // backgroundColor:'white',
        // marginBottom:15,
        // paddingLeft:10,
        // borderRadius:25,
        // margin:30

        width: "90%",
        borderRadius:50,
        backgroundColor:"f6f6f6",
        heigth:40,
        margin:12,
        paddingLeft:10,
       },


       visibilidade:{
        backfaceVisibility:"hidden"
       },

       btn:{

        
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "black" ,
        paddinfTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
        marginTop:90,
       },

       btnText:{
        

            fontSize: 20,
            color: "white",

            
       }
})


export default styles