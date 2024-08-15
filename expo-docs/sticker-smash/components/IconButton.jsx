import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const IconButton = ({ icon, label, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <MaterialIcons name={icon} size={25} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {},
  button: {
    alignItems: "center",
    rowGap: 10,
  },
  icon: {
    color: "#eee",
  },
  label: {
    color: "#eee",
    fontSize: 16,
  },
});

export default IconButton;
