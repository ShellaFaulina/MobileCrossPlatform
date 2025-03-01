import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Profile from "./Profile";

const App = () => {
  const [name, setName] = useState("Anonymous");
  const [age, setAge] = useState(0);
  const [displayName, setDisplayName] = useState("Anonymous");
  const [displayAge, setDisplayAge] = useState(0);

  return (
    <View style={styles.container}>
      <Profile name={displayName} age={displayAge} />

      <Text>{age}</Text>
      <Button title="INCREMENT" onPress={() => setAge(age + 1)} />
      <Button title="DECREMENT" onPress={() => setAge(age > 0 ? age - 1 : 0)} />
      <Button title="PASS VALUE" onPress={() => { setDisplayName(name); setDisplayAge(age); }} />

      <TextInput
        style={styles.input}
        placeholder="Input your name here"
        onChangeText={(text) => setName(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginTop: 10,
    width: 250,
  },
});

export default App;
