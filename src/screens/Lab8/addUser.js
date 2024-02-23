import { Text, View, TouchableOpacity, TextInput } from "react-native";
import {styles} from './styles';
import { useState } from "react";

const AddUser = () => {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');


    const saveData = async () => {
        const url = 'http://172.16.48.156:3000/users';
        let result = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, birthday }),

        });
        result = await result.json();
        if (result) {
            console.warn("Add success");
        }
    }
    return (
        <View style={styles.modelContent}>
            <TextInput style={styles.input}
                placeholder="Enter name"
                value={name}
                onChangeText={text => setName(text)}></TextInput>

            <TextInput style={styles.input}
                placeholder="Enter birthday"
                value={birthday}
                onChangeText={text => setBirthday(text)}></TextInput>
            <View style={styles.buttonGroup}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={saveData}
                >
                    <Text style={styles.buttonText}>Add new</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddUser;