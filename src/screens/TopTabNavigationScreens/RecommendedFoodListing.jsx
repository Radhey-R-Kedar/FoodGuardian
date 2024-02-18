import { View, Text } from 'react-native'
import React from 'react'
import HotelCard from '../../components/TopTsbNavigationComponents/HotelCard'
import AddButton from '../../components/TopTsbNavigationComponents/AddButton'

const RecommendedFoodListing = () => {
  return (
    <View className="flex-1 p-2 items-center pt-4">
      <HotelCard/>
      <AddButton text="Find Donors"/>
    </View>
  )
}

export default RecommendedFoodListing