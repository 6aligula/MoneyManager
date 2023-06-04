import AsyncStorage from '@react-native-async-storage/async-storage';

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

