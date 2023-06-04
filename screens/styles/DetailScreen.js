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
    }

});
export default styles;