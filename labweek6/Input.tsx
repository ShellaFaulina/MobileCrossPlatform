import React from "react";
import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: 250,
  },
});

export default Input;
