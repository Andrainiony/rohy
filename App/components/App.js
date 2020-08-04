import React from 'react'
import RootContainer from './RootContainer'
import { SafeAreaView, StyleSheet } from 'react-native'
const styles= StyleSheet.create({
    container: {
        flex:1
    }
})
const App = ()=> {
    return(
            <RootContainer/>
    )
}
export default App