import { View, Text, Switch, StyleSheet } from "react-native";

export default function SwitchEjemplo({ oscuro, cambiarModo }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, { color: oscuro ? "#fff" : "#000" }]}>
        Modo oscuro
      </Text>

      <Switch value={oscuro} onValueChange={cambiarModo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});