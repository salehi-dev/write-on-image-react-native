import React from "react";
import { StyleSheet, Text } from "react-native";

export default function CustomText(props) {
  return <Text style={[props.style, styles.text]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    padding: 5,
    fontSize: 14,
    fontWeight: "600",
  },
});
