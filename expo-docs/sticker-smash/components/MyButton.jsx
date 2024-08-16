import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const MyButton = ({ label, type, onPress, setSelectedEmoji }) => {
  if (type !== "primary") {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.buttonContainer, { borderColor: "yellow" }]}>
      <Pressable
        style={[styles.button, { backgroundColor: "#eee" }]}
        onPress={onPress}
      >
        <FontAwesome name="picture-o" size={16} style={styles.buttonIcon} />
        <Text style={[styles.buttonText, { color: "#111" }]}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 250,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    backgroundColor: "#333",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "transparent",
  },
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonIcon: {
    paddingRight: 5,
  },
  buttonText: {
    color: "#eee",
    fontSize: 16,
  },
});

export default MyButton;
