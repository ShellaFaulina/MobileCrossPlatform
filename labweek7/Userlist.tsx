import React, { useState, useEffect } from "react";
import { ScrollView, View, TouchableOpacity, Image, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import Animated, { FadeInRight, FadeInLeft } from "react-native-reanimated";
import styles from "./App.styles";
import userData from "./data.json";
import imageMapping from "./imageMapping";

const UserList = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#8B7765" />
        <Text style={{ marginTop: 10, color: "#8B7765", fontSize: 16, fontWeight: "bold" }}>
          Loading Users...
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} keyboardShouldPersistTaps="handled">
        {userData.map((user, index) => (
          <Animated.View
            key={user.email}
            entering={
              index % 2 === 0
                ? FadeInLeft.delay(index * 200) 
                : FadeInRight.delay(index * 200) 
            }
            style={styles.userList}
          >
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Profile", { user })}>
            <Image source={imageMapping(user.photo_url)} style={styles.avatar} />
              <View style={styles.cardText}>
                <Text style={styles.boldText}>{user.name}</Text>
                <Text style={styles.description}>{user.email}</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UserList;
