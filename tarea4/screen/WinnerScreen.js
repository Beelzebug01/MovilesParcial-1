import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WinnerScreen = ({ route }) => {
  const { attempts } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.winnerText}>¡Felicidades, ganaste!</Text>
      <Text>Intentos: {attempts}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  winnerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default WinnerScreen;
