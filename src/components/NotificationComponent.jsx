import { View, Text, Image } from 'react-native'
import React from 'react'
import User1 from '../assets/user10.jpeg'

const NotificationComponent = () => {
  return (
    <View className =" h-28 w-[100%] border-b-[1px] border-lightGray mt-2 justify-center items-center">
    <Text className="text-right w-[90%]">5 min ago</Text>
     <View className="flex-row">
     <Image source={User1} className="h-14 w-14 rounded-3xl"/>
      <View className="w-[80%] ml-3">
        <Text  className="text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati commodi magni temporibus quia tempore dolorem debitis voluptatibus accusantium earum.</Text>
      </View>
     </View>
    </View>
  )
}

export default NotificationComponent