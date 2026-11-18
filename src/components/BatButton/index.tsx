import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface BatButtonProps {
  onPress: () => void;
  title: string;
}

export function BatButton({ onPress, title }: BatButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}