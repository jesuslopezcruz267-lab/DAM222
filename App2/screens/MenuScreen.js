import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';

// Toma el export default, el export con nombre, o cualquier función exportada
const tomar = (modulo, nombre) =>
  modulo.default ??
  modulo[nombre] ??
  Object.values(modulo).find((v) => typeof v === 'function');

const pantallas = [
  { titulo: 'Tarjetas', cargar: () => tomar(require('./Tarjetas'), 'Tarjetas') },
  { titulo: 'SafeAreaView & ScrollView', cargar: () => tomar(require('./SafeScreen'), 'SafeScreen') },
  { titulo: 'Pressable & Switch', cargar: () => tomar(require('./PressableSwitch'), 'PressableSwitch') },
  { titulo: 'TextInput & Alert', cargar: () => tomar(require('./TextInputAlert'), 'TextInputAlert') },
  { titulo: 'FlatList & SectionList', cargar: () => tomar(require('./FlatListSectionList'), 'FlatListSectionList') },
  { titulo: 'ImageBackground & SplashScreen', cargar: () => tomar(require('./ImageBackgroundSplashScreen'), 'ImageBackgroundSplashScreen') },
  { titulo: 'Modal & Bottom Sheet', cargar: () => tomar(require('./ModalBottomSheet'), 'ModalBottomSheet') },
  { titulo: 'ActivityIndicator & KeyboardAvoidingView', cargar: () => tomar(require('./ActivityindicatorKeyboardAvoidingView'), 'ActivityindicatorKeyboardAvoidingView') },
];

export default function MenuScreen() {
  const [actual, setActual] = useState(null);
  const [error, setError] = useState('');

  const abrir = (p) => {
    try {
      const Componente = p.cargar();
      if (!Componente) {
        setError('No se encontró el componente de: ' + p.titulo + ' (revisa el export del archivo)');
        return;
      }
      setError('');
      setActual({ titulo: p.titulo, Componente });
    } catch (e) {
      setError('Error en ' + p.titulo + ': ' + e.message);
    }
  };

  if (actual) {
    const Pantalla = actual.Componente;
    return (
      <View style={styles.flex}>
        <Pressable style={styles.volver} onPress={() => setActual(null)}>
          <Text style={styles.textoBoton}>← Volver al menú</Text>
        </Pressable>
        <Pantalla />
      </View>
    );
  }

  return (
    <ScrollView style={styles.fondo} contentContainerStyle={styles.menu}>
      <Text style={styles.titulo}>Menú de prácticas</Text>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      {pantallas.map((p) => (
        <Pressable
          key={p.titulo}
          style={({ pressed }) => [styles.boton, pressed && styles.presionado]}
          onPress={() => abrir(p)}
        >
          <Text style={styles.textoBoton}>{p.titulo}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  fondo: { flex: 1, backgroundColor: '#EFE6DC' },
  menu: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 40 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  error: { color: 'red', marginBottom: 15, maxWidth: 300, textAlign: 'center' },
  boton: { backgroundColor: '#1E7DBE', width: 280, paddingVertical: 10, paddingHorizontal: 12, marginBottom: 12, alignItems: 'center' },
  presionado: { opacity: 0.7 },
  volver: { backgroundColor: '#1E7DBE', padding: 14, paddingTop: 40 },
  textoBoton: { color: '#fff', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center' },
});