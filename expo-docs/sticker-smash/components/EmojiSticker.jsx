import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const EmojiSticker = ({ imageSource, emojiWidth, emojiHeight }) => {
  return (
    <View style={styles.stickerContainer}>
      <Image
        source={imageSource}
        style={{ width: emojiWidth, height: emojiHeight }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stickerContainer: {
    position: "absolute",
    top: 10,
  },
});

export default EmojiSticker;
