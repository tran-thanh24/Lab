import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import {styles} from './styles'

const ViewComponent = () => {
    const [name, setName] = useState(' ');
    return(
        <View styles={styles.container}>
            <TextInput 
            value={name}
            onChangeText={setName}
            placeholder="Nhap ho ten"
            style={styles.tipStyle}>

            </TextInput>
            <Text style={styles.baseText}>
                Em vao doi bang {' '}
                <Text style={[styles.boldText, colorText('red')]}>vang do</Text>
            </Text>
        </View>
    );
};

export default ViewComponent;

const colorText = color => ({
    color,
});