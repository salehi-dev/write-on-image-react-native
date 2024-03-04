import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomText from "./style/CustomText";

const ImageProvide = ({ subject, weight, price }) => {
  return (
    <View style={{ position: "relative" }}>
      <Image source={require("../assets/image.png")} style={styles.image} />
      <View style={styles.textContainer}>
        <CustomText>
          Product: <Text style={styles.subText}>{subject}</Text>
        </CustomText>
        <CustomText>
          Price: <Text style={styles.subText}>{price}</Text>
        </CustomText>
        <CustomText>
          Weight: <Text style={styles.subText}>{weight}</Text>
        </CustomText>
      </View>
    </View>
  );
};
export default ImageProvide;

const styles = StyleSheet.create({
  textContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 5,
  },
  image: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    borderColor: "rgba(0, 0, 0, 0.4)",
  },
  subText: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.6)",
  },
});
