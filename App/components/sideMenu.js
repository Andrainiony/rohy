import React from 'react'
import { View, StyleSheet, StatusBar, Text, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
const styles = StyleSheet.create({
  container: {
    backgroundColor:"#36373A",
    flex:1
  },
  title:{
    color:'#00FF00',
    fontSize:65
  },
  subtitle:{
    fontSize:15,
    marginLeft:50,
    color:'white'
  },
  header:{
    alignItems:'center'
  },
  menu:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:10
  },
  text:{
    color:'white',
    fontSize:20,
    margin:2
  },
  LabelMenu:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:50
  },
})

export default function SideMenu(props){
  return(
    
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor='#36373A' barStyle='light-content'/>
      <View style={styles.header}>
      <Text style={styles.title}>ROHY</Text>
      </View>
      < TouchableOpacity style={styles.menu} onPress={()=>props.navigation.navigate('Home')}>
          <Icon name='home' color='white' size={25}/>
          <Text style={styles.text}>Home</Text>
      </ TouchableOpacity>
      < TouchableOpacity style={styles.menu} onPress={()=>props.navigation.navigate('Rank')}>
          <Icon name='star-border' color='white' size={25}/>
          <Text style={styles.text}>General ranking</Text>
      </ TouchableOpacity>
      < TouchableOpacity style={styles.menu} onPress={()=>props.navigation.navigate('Home')}>
          <Icon name='star' color='white' size={25}/>
          <Text style={styles.text}>Ranking per game</Text>
      </ TouchableOpacity>
      < TouchableOpacity style={styles.menu} onPress={()=>props.navigation.navigate('Home')}>
          <Icon name='group' color='white' size={25}/>
          <Text style={styles.text}>Groups</Text>
      </ TouchableOpacity>
      < TouchableOpacity style={styles.menu} onPress={()=>props.navigation.navigate('Home')}>
          <Icon name='person' color='white' size={25}/>
          <Text style={styles.text}>Player</Text>
      </ TouchableOpacity>
      <Text style={styles.subtitle}>LABELS</Text>
      <View syle={styles.labels}>
        <TouchableOpacity style={styles.LabelMenu} onPress={()=>props.navigation.navigate('Home')}>
          <Icon name='gamepad' color='white' size={25}/>
          <Text style={styles.text}>Dominoes</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}