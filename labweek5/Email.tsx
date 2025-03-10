import { Button, Text, View, TouchableOpacity } from "react-native";
import styles from "./App.styles";

const Email = ({ navigation }) => {
    return (
        <View style={styles.homeContainer}>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.buttonText}>GO HOME</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Email;
