import { View, Text } from 'react-native'
import React from 'react'
import RequestCard from '../../components/TopTsbNavigationComponents/RequestCard'
import AddButton from '../../components/TopTsbNavigationComponents/AddButton'

const MyRequest = () => {
  return (
    <View className="flex-1 p-1">
     <RequestCard/>
     <AddButton text="Find Donors"/>
    </View>
  )
}

export default MyRequest