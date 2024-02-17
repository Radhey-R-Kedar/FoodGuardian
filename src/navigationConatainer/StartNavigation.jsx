import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DonorProviderPage from '../screens/DonorProviderPage';
import AppMainNavigation from './AppMainNavigation';


const Stack = createStackNavigator();

const StartNavigation = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DonorProviderPage' screenOptions={{headerShown:false}}>
      <Stack.Screen name="DonorProviderPage" component={DonorProviderPage} />
      <Stack.Screen name="AppMainNavigation" component={AppMainNavigation} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StartNavigation