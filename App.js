import React from 'react'
import { StyleSheet } from 'react-native'
import SideMenu from './components/sideMenu'
import HomeScreen from './components/homeScreen'
import Rank from './components/rank' 
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator
      drawerType='front'
      initialRouteName='Home'
      drawerContentOptions={{
        activeBackgroundColor:'red'
      }}
      drawerContent={(props)=><SideMenu {...props}/>}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Rank" component={Rank} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}