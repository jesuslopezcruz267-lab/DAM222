import { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import SwitchEjemplo from "./SwitchEjemplo";

export default function PressableSwitch() {
  const [imagenGrande, setImagenGrande] = useState(false);
  const [oscuro, setOscuro] = useState(false);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: oscuro ? "#000" : "#fff" },
      ]}
    >
      <Pressable>
        <Text style={[styles.texto, { color: oscuro ? "#fff" : "#000" }]}>
          PRESIONAME
        </Text>
      </Pressable>

      <Pressable onPress={() => setImagenGrande(!imagenGrande)}>
        <Image
          source={require("../assets/Tachos.jpg")}
          style={imagenGrande ? styles.imagenGrande : styles.image}
        />
      </Pressable>

      <SwitchEjemplo oscuro={oscuro} cambiarModo={setOscuro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  imagenGrande: {
    width: 180,
    height: 180,
  },
});