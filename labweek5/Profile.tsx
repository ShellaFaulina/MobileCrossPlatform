import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import styles from "./App.styles";

const getImage = (photoUrl) => {
  const images = {
    "silvi.jpg": require("./assets/silvi.jpg"),
    "shella.jpg": require("./assets/shella.jpg"),
    "Mingyu.jpg": require("./assets/Mingyu.jpg"),
    "yoongi.jpg": require("./assets/yoongi.jpg"),
    "wi hajun.jpg": require("./assets/wi hajun.jpg"),
    "jan.jpg": require("./assets/jan.jpg"),
    "davikah.jpg": require("./assets/davikah.jpg"),
    "newwie.jpg": require("./assets/newwie.jpg"),
  };
  return images[photoUrl] || require("./assets/silvi.jpg"); 
};

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <View style={styles.homeContainer}>
      <Image source={getImage(user.photo_url)} style={styles.avatar} />
      <Text style={styles.boldText}>{user.name}</Text>
      <Text style={styles.description}>{user.email}</Text>
      <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => navigation.navigate("UserList")}
            >
                <Text style={styles.buttonText}>GO BACK</Text>
            </TouchableOpacity>
      </View>
  );
};

export default ProfileScreen;
