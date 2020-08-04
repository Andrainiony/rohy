import React, { useState } from 'react'
import { View, Text, Button, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Picker } from '@react-native-community/picker'
const styles = StyleSheet.create({
    container: {
        fontSize:40,
        backgroundColor:'#36373A',
        borderRadius:6,
        alignItems:'center'
    },
    title: {
        fontSize:30,
        color:'white'
    },
    input: {
        borderBottomWidth:1,
        borderBottomColor:'white',
        height:40,
        width:200
    },
    form: {
        flexDirection:'row',
        alignItems:'center'
    }
})

const NewParty = (props)=> {
    const [type, setType] = useState('Uno')
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Create New Party</Text>
            <KeyboardAvoidingView>
                <View style={styles.form}>
                    <Text>Title: </Text>
                    <TextInput placeholder='name' style={styles.input}/>
                </View>
                <View  style={styles.form}>
                    <Text>Type:</Text>
                    <Picker
                        selectedValue={type}
                        onValueChange={(itemValue)=>
                            setType({type:itemValue})
                        }>
                        <Picker.Item label='Uno' value='uno'/>
                        <Picker.Item label='Dominoes' value='dominoes'/>
                        <Picker.Item label='Chess' value='Chess'/>
                        <Picker.Item label='Jungle Speed' value='js'/>
                        <Picker.Item label='Monopoly' value='monopoly'/>
                    </Picker>
                </View>
                <View  style={styles.form}>
                    <Text>Player:</Text>
                    <TextInput placeholder='email' style={styles.input}/>
                </View>
                <Button title='Close' onPress={props.close}/>
            </KeyboardAvoidingView>
        </View>
    )
}
export default NewParty
