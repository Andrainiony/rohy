import React from 'react'
import { View, Button, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  appContainer: {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:'#161D1B', 
  },
  title: {
    color:'#00FF00',
    fontSize:69,
  }
})
 const Splash = props => {
   setTimeout(()=> props.navigation.navigate('Drawer'), 2000)
    return(
      <View style={styles.appContainer}>
        <Text style={styles.title}> ROHY</Text>
      </View>
    )
}
export default Splash