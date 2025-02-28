import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  View,
  Animated,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { Card, Avatar, Divider, List, Surface } from "react-native-paper";
import userData from "./data.json"; 
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

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const slideAnim = useRef(new Animated.Value(100)).current; 

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" />
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={{ opacity: fadeAnim, transform: [{ translateX: slideAnim }] }}
      >
        {userData &&
          userData.map((user, index) => {
            const [scaleAnim] = useState(new Animated.Value(1)); // Gunakan useState untuk menghindari masalah re-render

            return (
              <TouchableWithoutFeedback
                key={index}
                onPressIn={() => Animated.spring(scaleAnim, { toValue: 0.95, useNativeDriver: true }).start()}
                onPressOut={() => Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start()}
              >
                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                  <View style={styles.container}>
                    <Surface style={styles.surface}>
                      <Card style={styles.card} mode="elevated">
                        <Card.Content style={styles.cardContent}>
                          <View style={styles.avatarContainer}>
                            <Avatar.Image size={65} source={getImage(user.photo_url)} />
                            <View style={styles.avatarBorder} />
                          </View>
                          <List.Item
                            title={user.name}
                            description={user.email}
                            titleStyle={styles.titleText}
                            descriptionStyle={styles.descText}
                            style={styles.listItem}
                          />
                        </Card.Content>
                      </Card>
                    </Surface>
                    {index !== userData.length - 1 && <Divider style={styles.divider} />}
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            );
          })}
      </Animated.ScrollView>
    </View>
  );
};
