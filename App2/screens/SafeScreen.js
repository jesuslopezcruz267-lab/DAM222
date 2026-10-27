

import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export function SafeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>

            <StatusBar style="auto" />

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >

                <Text style={styles.titulo}>
                    Práctica: SafeAreaView y ScrollView
                </Text>

                <Text style={styles.title}>
                    Práctica en equipo
                </Text>

                <Text style={styles.subtitle}>
                    Desliza hacia abajo para ver más contenido.
                </Text>

                {[...Array(15)].map((_, index) => (
                    <View key={index} style={styles.box}>
                        <Text style={styles.boxText}>
                            Registro de prueba {index + 1}
                        </Text>
                    </View>
                ))}

            </ScrollView>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    // Contenedor principal de la pantalla.
    safeArea: {
        flex: 1,
        width: '100%',
        backgroundColor: '#00BFFF',
    },

    // Área desplazable.
    scrollView: {
        flex: 1,
        width: '100%',
    },

    // Organización del contenido dentro del ScrollView.
    scrollContent: {
        padding: 20,
        alignItems: 'center',
    },

    // Título que identifica la práctica.
    titulo: {
        width: '100%',
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
    },

    // Encabezado principal.
    title: {
        width: '100%',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    // Texto que indica cómo desplazarse.
    subtitle: {
        width: '100%',
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
    },

    // Tarjetas de los registros.
    box: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
        elevation: 3,
        alignItems: 'center',
    },

    // Texto de cada registro.
    boxText: {
        fontSize: 16,
        color: '#333333',
        textAlign: 'center',
    },

});