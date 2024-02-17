import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Provider from '../assets/FoodProvider.png';
import Reciever from '../assets/Reciever.png';
import { useNavigation } from '@react-navigation/native';

let DonorProviderPage = () => {
  
  const navigation = useNavigation();

  return (
    <View style={styles.container} className="bg-white1">
      <View style={styles.top_text}>
        <Text style={styles.t_text}>Hello</Text>
        <Text style={styles.t_text}>Are You?</Text>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity
          style={[styles.imageContainer, styles.imageContainer2]}
          className="rounded-[100px]"
          onPress={()=>navigation.navigate('AppMainNavigation', {provider:1})}
          >
          <Image
            source={Provider} // Replace with the actual path or URI of your image
            style={styles.image}
          />
          <Text style={[styles.imageName1, styles.imageName_green]}>Food</Text>
          <Text style={[styles.imageName, styles.imageName_green]}>
            Provider
          </Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.text_or} className="text-black">
            OR
          </Text>
        </View>

        <TouchableOpacity
          style={styles.imageContainer}
          className="rounded-[100px]"
          onPress={()=>navigation.navigate('AppMainNavigation', {provider:0})}
          >
          <Image
            source={Reciever} 
            style={styles.image}
            
          />
          <Text style={[styles.imageName1, styles.imageName_blue]}>Food </Text>
          <Text style={[styles.imageName, styles.imageName_blue]}>
            Reciever
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.button_bottom} className="mt-4">
        <TouchableOpacity
          style={styles.buttonContainer}
          className="rounded-3xl">
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // height:di,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#000',
  },
  t_text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },

  imageContainer: {
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    padding: 30,
    backgroundColor: '#CBC3E3',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },

  imageContainer2: {
    backgroundColor: '#EEFFE8',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover', // Adjust this based on your image requirements
    marginBottom: 0,
  },
  top_text: {
    marginTop: '5%',
    fontSize: 30,
    color: 'red',
  },

  button_bottom: {
    paddingBottom: 50,
  },
  buttonContainer: {
    backgroundColor: '#000',
    padding: 15, // Padding for the button
    paddingHorizontal: 40,
    // Optional: Add border radius for rounded corners
  },
  buttonText: {
    color: '#FFD700', // Yellow text color
    textAlign: 'center', // Center the text
    fontWeight: 'bold', // Optional: Add bold font weight
    fontSize: 20,
  },
  container2: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'white',
  },
  imageName: {
    fontSize: 20,
    // marginTop:-10,
  },

  imageName_green: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },

  imageName_blue: {
    color: '#043680',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageName1: {
    fontSize: 20,
  },
  text_or: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default DonorProviderPage;
