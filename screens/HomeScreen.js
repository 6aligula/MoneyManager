import React, { useState } from 'react';
import { Button, View, SafeAreaView, TextInput, Text, ScrollView, FlatList } from 'react-native';
import { saveExpense, saveIncome, mostrarTodo, deleteExpense, deleteIncome } from './functions/functionsHome';
import styles from './styles/HomeScreen';
import Toast from 'react-native-toast-message';

const HomeScreen = ({ navigation }) => {
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputNameIncome, setInputNameIncome] = useState('');
    const [inputAmountIncome, setInputAmountIncome] = useState('');
    const [deleteId, setDeleteId] = useState('');
    const [deleteIdIncome, setDeleteIdIncome] = useState('');

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        value={inputName}
                        onChangeText={setInputName}
                        placeholder="Nombre del gasto"
                        placeholderTextColor="#34495e"
                        style={styles.input}
                    />
                    <TextInput
                        value={inputAmount}
                        onChangeText={setInputAmount}
                        placeholder="Cantidad del gasto"
                        placeholderTextColor="#34495e"
                        style={styles.input}
                        keyboardType="numeric"
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.roundedButton}
                            title="Guardar Gasto"
                            onPress={() => {
                                if (inputName === "" || inputAmount === "") {
                                    Toast.show({
                                        type: 'error',
                                        position: 'bottom',
                                        text1: 'Los campos no pueden estar vacíos',
                                        visibilityTime: 3000,
                                        autoHide: true,
                                    });
                                } else {
                                    saveExpense(inputName, inputAmount, setInputName, setInputAmount);
                                    Toast.show({
                                        type: 'success',
                                        position: 'bottom',
                                        text1: 'Gasto guardado correctamente',
                                        visibilityTime: 3000,
                                        autoHide: true,
                                    });
                                }
                            }}
                        />

                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.container}>
                        <TextInput
                            value={inputNameIncome}
                            onChangeText={setInputNameIncome}
                            placeholder="Nombre del ingreso"
                            placeholderTextColor="#34495e"
                            style={styles.input}
                        />
                        <TextInput
                            value={inputAmountIncome}
                            onChangeText={setInputAmountIncome}
                            placeholder="Cantidad del ingreso"
                            placeholderTextColor="#34495e"
                            style={styles.input}
                            keyboardType="numeric"
                        />
                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.roundedButton}
                                title="Guardar Ingreso"
                                onPress={() => {
                                    if (inputNameIncome === "" || inputAmountIncome === "") {
                                        Toast.show({
                                            type: 'error',
                                            position: 'bottom',
                                            text1: 'Los campos no pueden estar vacíos',
                                            visibilityTime: 3000,
                                            autoHide: true,
                                        });
                                    } else {
                                        saveIncome(inputNameIncome, inputAmountIncome, setInputNameIncome, setInputAmountIncome);
                                        Toast.show({
                                            type: 'success',
                                            position: 'bottom',
                                            text1: 'Ingreso guardado correctamente',
                                            visibilityTime: 3000,
                                            autoHide: true,
                                        });

                                    }
                                }}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <TextInput
                        value={deleteId}
                        onChangeText={setDeleteId}
                        placeholder="nombre de gasto borrar"
                        placeholderTextColor="#34495e"
                        style={styles.input}
                        keyboardType="numeric"
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.roundedButton}
                            title="Borrar Gasto"
                            onPress={() => {
                                if (deleteId === "") {
                                    Toast.show({
                                        type: 'error',
                                        position: 'bottom',
                                        text1: 'Los campos no pueden estar vacíos',
                                        visibilityTime: 3000,
                                        autoHide: true,
                                    });
                                } else {
                                    deleteExpense(deleteId, setDeleteId);
                                    Toast.show({
                                        type: 'success',
                                        position: 'bottom',
                                        text1: 'Borrado correctamente',
                                        visibilityTime: 3000,
                                        autoHide: true,
                                    });
                                }

                            }}
                        />
                    </View>
                    <TextInput
                        value={deleteIdIncome}
                        onChangeText={setDeleteIdIncome}
                        placeholder="id de ingreso a borrar"
                        placeholderTextColor="#34495e"
                        style={styles.input}
                        keyboardType="numeric"
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.roundedButton}
                            title="Borrar Ingreso"
                            onPress={() => {
                                if (deleteIdIncome === "") {
                                    Toast.show({
                                        type: 'error',
                                        position: 'bottom',
                                        text1: 'Los campos no pueden estar vacíos',
                                        visibilityTime: 3000,
                                        autoHide: true,
                                    });
                                } else {
                                    deleteIncome(deleteIdIncome, setDeleteIdIncome);
                                    Toast.show({
                                        type: 'success',
                                        position: 'bottom',
                                        text1: 'Borrado correctamente',
                                        visibilityTime: 3000,
                                        autoHide: true,
                                    });
                                }

                            }}
                        />
                    </View>
                </View>


                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.roundedButton}
                        title="Ver balance "
                        onPress={() => navigation.navigate('DetailScreen')}
                    />
                </View>
                {/* ver estructura de los datos */}
                <View style={styles.buttonContainer}>
                    <View style={styles.roundedButton}>
                        <Button
                            title="Ver Estructura"
                            onPress={() => {
                                navigation.navigate('AllData')
                            }}
                        />
                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>

    );
};
export default HomeScreen;