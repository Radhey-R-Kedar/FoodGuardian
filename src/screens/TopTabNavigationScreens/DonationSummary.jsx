import {View, Text, Image} from 'react-native';
import React, { useState } from 'react';
import AddButton from '../../components/TopTsbNavigationComponents/AddButton';
import DonationImg from '../../assets/DonationSummary.png';
import MyForm from '../../modal/MyForm';
const DonationSummary = () => {
  const [showModal, setShowModal]= useState(false);
  return (
    <View className="flex-1 p-1 items-center ">
      <View className="m-1">
        <Text className="text-black font-bold text-base text-center">
          {' '}
          Welcome To{' '}
        </Text>
        <Text
          className="text-gray font-extrabold text-xl text-center"
          style={{fontFamily: 'Georgia'}}>
          {' '}
          <Text className="text-black">F</Text>ood
          <Text className="text-black">G</Text>uardian
        </Text>
        <Image source={DonationImg} className ="h-[70%]" />
        <Text className="text-gray font-extrabold text-lg text-center ">
          {' '}
          Let's Tackle Food Waste And Ensure
        </Text>
        <Text className="text-gray font-extrabold text-lg text-center "> No One Goes <Text className="text-black font-extrabold">Hungry</Text></Text>
      </View>
      <AddButton setShowModal={setShowModal} />
      <MyForm showModal={showModal} setShowModal={setShowModal}/>
    </View>
  );
};

export default DonationSummary;
