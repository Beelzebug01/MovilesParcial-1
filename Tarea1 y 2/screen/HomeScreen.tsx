import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Mi Perfil"
        onPress={() => navigation.navigate('UserProfile')}
      />
      <Button
        title="Persona Admirada"
        onPress={() => navigation.navigate('AdmiredPerson')}
      />
    </View>
  );
};

export default HomeScreen;