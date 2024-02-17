import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FindDonorsScreen from '../screens/FindDonorsScreen';
import Notification from '../screens/Notification';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../themes/Colors';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false, 
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 0,
            elevation: 0,
            height:'9%' 
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <VectorIcon
                type="Entypo"
                name="home"
                size={25}
                color={Colors.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FindDonors"
          component={FindDonorsScreen}
          options={{
            tabBarIcon: () => (
              <VectorIcon
                type="MaterialCommunityIcons"
                name="hand-heart"
                size={25}
                color={Colors.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: () => (
              <VectorIcon
                type="Ionicons"
                name="notifications"
                size={25}
                color={Colors.white}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
