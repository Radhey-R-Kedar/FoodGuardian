import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import User from '../assets/user10.jpeg'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../themes/Colors'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const navigation = useNavigation();
  return (
    <View  className="h-16 bg-white align-middle justify-center p-2 flex flex-row">
      <TouchableOpacity className="justify-center items-center m-2"
      onPress={()=>navigation.goBack()}>
      <VectorIcon
            type="Entypo"
            name="chevron-left"
            size={25}
            color={Colors.black}
            className="align-middle justify-center ml-2"
          />
      </TouchableOpacity>
      <Image source={User} className="h-10 w-10 rounded-3xl "/>
      <View className="ml-2 w-52">
        <Text className="text-black text-base">A2B Restaurant</Text>
        <Text className="text-black text-xs">Location</Text>
      </View>
      <VectorIcon
            type="MaterialCommunityIcons"
            name="message-reply-text"
            size={25}
            color={Colors.black}
            className="align-middle justify-center ml-2"
          />
    </View>
      )
}

export default Header