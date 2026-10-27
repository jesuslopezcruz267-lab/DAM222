
/* =========================================================
   1. ZONA DE IMPORTACIONES
   ========================================================= */

import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';


/* =========================================================
   2. ZONA PRINCIPAL [MAIN]
   ========================================================= */

export function PressableSwitch() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Práctica: Pressable & Switch
            </Text>

            <StatusBar style="auto" />

        </View>
    );
}


/* =========================================================
   3. ZONA DE ESTILOS Y POSICIONAMIENTO
   ========================================================= */

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    titulo: {
        fontSize: 20,
        textAlign: 'center',
    },

});