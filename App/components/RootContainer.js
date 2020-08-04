import React from 'react'
import { View, StatusBar } from 'react-native'
import AppNavigation from '../AppNavigation/AppNavigation'
const RootContainer = ()=> {
    return(
    <View style={{flex:1}}>
        <StatusBar backgroundColor='#161D1B' barStyle='light-content'/>
        <AppNavigation/>
    </View>
    )
}
export default RootContainer