import React from 'react'
import { View,Text, Button, TextInput, KeyboardAvoidingView, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        fontSize:40,
        backgroundColor:'#36373A',
        borderRadius:6
    }
})
const NewParty = (props)=> {
    return(
    <View style={styles.container}>
        <Text>Create New Party</Text>
        <KeyboardAvoidingView>
            <TextInput placeholder='name'/>
            <TextInput placeholder='email'/>
            <Button title='Close' onPress={props.close}/>
        </KeyboardAvoidingView>
    </View>
    )
}
export default NewParty
