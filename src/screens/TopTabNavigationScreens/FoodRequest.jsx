import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddButton from '../../components/TopTsbNavigationComponents/AddButton'
import FoodRequestContainer from '../../components/TopTsbNavigationComponents/FoodRequestContainer'

const FoodRequest = () => {
  return (
    <View className="flex-1 p-1 bg-white">
      <FoodRequestContainer/>
      <AddButton/>
    </View>
  )
}

export default FoodRequest
