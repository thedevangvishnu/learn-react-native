import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const EmojiPicker = ({ visible, onModalClose, children }) => {
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.headerTitle}>Choose a sticker</Text>
          <Pressable onPress={onModalClose}>
            <MaterialIcons name="close" size={16} style={styles.headerIcon} />
          </Pressable>
        </View>
        <View style={styles.modalBody}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    bottom: 0,
    height: "25%",
    width: "100%",
    backgroundColor: "#333",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    width: "100%",
    // height: 20,
    backgroundColor: "#111",
    paddingHorizontal: 20,
    paddingVertical: 10,
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#eee",
  },
  headerIcon: {
    color: "#eee",
  },
  modalBody: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default EmojiPicker;
