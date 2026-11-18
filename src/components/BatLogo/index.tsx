import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';
import batLogo from '../../assets/imgs/batman-logo.png'; // Caminho da imagem da logo

export function BatLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BAT SINAL</Text>
      <Image source={batLogo} style={styles.imageLogo} />
    </View>
  );
}