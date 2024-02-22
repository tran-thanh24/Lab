import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import React, { useState } from "react";

const ListUser = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selecttedUser, setSelectedUser] = useState(undefined);

    const getAPI = async () => {
        const url = 'http://192.168.1.7:3000/users';
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result);
        }
    };

    const handleDelete = async id => {
        const url = 'http://192.168.1.7:3000/users';
        let result = await fetch(`${url}/${id}`, {
            method: 'Delete',
        });
        result = await result.json();
        if (result) {
            getAPI();
        }
    };

    const handleUpdate = data => {
        console.log("update");
    };

    React.useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            getAPI();
        });
        return focusHandler;
    }, [navigation]);

    return (
        <ScrollView>
            <TouchableOpacity style={styles.buttonNew} onPress={() => navigation('AddUser')}>
                <Text style={styles.buttonText}> Add New </Text>
            </TouchableOpacity>

            {
                data.length ? data.map((item, index) => (
                    <View style={styles.container} key={index}>
                        <View style={styles.containerText}>
                            <Text style={styles.name}> {item.name} </Text>
                            <Text style={styles.birthday}> {item.birthday} </Text>
                        </View>
                        <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText} onPress={() => handleUpdate(item)}>
                                    update
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText} onPress={() => handleDelete(item)}>
                                    delete
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                )) : null
            }
            <Modal visible = {openDialog} transparent={true}>

            </Modal>
        </ScrollView>
    );
};

export default ListUser;