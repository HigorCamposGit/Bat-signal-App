import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { styles } from './styles'; // <--- ESTA É A LINHA QUE FALTAVA!
import { BatButton } from '../BatButton';
import { BatLogo } from '../BatLogo';

interface BatFormProps {
  onCancel: () => void;
}

export function BatForm({ onCancel }: BatFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  function handleSendSignal() {
    if (!name || !location) {
      Alert.alert('Atenção', 'Por favor, preencha o seu nome e a localização!');
      return;
    }

    Alert.alert(
      'Sinal Enviado!',
      'O Comissário Gordon foi notificado. O Cavaleiro das Trevas está a caminho!'
    );
    onCancel();
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <Text style={styles.label}>Nome / Identificação</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome aqui..."
        placeholderTextColor="#666"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Telefone para Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="(11) 99999-9999"
        placeholderTextColor="#666"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>Localização Atual</Text>
      <TextInput
        style={styles.input}
        placeholder="Endereço ou coordenadas..."
        placeholderTextColor="#666"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.label}>Observação</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descreva o incidente..."
        placeholderTextColor="#666"
        multiline={true}
        numberOfLines={4}
        value={notes}
        onChangeText={setNotes}
      />

      <BatButton title="Enviar" onPress={handleSendSignal} />
    </View>
  );
}