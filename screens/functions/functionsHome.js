import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '@env';

const getAllData = async () => {
    try {
        // Claves que nos interesan: 'expenses' y 'incomes'
        const keys = ['expenses', 'incomes'];
        const result = await AsyncStorage.multiGet(keys);

        // Obtener mes y año del mes anterior
        let currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 1);
        const previousMonth = currentDate.getMonth();
        const previousYear = currentDate.getFullYear();

        let expenses = [];
        let incomes = [];

        result.forEach(([key, value]) => {
            if (value) {
                try {
                    let parsedValue = JSON.parse(value);

                    // Filtrar elementos según el mes y año
                    let filteredItems = parsedValue.filter(item => {
                        if (!item.id) return false;
                        const itemDate = new Date(item.id);
                        return (
                            itemDate.getMonth() === previousMonth &&
                            itemDate.getFullYear() === previousYear
                        );
                    });

                    // Asignar según la clave
                    if (key === 'expenses') {
                        expenses = filteredItems;
                    } else if (key === 'incomes') {
                        incomes = filteredItems;
                    }
                } catch (error) {
                    console.error(`Error al parsear ${key}:`, error);
                }
            }
        });

        return { expenses, incomes };
    } catch (error) {
        console.error("Error obteniendo datos:", error);
        return { expenses: [], incomes: [] };
    }
};

export const sendDataToServer = async () => {
    try {
        const data = await getAllData();
        if (data.expenses.length === 0 && data.incomes.length === 0) {
            console.log("No hay datos para enviar este mes.");
            return false;
        }
        
        const response = await axios.post(`${API_URL}/saveData`, data);
        console.log(response.data);
        // Una vez enviada la data, se limpian los registros para iniciar el nuevo mes.
        await AsyncStorage.removeItem('expenses');
        await AsyncStorage.removeItem('incomes');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const saveExpense = async (inputName, inputAmount, setInputName, setInputAmount) => {
    try {
        let expense = {
            id: Date.now(),
            name: inputName,
            amount: parseFloat(inputAmount)
        };

        let storedExpenses = await AsyncStorage.getItem('expenses');
        storedExpenses = storedExpenses == null ? [] : JSON.parse(storedExpenses);

        storedExpenses.push(expense);

        await AsyncStorage.setItem('expenses', JSON.stringify(storedExpenses));

        setInputName('');
        setInputAmount('');
    } catch (e) {
        // saving error
    }
};
export const saveIncome = async (inputNameIncome, inputAmountIncome, setInputNameIncome, setInputAmountIncome) => {
    try {
        let income = {
            id: Date.now(),
            name: inputNameIncome,
            amount: parseFloat(inputAmountIncome)
        };

        let storeIncomes = await AsyncStorage.getItem('incomes');
        storeIncomes = storeIncomes == null ? [] : JSON.parse(storeIncomes);

        storeIncomes.push(income);

        await AsyncStorage.setItem('incomes', JSON.stringify(storeIncomes));
        setInputNameIncome('');
        setInputAmountIncome('');
    } catch (e) {
        // saving error
    }
};

export const mostrarTodo = async (setStorageData) => {
    
    try {
        const keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);
        const data = result.map(([key, value]) => ({ key, value: JSON.parse(value) }));
        setStorageData([...data]);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

export const deleteExpense = async (id) => {
    try {
        const storedExpenses = await AsyncStorage.getItem('expenses');
        let expenses = storedExpenses ? JSON.parse(storedExpenses) : [];

        const index = expenses.findIndex(expense => expense.name === id);
        if (index !== -1) {
            expenses.splice(index, 1);  // eliminar el gasto
            await AsyncStorage.setItem('expenses', JSON.stringify(expenses));  // guardar los gastos actualizados
        }
    } catch (error) {
        console.error(error);
    }
};

export const deleteIncome = async (id) => {
    try {
        const storedIncomes = await AsyncStorage.getItem('incomes');
        let incomes = storedIncomes ? JSON.parse(storedIncomes) : [];

        const index = incomes.findIndex(income => income.name === id);
        if (index !== -1) {
            incomes.splice(index, 1);  // eliminar el ingreso
            await AsyncStorage.setItem('incomes', JSON.stringify(incomes));  // guardar los ingresos actualizados
        }
    } catch (error) {
        console.error(error);
    }
};

