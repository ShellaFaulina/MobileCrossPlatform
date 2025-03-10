import styles from "./App.styles";
import { View, Text, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.homeContainer}>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => navigation.navigate("Email")}
            >
                <Text style={styles.buttonText}>Email</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => navigation.navigate("UserList")}
            >
                <Text style={styles.buttonText}>UserList</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
