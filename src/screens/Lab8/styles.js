import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#B0E0E0',
        borderRadius: 4,
        padding: 16,
        margin: 10,
    },
    containerText: {
        flexDirection: 'row',
        backgroundColor: '#B0E0E0',
        borderRadius: 4,
        padding: 16,
        margin: 10,
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonNew: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginHorizontal: 4,
        backgroundColor: 'blue',
        marginBottom: 8,
        marginTop: 8,
    },
    name: {
        textAlign: 'left',
        marginRight: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
    },
    birthday: {
        textAlign: 'right',
        marginRight: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginHorizontal: 4,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});