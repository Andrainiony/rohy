import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    button:{
        backgroundColor:'transparent',
        position:'absolute',
        bottom:20,
        right:20,
        shadowColor:'black'
    }
})
const AddButton = (props)=> {
    return(
        <TouchableOpacity style={styles.button} onPress={props.openModal}>
            <Icon name='add-circle' color='#00FF00' size={60}/>
        </TouchableOpacity>
    )
}
export default AddButton;