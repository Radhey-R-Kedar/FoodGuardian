import { View, Text } from 'react-native'
import React from 'react'

const Provider = ({name}) => {
  return (
    <View className = "bg-lightGreen h-6 ">
      <Text className="text-center text-darkGreen font-bold text-sm">-------- #{name} --------</Text>
    </View>
  )
}

export default Provider