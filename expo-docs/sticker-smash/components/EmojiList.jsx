import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Platform,
} from "react-native";
import React, { useState } from "react";

const EMOJI_LIST = [
  require("../assets/images/emoji1.png"),
  require("../assets/images/emoji2.png"),
  require("../assets/images/emoji3.png"),
  require("../assets/images/emoji4.png"),
  require("../assets/images/emoji5.png"),
  require("../assets/images/emoji6.png"),
];

const EmojiList = ({ onSelect, onModalClose }) => {
  const [emoji] = useState(EMOJI_LIST);

  return (
    <FlatList
      data={emoji}
      horizontal
      showHorizontalScrollIndicator={Platform.OS === "web"}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onModalClose();
          }}
        >
          <Image source={item} key={index} style={styles.emoji} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
    paddingHorizontal: 20,
  },
  emoji: {
    width: 120,
    height: 120,
  },
});

export default EmojiList;
