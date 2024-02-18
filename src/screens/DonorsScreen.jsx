import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import Provider from '../components/Provider'
import RequestCard from '../components/TopTsbNavigationComponents/RequestCard'
import Header from '../components/Header'
import { Colors } from '../themes/Colors'
import VectorIcon from '../utils/VectorIcon'
import { useNavigation } from '@react-navigation/native'

const DonorsScreen = () => {
  const provider = 1;
  const navigation = useNavigation()
  return (
    <View className = "flex flex-1 ">
      <Provider name = {provider==1?"Food Provider":"Receiver"}/>
     <View>
      <View className="flex flex-row h-[10%] items-center">
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
      <Text className="text-center text-black font-bold text-xl">My Donation List</Text>
     </View>
      <RequestCard/>
      <RequestCard/>
     </View>
    </View>
  )
}

export default DonorsScreen
