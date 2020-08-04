import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
const styles= StyleSheet.create({
    topBar: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5,
        height:40,
        backgroundColor:'#4D4F51',
        margin:10,
        borderRadius:6,
      }
})
function NavigationDrawer(props){
    return(
        <View style={styles.topBar}>
          <TouchableOpacity onPress={()=> props.navigation.openDrawer()}>
         <Icon
          name='list' 
          size={28} 
          color='white'/>
          </TouchableOpacity>
         <Text style={{color:'white'}}>search for party ...</Text>
         <Icon name='account-circle' size={28} color='white'/>
        </View>
    )
}
export default NavigationDrawer