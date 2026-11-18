import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoContainer: {
    transform: [{ scale: 0.5 }], // Deixa a logo menor para a Tela 2
    marginBottom: -40,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#E5BF3C',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#141414',
    borderWidth: 1,
    borderColor: '#333',
    color: '#FFF',
    padding: 10,
    borderRadius: 8,
    fontSize: 14,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
});