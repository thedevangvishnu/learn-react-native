import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const CircleAddButton = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <MaterialIcons name="add" size={40} style={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: "yellow",
    padding: 3,
    borderRadius: 50,
  },
  button: {
    width: "100%",
    height: "100%",
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  icon: {},
});

export default CircleAddButton;
