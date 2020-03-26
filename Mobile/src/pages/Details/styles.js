import {StyleSheet} from 'react-native'
import Constant from 'expo-constants'


export default StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:24,
    paddingTop: Constant.statusBarHeight + 20,

  },

  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
   
  },

  incidents:{
    padding:24,
    borderRadius:8,
    backgroundColor:"#fff",
    marginBottom:16,
    marginTop:48,
  },

  incidentProperty:{
    fontSize:14,
    color:"#41414d",
    fontWeight:"bold",
    marginTop:24
  },

  incidentValue:{
    marginTop:8,
    fontSize:15,
    color:"#737380"
  },
})