import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CurrentParty from '../components/currentParty'
import AboutGame from '../components/aboutGame'
import AboutPlayer from '../components/aboutPlayer'
import SplashScreen from '../components/splashScreen'
import Drawer from '../components/Drawer'
const Stack = createStackNavigator()

const AppNavigator = ()=> (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown:false }}>
            <Stack.Screen name='Splash' component={SplashScreen}/>
            <Stack.Screen name='Drawer'  component={Drawer}/>
            <Stack.Screen name='Current' component={CurrentParty}/>
            <Stack.Screen name='AboutGame' component={AboutGame}/>
            <Stack.Screen name='AboutPlayer' component={AboutPlayer}/>
        </Stack.Navigator>
    </NavigationContainer>)

export default AppNavigator