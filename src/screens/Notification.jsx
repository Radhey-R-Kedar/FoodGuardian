import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NotificationComponent from '../components/NotificationComponent'

const Notification = () => {
  return (
    <View className=" flex flex-1 flex-col p-1 items-center">
      <View cllassName ="h-[15%]">
      <Text className = 'text-black font-semibold text-2xl'>Notification</Text>
      </View>
     <NotificationComponent/>
     <NotificationComponent/>
     <NotificationComponent/>
     <NotificationComponent/>
    </View>
  )
}

export default Notification