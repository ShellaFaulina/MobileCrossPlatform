import * as React from "react";  
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native"; 
import Email from "./Email";
import HomeScreen from "./HomeScreen";
import Profile from "./Profile";
import UserList from "./UserList";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F5E6CC",
  },
};

export default function App() {
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
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                  User List
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                  <Text style={{ color: "#FFD700", fontSize: 16, fontWeight: "bold", marginLeft: 10 }}>
                    Home
                  </Text>
                </TouchableOpacity>
              </View>
            ),
            headerBackTitle: "Back",
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
