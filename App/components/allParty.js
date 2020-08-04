import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet,Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
const styles= StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'#0099FF',
        opacity:50,
        margin:10,
        padding:10,
        borderRadius:10,
        color:'white',
        justifyContent:'space-between'
    },
    image: {
        width:120,
        height:100,
        borderRadius:16,
    },
    rightSide: {
        alignItems:'center',
        flex:2
    },
    name: {
        color:'white',
        fontSize:25,
    }
})
  const Party = (props) =>(
      <View style={styles.container}>
          <View>
            <Image
                style={styles.image                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }
                source={require('../../src/assets/images/dominoes.jpg')}
            />
          </View>
          <TouchableOpacity style={styles.rightSide} onPress={()=> props.details.navigate('Current')}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.date}>{props.date}</Text>
            <Text style={styles.hour}>{props.hour}</Text>
            <Text style={styles.winner}>Winner: {props.winner}</Text>
          </TouchableOpacity>
      </View>
  ) 
export default Party
