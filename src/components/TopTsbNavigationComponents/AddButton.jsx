import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import VectorIcon from '../../utils/VectorIcon'
import { Colors } from '../../themes/Colors'
import { useNavigation } from '@react-navigation/native'

const AddButton = ({setShowModal, text}) => {
  
  return (
    <TouchableOpacity className="absolute top-[88%] left-[55%] h-[10%] w-[45%] flex flex-row"
    onPress={()=>setShowModal(true)}
    > 
      <View className="bg-black p-2 rounded-xl w-[80%] justify-center">
      <Text className="text-white font-bold text-sm p-1 text-center">{text}</Text>
      </View>
      <View className="bg-yellow w-[30%] absolute left-[70%] h-[100%] rounded-xl justify-center items-center"
      onPress={()=>setShowModal(true)}
      >
      <VectorIcon
                type="MaterialIcons"
                name="add"
                size={40}
                color={Colors.black}
                className="items-center justify-center"
              />
      </View>
    </TouchableOpacity>
  )
}

export default AddButton