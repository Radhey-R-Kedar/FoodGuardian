import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import {Colors} from '../themes/Colors';
import VectorIcon from '../utils/VectorIcon';
import {useNavigation} from '@react-navigation/native';
import Provider from '../components/Provider';
import CheckBox from '@react-native-community/checkbox';

// import {CheckBox} from 'react-native-elements';

const MyForm = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiry, setExpiry] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = option => {
    setSelectedOption(option);
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    // You can send the form data to an API, perform validation, etc.
  };
  console.log(props.showModal);

  return (
    <Modal animationType="fade" transparent={false} visible={props.showModal}>
      <Provider name="Provider" />
      <View className="bg-white1 items-center flex flex-row border-b-[1px] border-lightGray h-[7%]">
        <TouchableOpacity
          className="justify-center items-center m-2"
          onPress={() => props.setShowModal(false)}>
          <VectorIcon
            type="Entypo"
            name="chevron-left"
            size={25}
            color={Colors.black}
            className="align-middle justify-center ml-2"
          />
        </TouchableOpacity>
        <Text className="text-gray text-center text-lg">
          Create Food Listing
        </Text>
      </View>

      <View className="m-3 p-1">
        <TextInput
          style={styles.input}
          placeholder="Food Item Name"
          placeholderTextColor={Colors.gray}
          value={itemName}
          onChangeText={text => setItemName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          placeholderTextColor={Colors.gray}
          value={quantity}
          onChangeText={text => setQuantity(text)}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Expiration Date"
          placeholderTextColor={Colors.gray}
          value={expiry}
          onChangeText={text => setExpiry(text)}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          placeholderTextColor={Colors.gray}
          value={location}
          onChangeText={text => setLocation(text)}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Information"
          placeholderTextColor={Colors.gray}
          value={contact}
          onChangeText={text => setContact(text)}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor={Colors.gray}
          value={description}
          onChangeText={text => setDescription(text)}
          keyboardType="default"
        />
        

        <View className="justify-center items-center flex flex-row">
          <View className="flex flex-row justify-center items-center m-3">
            <TouchableOpacity
              style={[selectedOption === 'veg' && styles.selectedOption]}
              onPress={() => handleSelectOption('veg')}
              className="rounded-3xl w-6 h-6 border-[1px] border-gray">
              <></>
            </TouchableOpacity>
            <Text className="text-green font-bold text-center ml-3">Veg</Text>
          </View>

          <View className="flex flex-row justify-center items-center m-3">
          <TouchableOpacity
            style={[selectedOption === 'nonveg' && styles.selectedOption]}
            onPress={() => handleSelectOption('nonveg')}
            className="rounded-3xl w-6 h-6 border-[1px] border-gray"
            >
            
          </TouchableOpacity>
          <Text className="text-red font-bold text-center ml-3">Non-Veg</Text>
          </View>
        </View>

        <TouchableOpacity className="bg-black rounded-lg h-[8%] items-center justify-center" onPress={handleFormSubmit}>
          <View>
            <Text className="text-white">Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: 50,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
  radios: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: '40%',
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
});

export default MyForm;
