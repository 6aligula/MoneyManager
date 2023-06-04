import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, FlatList, Button } from 'react-native';
import styles from './styles/DetailScreen';
import Collapsible from 'react-native-collapsible';
import { mostrarTodo } from './functions/functionsHome';


const AllData = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [showSecondButton, setShowSecondButton] = useState(false); // Nuevo estado
    const [storageData, setStorageData] = useState([]);
    useEffect(() => {
        mostrarTodo(setStorageData);
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            {showSecondButton && <Button title="Mostrar" onPress={() => {
                setIsCollapsed(false)
                mostrarTodo(setStorageData);
            }} />}
            <Collapsible collapsed={!isCollapsed}>
                <FlatList
                    data={storageData}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.text}>{item.key}</Text>
                            {/* <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>{item.amount}</Text> */}
                            <Text style={styles.text}>{JSON.stringify(item.value, null, 2)}</Text>
                        </View>
                    )}
                />
                <Button
                    title="Toggle Collapsible"
                    onPress={() => {
                        setIsCollapsed(!isCollapsed);
                        setShowSecondButton(true);
                    }}
                />
            </Collapsible>
        </SafeAreaView>

    );
};

export default AllData;
