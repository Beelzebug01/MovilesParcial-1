import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
