import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FoodRequestImg from '../../assets/FoodRequestImage.png';
const FoodRequestContainer = () => {
  return (
    <View className="w-[95%] h-[45%] m-[2.5%]">
      <Text className="text-lightGray text-right mr-1 text-xs mb-1">
        30 min ago
      </Text>
      <View className="flex-1 m-1 rounded-lg bg-white1 shadow-lg shadow-black2 items-center p-[4px]">
        <View className="w-[100%] h-[20%] items-center justify-center flex-row">
          <Image
            source={FoodRequestImg}
            className="h-[80%] w-[10%] "
          />
          <View className="ml-2 w-[85%]">
            <Text className="text-gray text-xs">A2B Restaurant</Text>
            <Text className="text-lightGray text-[10px]">Location</Text>
          </View>
        </View>
        <View className="mt-1"> 
            <Text className="text-darkGray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ex neque corporis. Repellendus ullam quia accusamus, minus nemo ducimus animi!</Text>
        </View>
        <Text className="text-lightGray w-[95%] text-xs m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
        <View className="w-[100%] justify-center items-center flex flex-row">
            <TouchableOpacity className="bg-black w-[30%] h-9 justify-center rounded-3xl m-1">
                <Text className="text-yellow text-center justify-center">accept</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border-[1px] border-black w-[30%] h-9 justify-center rounded-3xl m-1">
                <Text className="text-darkGray text-center justify-center">Decline</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodRequestContainer;
