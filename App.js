import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ImageProvide from "./src/ImageProvide";
import CustomTextInput from "./src/style/CustomTextInput";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    subject: "",
    price: "",
    weight: "",
  });
  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomTextInput
        placeholder="Enter subject"
        target="subject"
        formData={formData}
        handleInputChange={handleInputChange}
      />
      <View style={styles.twoInputContainer}>
        <CustomTextInput
          placeholder="Enter price"
          keyboardType="numeric"
          target="price"
          formData={formData}
          handleInputChange={handleInputChange}
          style={styles.twoInput}
        />
        <CustomTextInput
          placeholder="Enter weight"
          keyboardType="numeric"
          target="weight"
          formData={formData}
          handleInputChange={handleInputChange}
          style={styles.twoInput}
        />
      </View>
      <ImageProvide
        subject={formData.subject}
        price={formData.price}
        weight={formData.weight}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    padding: 30,
  },
  twoInputContainer: {
    flexDirection: "row",
    marginBottom: 40,
    marginTop: 10,
    gap: 6,
  },
  twoInput: {
    width: "50%",
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
