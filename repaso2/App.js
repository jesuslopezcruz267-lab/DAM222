// ======================================================
 // 1. ZONA DE IMPORTACIONES
 // ======================================================

import React, { useState, useEffect } from 'react';

import { View, Text, TextInput, Pressable, ImageBackground, ActivityIndicator, FlatList, Alert, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';


// ======================================================
// 2. ZONA PRINCIPAL (MAIN)
// ======================================================

export default function App() {

    // --------------------------------------------------
    // 2.1 ESTADOS Y DATOS
    // --------------------------------------------------

    // Estado para controlar la pantalla de bienvenida
    const [mostrarSplash, setMostrarSplash] = useState(true);

    // Estado para controlar el indicador de carga
    const [cargando, setCargando] = useState(false);

    // Estados para capturar los datos del libro
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');

    // Estado para almacenar los libros registrados
    const [libros, setLibros] = useState([]);


    // --------------------------------------------------
    // 2.2 CONTROL DE LA PANTALLA DE BIENVENIDA
    // --------------------------------------------------

    useEffect(() => {

        const temporizador = setTimeout(() => {
            setMostrarSplash(false);
        }, 2000);

        // Limpiar el temporizador al desmontar el componente
        return () => clearTimeout(temporizador);

    }, []);


    // --------------------------------------------------
    // 2.3 FUNCIÓN PARA REGISTRAR LIBROS
    // --------------------------------------------------

    const agregarLibro = () => {

        // Validar que los campos no estén vacíos
        if (
            titulo.trim() === '' ||
            autor.trim() === '' ||
            genero.trim() === ''
        ) {
            Alert.alert(
                'Campos obligatorios',
                'Por favor, completa todos los campos.'
            );
            return;
        }

        // Crear el objeto con los datos del libro
        const nuevoLibro = {
            id: Date.now().toString(),
            titulo: titulo.trim(),
            autor: autor.trim(),
            genero: genero.trim()
        };

        // Activar el indicador de carga
        setCargando(true);

        // Simular un proceso de carga de cuatro segundos
        setTimeout(() => {

            // Agregar el libro a la lista
            setLibros((librosAnteriores) => [
                ...librosAnteriores,
                nuevoLibro
            ]);

            // Limpiar los campos del formulario
            setTitulo('');
            setAutor('');
            setGenero('');

            // Finalizar la carga
            setCargando(false);

            // Mostrar mensaje de confirmación
            Alert.alert(
                'Registro exitoso',
                'El libro se agregó correctamente.'
            );

        }, 4000);
    };


    // --------------------------------------------------
    // 2.4 PANTALLAS DE LA APLICACIÓN
    // --------------------------------------------------

    // Mostrar pantalla de bienvenida
    if (mostrarSplash) {
        return (
            <ImageBackground
                source={{
                    uri: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66'
                }}
                style={styles.fondo}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <Text style={styles.titulo}>
                        Registro de Libros Leídos
                    </Text>

                    <Text style={styles.subtitulo}>
                        Bienvenido a tu biblioteca personal
                    </Text>
                </View>
            </ImageBackground>
        );
    }


    // Pantalla principal
    return (
        <ImageBackground
            source={{
                uri: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66'
            }}
            style={styles.fondo}
            resizeMode="cover"
        >

            <StatusBar style="light" />

            <View style={styles.contenedor}>

                <Text style={styles.titulo}>
                    Registro de Libros Leídos
                </Text>

                <Text style={styles.subtitulo}>
                    Agrega tus libros favoritos
                </Text>

                {/* FORMULARIO DE REGISTRO */}

                <TextInput
                    style={styles.input}
                    placeholder="Título del libro"
                    value={titulo}
                    onChangeText={setTitulo}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Autor"
                    value={autor}
                    onChangeText={setAutor}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Género"
                    value={genero}
                    onChangeText={setGenero}
                />

                {/* BOTÓN PARA AGREGAR LIBRO */}

                <Pressable
                    style={styles.boton}
                    onPress={agregarLibro}
                    disabled={cargando}
                >
                    <Text style={styles.textoBoton}>
                        Agregar libro
                    </Text>
                </Pressable>

                {/* INDICADOR DE CARGA */}

                {cargando && (
                    <ActivityIndicator
                        size="large"
                        color="#ffffff"
                    />
                )}

                {/* LISTA DE LIBROS REGISTRADOS */}

                <Text style={styles.subtitulo}>
                    Mis libros
                </Text>

                <FlatList
                    data={libros}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.libro}>
                            <Text style={styles.textoLibro}>
                                Título: {item.titulo}
                            </Text>

                            <Text style={styles.textoLibro}>
                                Autor: {item.autor}
                            </Text>

                            <Text style={styles.textoLibro}>
                                Género: {item.genero}
                            </Text>
                        </View>
                    )}
                    ListEmptyComponent={
                        <Text style={styles.listaVacia}>
                            Todavía no hay libros registrados.
                        </Text>
                    }
                />

            </View>

        </ImageBackground>
    );

}

// ======================================================
// 3. ZONA DE ESTILOS (STYLES)
// ======================================================

const styles = StyleSheet.create({

    // Estilo para la imagen de fondo
    fondo: {
        flex: 1,
    },

    // Estilo para la capa semitransparente
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    // Contenedor principal de la aplicación
    contenedor: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        padding: 20,
        paddingTop: 40,
    },

    // Estilo para los títulos
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 15,
    },

    // Estilo para los subtítulos
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 15,
        marginBottom: 12,
    },

    // Estilo para los campos de captura
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        fontSize: 15,
    },

    // Estilo para el botón de registro
    boton: {
        backgroundColor: '#2471A3',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 15,
    },

    // Estilo para el texto del botón
    textoBoton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    // Estilo para cada libro registrado
    libro: {
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
    },

    // Estilo para la información de cada libro
    textoLibro: {
        color: '#222222',
        fontSize: 14,
        marginBottom: 4,
    },

    // Estilo para el mensaje de lista vacía
    listaVacia: {
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 15,
    },

});
