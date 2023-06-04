import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: "#34495e",
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
        color: '#2c3e50',
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: '#34495e',
        marginBottom: 16,
    },
    buttonContainer: {
        marginTop:12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundedButton: {
        backgroundColor: '#007BFF', // Color de fondo del botón (puedes cambiarlo a tu preferencia)
        borderRadius: 25, // Añade bordes redondeados
        overflow: 'hidden', // Oculta el contenido que sobresale de los bordes redondeados
    },

});
export default styles;