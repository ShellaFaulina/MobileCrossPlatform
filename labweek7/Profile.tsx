import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import styles from "./App.styles";
import imageMapping from "./imageMapping";

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <View style={styles.homeContainer}>
      <Animated.Image
        entering={FadeInUp.duration(800)}
        source={imageMapping(user.photo_url)} 
        style={styles.avatar}
      />
      <Animated.Text
        entering={FadeInUp.duration(100).delay(50)}
        style={styles.boldText}
      >
        {user.name}
      </Animated.Text>

      <Animated.Text
        entering={FadeInUp.duration(300).delay(80)}
        style={styles.description}
      >
        {user.email}
      </Animated.Text>

      <Animated.View entering={FadeInUp.duration(600).delay(100)}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("UserList")}
        >
          <Text style={styles.buttonText}>GO BACK</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ProfileScreen;