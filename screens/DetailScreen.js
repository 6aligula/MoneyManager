import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles/DetailScreen';

const DetailScreen = () => {
    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const storedExpenses = await AsyncStorage.getItem('expenses');
            const storedIncomes = await AsyncStorage.getItem('incomes');
            setExpenses(storedExpenses ? JSON.parse(storedExpenses) : []);
            setIncomes(storedIncomes ? JSON.parse(storedIncomes) : []);
        };

        fetchData();
    }, []);

    const totalExpenses = expenses.reduce((acc, cur) => acc + cur.amount, 0);
    const totalIncomes = incomes.reduce((acc, cur) => acc + cur.amount, 0);
    const surplus = totalIncomes - totalExpenses;

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.title}>Gastos</Text>
                    {expenses.map((expense, index) => (
                        <Text key={index} style={styles.text}>{expense.name}: {expense.amount}</Text>
                    ))}
                    <Text style={styles.text}>Gastos totales: {totalExpenses}</Text>

                    <Text style={styles.title}>Ingresos</Text>
                    {incomes.map((income, index) => (
                        <Text key={index} style={styles.text}>{income.name}: {income.amount}</Text>
                    ))}
                    <Text style={styles.text}>Ingresos totales: {totalIncomes}</Text>

                    <Text style={styles.title}>Superávit:</Text>
                    <Text style={styles.text}> {surplus}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

export default DetailScreen;
