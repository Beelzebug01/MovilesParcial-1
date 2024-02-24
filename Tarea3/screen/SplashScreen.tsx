import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Splash Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Press to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
