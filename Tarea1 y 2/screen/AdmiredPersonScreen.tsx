import React from 'react';
import { View, Text, Button } from 'react-native';

const AdmiredPersonScreen = ({ navigation }) => {
  return (
    <View>

      <Button title="Volver al Menú" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default AdmiredPersonScreen;