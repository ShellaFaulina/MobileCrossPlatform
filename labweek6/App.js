import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [output, setOutput] = useState(""); 

  const handleShowOutput = () => {
    if (name && nim) {
      setOutput(`${name} - ${nim}`);
    } else {
      setOutput("Error: Please fill in both Name and NIM");
    }
  };

  return (
    <View style={styles.container}>
      {/* Input Nama */}
      <TextInput
        style={styles.input}
        placeholder="Input your name"
        value={name}
        onChangeText={setName}
      />

      {/* Input NIM */}
      <TextInput
        style={styles.input}
        placeholder="Input your NIM"
        value={nim}
        onChangeText={setNim}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleShowOutput}>
        <Text style={styles.buttonText}>Input</Text>
      </TouchableOpacity>
      {output !== "" && <Text style={styles.output}>{output}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  output: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
