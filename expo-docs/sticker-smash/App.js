import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "./components/ImageViewer";
import PlaceholderImage from "./assets/images/background-image.png";
import MyButton from "./components/MyButton";
import * as ImagePicker from "expo-image-picker";
import CircleAddButton from "./components/CircleAddButton";
import IconButton from "./components/IconButton";
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from "./components/EmojiList";
import EmojiSticker from "./components/EmojiSticker";

export default function App() {
  const [selectdImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const displayImg = selectdImage ? { uri: selectdImage } : PlaceholderImage;

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else return;
  };

  const onReset = () => {
    setSelectedImage(null);
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer img={displayImg} />
        {selectdImage && (
          <EmojiSticker
            imageSource={selectedEmoji}
            emojiWidth={50}
            emojiHeight={50}
          />
        )}
      </View>

      {showAppOptions ? (
        <View style={styles.appOptionsContainer}>
          <View style={styles.appOptions}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleAddButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={() => {}} />

            {/* <Text>Options</Text> */}
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <MyButton
            label="Choose a picture"
            type="primary"
            onPress={pickImage}
            selectdImage={selectdImage}
          />
          <MyButton
            label="Use default"
            onPress={() => {
              setSelectedImage(null);
              setShowAppOptions(true);
            }}
          />
        </View>
      )}

      <EmojiPicker visible={isModalVisible} onModalClose={onModalClose}>
        <EmojiList onSelect={setSelectedEmoji} onModalClose={onModalClose} />
      </EmojiPicker>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    marginTop: 60,
    // backgroundColor: "red",
  },
  appOptionsContainer: {
    flex: 1 / 3,
    width: 250,
    // backgroundColor: "yellow",
  },
  appOptions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerContainer: {
    // backgroundColor: "yellow",
    flex: 1 / 3,
    rowGap: 15,
    alignItems: "center",
  },
});
