import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings'; // Asegúrate de instalar esta dependencia

const UserProfileScreen = ({ navigation }) => {
  const [rating, setRating] = useState(0); // Estado para almacenar la calificación

  return (
    <View style={styles.container}>
      {/* Mostrar foto de perfil */}
      <Image source={require('./path/to/profile-image.jpg')} style={styles.profileImage} />

      {/* Mostrar datos del perfil del usuario */}
      <Text>Nombre: John Doe</Text>
      <Text>Fecha de Nacimiento: 01/01/1990</Text>
      <Text>Pasatiempos: React Native, Coding, etc.</Text>

      {/* Componente de evaluación (rating) */}
      <View style={styles.ratingContainer}>
        <Text>Calificación:</Text>
        <Rating
          type="custom"
          ratingCount={10}
          imageSize={30}
          startingValue={rating}
          fractions={2} // Permitir calificaciones en fracciones de 0.5
          onFinishRating={(value) => setRating(value)}
          style={{ paddingVertical: 10 }}
        />
      </View>

      {/* Botón para volver al menú */}
      <Button title="Volver al Menú" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default UserProfileScreen;
