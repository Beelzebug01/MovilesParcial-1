import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const OTPScreen = ({ navigation }) => {
  return (
    <View>
      <Text>OTP Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('UserData')}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPScreen;
