import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    details: {
        marginLeft: 80,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    text: {
        textAlign: "left",
        paddingBottom: 20,
    },
    firstLine: {
        color: 'white',
        fontSize: 30,
    },
    secondLine: {
        color: 'white',
        fontSize: 30,
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    textStyles: {
        fontSize: 15,
        color: 'white',
        paddingBottom: 30,
    }
});