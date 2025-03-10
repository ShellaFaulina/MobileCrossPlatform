import React, { useState, useEffect } from "react";
import { ScrollView, View, TouchableOpacity, Image, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import styles from "./App.styles";
import userData from "./data.json";

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
    <ScrollView contentContainerStyle={styles.container}>
      {userData.map((user) => (
        <View style={styles.userList} key={user.email}>
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate("Profile", { user })}
          >
            <Image 
              source={getImage(user.photo_url)}  
              style={styles.avatar} 
              resizeMode="cover" 
            />
            <View style={styles.cardText}>
              <Text style={styles.boldText}>{user.name}</Text>
              <Text style={styles.description}>{user.email}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default UserList;
