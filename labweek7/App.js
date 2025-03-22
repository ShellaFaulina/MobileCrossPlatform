import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, Animated, useWindowDimensions } from "react-native";
import Email from "./Email";
import HomeScreen from "./HomeScreen";
import Profile from "./Profile";
import UserList from "./Userlist";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F5E6CC",
  },
};

// Komponen Tombol Home dengan Animasi Kedip
const HomeButton = ({ navigation }) => {
  const fadeAnim = new Animated.Value(1);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 100, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start(() => {
      navigation.navigate("Home");
    });
  };

  return (
    <Pressable onPress={handlePress} style={{ padding: 10 }}>
      <Animated.Text style={{ color: "#FFD700", fontSize: 16, fontWeight: "bold", opacity: fadeAnim }}>
        Home
      </Animated.Text>
    </Pressable>
  );
};

export default function App() {
  const { width, height } = useWindowDimensions(); 
  const orientation = width > height ? "landscape" : "portrait"; 

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#8B7765" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({ navigation }) => ({
            headerTitle: `User List (${orientation})`, 
            headerRight: () => <HomeButton navigation={navigation} />,
            headerBackTitle: "Back",
            gestureEnabled: true, 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
