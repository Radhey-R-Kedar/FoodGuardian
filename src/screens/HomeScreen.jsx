import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Header from '../components/Header'
import Provider from '../components/Provider'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DonationSummary from './TopTabNavigationScreens/DonationSummary'
import FoodRequest from './TopTabNavigationScreens/FoodRequest'
import RecommendedFoodListing from './TopTabNavigationScreens/RecommendedFoodListing'
import MyRequest from './TopTabNavigationScreens/MyRequest'

const {width, height}=Dimensions.get('screen');

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {

  const [provider, setProvider] = useState(true)

  return (
    <View className='flex flex-1'>
      <Provider name = {provider?"Provider":"Receiver"}/>
      <Header />
      
      <Tab.Navigator>
      {provider?(<>
        <Tab.Screen name="Donation Summary" component={DonationSummary} />
      <Tab.Screen name="Food Request" component={FoodRequest} />
      </>
      ):(<>
      <Tab.Screen name="Recommended Food Listing" component={RecommendedFoodListing} />
      <Tab.Screen name="My Requests" component={MyRequest} />
      </>)}
    </Tab.Navigator>
    </View>
  )
}

export default HomeScreen