import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';

const datosFlat = [
  { id: '1', nombre: 'Juan', edad: 25 },
  { id: '2', nombre: 'María', edad: 30 },
  { id: '3', nombre: 'Pedro', edad: 28 },
  { id: '4', nombre: 'Emilio', edad: 22 },
];

const datosSection = [
  {
    titulo: 'Frutas',
    data: ['Manzana', 'Platano'],
  },
  {
    titulo: 'Verduras',
    data: ['Zanahoria', 'Lechuga'],
  },
];

export default function SectionListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ejemplo FlatList</Text>
      <FlatList
        data={datosFlat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.nombre}</Text>
        )}
      />

      <Text style={styles.titulo}>Ejemplo SectionList</Text>
      <SectionList
        sections={datosSection}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.encabezado}>{section.titulo}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#C4F3FF',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: 'purple',
  },
  encabezado: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'gold',
    padding: 5,
    color: 'white',
  },
  item: {
    fontSize: 14,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#121212',
  },
});