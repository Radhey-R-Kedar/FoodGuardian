import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FoodRequestImg from '../../assets/FoodRequestImage.png';
const RequestCard = () => {
  return (
    <View className="w-[95%] h-[45%] m-[2.5%]">
      <Text className="text-lightGray text-right mr-1 text-xs mb-1">
        30 min ago
      </Text>
      <View className="flex-1 m-1 rounded-lg bg-white1 shadow-lg shadow-black2 items-center p-[4px]">
        <Text className="text-black3 text-xs w-[100%] text-right font-bold">
          Date : <Text className="text-darkGray">19-02-24</Text>
        </Text>

        <View className="mt-1 border-b-[1px] border-lightGray w-[95%] pb-2">
          <Text className="text-black3 font-bold m-1 ml-2">
            Food Item :{' '}
            <Text className="text-gray font-medium">Vegetable Biryani</Text>
          </Text>
          <Text className="text-black3 font-bold m-1 ml-2">
            Quantity :{' '}
            <Text className="text-gray font-medium">30 Servings</Text>
          </Text>
        </View>
        <View className="mt-2 mb-2 w-[95%]">
          <Text className="text-black3 font-bold m-1 ml-2">
            Donated By A@B Restaurent
          </Text>
          <Text className="text-black3 font-normal text-xs ml-2">
            Donated By A@B Restaurent
          </Text>
        </View>
        <View className="flex flex-row justify-end w-[100%] items-center">
          <TouchableOpacity className="border-b-[1px] items-center mr-3">
            <Text className="text-black underline-offset-1 text-center">
              View all details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-brown rounded-xl  p-2 items-center justify-center">
            <Text className="text-center">Pending</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RequestCard;
