import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#161D1B',
        padding:30,
    },
    title: {
        fontSize:30,
        color:'white',  
    },
    image: {
        width:300,
        height:150,
        borderRadius:12
    },
    player: {
        width:50,
        height:50,
        borderRadius:50,
    },
    head: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'teal',
        padding:10,
        borderTopLeftRadius:12,
        borderTopRightRadius:12
    },
    table: {
        flex:1,
        flexDirection:'column',
        backgroundColor:'orange',
        borderRadius:12
    }
})

const Player = ()=> {
    return(
        <Image style={styles.player} source={require('../../src/assets/images/psy.jpg')}/>
    )
}
const Current = ()=> {
    return(
        <View style={styles.container}>
            <Image style={styles.image}
            source={require('../../src/assets/images/dominoes.jpg')}
            />
            <Text style={styles.title}>DOMINOES</Text>
            <View style={styles.table}>
                <View style={styles.head}>
                    <Player/>
                    <Player/>
                    <Player/>
                </View>
                <ScrollView>

                </ScrollView>
            </View>
        </View>
    )
}

export default Current