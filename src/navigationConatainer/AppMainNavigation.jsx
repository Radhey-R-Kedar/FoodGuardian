import React from 'react';
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DonorsScreen from '../screens/DonorsScreen';
import Notification from '../screens/Notification';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../themes/Colors';

const Tab = createBottomTabNavigator();

const AppMainNavigation = (props) => {
  let provider = props.route.params.provider;
  return (
   
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
          options={{
            tabBarLabel: ({focused}) => (
              <Text style={{ color: focused ? Colors.yellow : Colors.white }} className="font-bold">
                Home
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <VectorIcon
                type="Entypo"
                name="home"
                size={25}
                color={focused?Colors.yellow:Colors.white}
              />
            ),
          }}
        >{(props) => <HomeScreen {...props} provider={provider}/>}</Tab.Screen>
        <Tab.Screen
          name={provider==1?"My Donations":"Find Donors"}
          component={DonorsScreen}
          options={{
            tabBarLabel: ({focused}) => (
              <Text style={{ color: focused ? Colors.yellow : Colors.white }} className="font-bold">
                {provider==1?"My Donations":"Find Donors"}
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <VectorIcon
                type="MaterialCommunityIcons"
                name="hand-heart"
                size={25}
                color={focused?Colors.yellow:Colors.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: ({focused}) => (
              <Text style={{ color: focused ? Colors.yellow : Colors.white }} className="font-bold">
                Notification
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <VectorIcon
                type="Ionicons"
                name="notifications"
                size={25}
                color={focused?Colors.yellow:Colors.white}
              />
            ),
          }}
        />
      </Tab.Navigator>

  );
};

export default AppMainNavigation;
