import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Título do Tema */}
        <Text style={styles.title}>Jardim Secreto</Text>

<Text style={styles.tagline}>
  Onde a natureza guarda seus pequenos segredos
</Text>

{/* Espaço para o Logo (conforme o desenho no quadro) */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoPlaceholder}>LOGO</Text>
        </View>

      
        {/* Botão de Acessar */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F7', // Cor clara baseada nos hexadecimais do quadro
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A5D23', // Verde "Jardim" aproximado do código #4A5D23
    marginBottom: 40,
  },
  logoContainer: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: '#D8AE05', // Tom dourado/terra
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoPlaceholder: {
    color: '#D8AE05',
    fontWeight: 'bold',
  },
  bemVindo: {
    fontSize: 18,
    color: '#1C1B1A',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#4A5D23',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
