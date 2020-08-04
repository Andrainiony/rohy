import React from 'react'
import { StyleSheet } from 'react-native'
import SideMenu from './sideMenu'
import HomeScreen from './homeScreen'
import Current from './currentParty'
import Rank from './rank' 
import { createDrawerNavigator } from '@react-navigation/drawer'
const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})

const Drawer = createDrawerNavigator();
export default function SideDrawer() {
  return (
    <Drawer.Navigator
      drawerType='front'
      initialRouteName='Home'
      drawerContentOptions={{
        activeBackgroundColor:'red'
      }}
      drawerContent={(props)=><SideMenu {...props}/>}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Rank" component={Rank} />
      <Drawer.Screen name='Current' component={Current}/>
    </Drawer.Navigator>
  );
}