import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles";

const Lab5 = () => {
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground 
            source={require('../../assets/sea.jpg')}
            style={styles.image}>
                <View style={styles.details}>
                    <Text style={styles.text}>
                        <Text style={styles.firstLine}>Discover {'\n'}</Text>
                        <Text style={styles.secondLine}>world with us</Text>
                    </Text>
                    <Text style={styles.textStyles}> Discover world with us</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text>Get Stated</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Lab5;