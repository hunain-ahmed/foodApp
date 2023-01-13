import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import {useState, useEffect} from 'react';

const Hooks = ({navigation}) => {
  const [price, setPrice] = useState(10);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  function handleInput(key, value) {
    if (value.length) {
      formData[key] = value;
      setFormData(formData);
      console.log(formData);
    }
  }

  // use effect

 
const ClearUp=()=>{
  return(
    <View>
      <Text>thisis your window size 00</Text>
    </View>
  )
}


  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => setPrice(price + 1)}>
        <View
          style={{
            flexDirection: 'row',
            width: 20,
            height: 20,
            borderWidth: 1,
          }}>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {' '}
        {price}
      </Text>
      <TouchableOpacity
        onPress={() => (price === 0 ? setPrice(0) : setPrice(price - 1))}>
        <View
          style={{
            flexDirection: 'row',
            width: 20,
            height: 20,
            borderWidth: 1,
          }}>
          <Text>-</Text>
        </View>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
        }}>
        Register
      </Text>
      <View
        style={{
          flexDirection: 'column',

          justifyContent: 'space-evenly',

          //borderWidth:2,
          width: '80%',
          height: '80%',
        }}>
        <TextInput
          name="username"
          id="username"
          type="text"
          onChangeText={value => {
            // console.log("Value", value);
            setFormData({username:value});
          }}
          placeholder="Name"
          style={{
            width: '90%',
            height: '10%',
            borderWidth: 1,
          }}></TextInput>

        <TextInput
          name="email"
          id="email"
          type="text"
          onChangeText={value => {
            setFormData({email: value});
          }}
          placeholder="Email"
          style={{
            width: '90%',
            height: '10%',
            borderWidth: 1,
          }}></TextInput>

        <TextInput
          name="password"
          id="password"
          type="password"
          onChangeText={value => {
            setFormData({password: value});
          }}
          placeholder="Password"
          style={{
            width: '90%',
            height: '10%',
            borderWidth: 1,
          }}></TextInput>

        <TextInput
          name="confirm_password"
          id="confirm password"
          type="password"
          placeholder="Confirm-Password"
          style={{
            width: '90%',
            height: '10%',
            borderWidth: 1,
          }}></TextInput>

        <Button title="Create Account" />

        <Text>
          {' '}
          My name {formData.username} is and Email is {formData.email}
        </Text>
      </View>
    </View>
  );
};


// TO SIDE EFFECTS WE USE useEffect hook

export default Hooks;
