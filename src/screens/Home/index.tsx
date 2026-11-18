import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { BatLogo } from '../../components/BatLogo';
import { BatButton } from '../../components/BatButton';
import { BatForm } from '../../components/BatForm';

export function Home() {
  const [activate, setActivate] = useState(false);

  function handleActivateSignal() {
    setActivate(true);
  }

  function handleCancelSignal() {
    setActivate(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {!activate ? (
          <>
            <BatLogo />
            <BatButton title="ATIVAR BAT SINAL" onPress={handleActivateSignal} />
          </>
        ) : (
          <BatForm onCancel={handleCancelSignal} />
        )}
      </View>
    </SafeAreaView>
  );
}