import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import User1 from '../../assets/user10.jpeg'

const HotelCard = () => {
  return (
    <View className="h-[45%] w-[98%] border-[1px] border-lightGray rounded-lg p-2">
      <View className="flex flex-row h-[30%] item-center border-b-[1px] border-lightGray  pb-3 mb-2">
        
          <Image source={User1} className="h-[100%] w-[15%] rounded-3xl m-1" />
       
        <View className="item-cemter justify-center">
          <Text className="text-black text-sm">Savi Lunch Home</Text>
          <Text className="text-gray text-xs">123, ABC Street, Pune</Text>
        </View>
      </View>
      <View className="flex flex-col">
        <Text className="text-black3 font-bold m-1">Food Item : <Text className="text-gray font-medium">Vegetable Biryani</Text></Text>
        <Text className="text-black3 font-bold m-1">Quantity : <Text className="text-gray">30 Servings</Text></Text>
        <Text className="text-black3 font-bold m-1">Expiration : <Text className="text-gray">12 Hours</Text></Text>
      </View>
      <View className="flex flex-row justify-end w-[100%] items-center">
       
        <TouchableOpacity className="border-b-[1px] items-center mr-3">
        <Text className="text-black underline-offset-1 text-center">View all details</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-black rounded-3xl  p-3 items-center justify-center">
          <Text className="text-yellow text-center">Express Interest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myCard: {
    // backgroundColor: '#C4C4C4',
    width: '95%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    padding: 13,
    gap: 20
  },
  topSec: {
    gap: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingBottom: 10
  },
  container: {
    borderRadius: 50, 
    overflow: 'hidden', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', 
    height: '100%',
    resizeMode: 'cover', 
  },
  bottomSec: {
    gap: 10
  },
  name: {
    marginTop: 8,
   
  },
  address: {
    marginTop: 5,
   
    color: '#6A6A6A'
  },
  darkText: {
   
    color: '#6A6A6A'
  },
  lightText: {
  
    color: 'black'
  },
  option: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    padding: 4,
    paddingVertical: 8,
    width: '50%',
    backgroundColor: 'black'
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#cdff01'
  },
  bottom: {
    flexDirection: 'row',
    gap: 13,
    paddingLeft: 45
  },
  bottomText: {
    paddingTop: 5,
    textDecorationLine: 'underline',
    fontSize: 18,
  }
});

export default HotelCard;