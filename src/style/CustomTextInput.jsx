import React from "react";
import { TextInput, StyleSheet } from "react-native";
export default function CustomTextInput({
  placeholder,
  target,
  formData,
  handleInputChange,
  keyboardType,
  style,
}) {
  return (
    <TextInput
      keyboardType={keyboardType || "default"}
      style={[styles.input, style]}
      placeholder={placeholder}
      value={formData[target]}
      onChangeText={(text) => handleInputChange(target, text)}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: "100%",
    height: 40,
    padding: 5,
    margin: 6,
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 6,
  },
});
