import { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import ImageViewer from "./components/ImageViewer";
import PlaceholderImage from "./assets/images/background-image.png";
import MyButton from "./components/MyButton";
import * as ImagePicker from "expo-image-picker";
import CircleAddButton from "./components/CircleAddButton";
import IconButton from "./components/IconButton";
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from "./components/EmojiList";
import EmojiSticker from "./components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import DomToImage from "dom-to-image";

export default function App() {
  const [selectdImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const inputRef = useRef(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

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

  const onImageSaveAsync = async () => {
    if (permissionResponse.status !== "granted") {
      await requestPermission();
    }

    if (Platform.OS !== "web") {
      try {
        const localUri = await captureRef(inputRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved!");
        }
      } catch (error) {
        alert("Something went wrong!");
        console.log(error);
      }
    } else {
      try {
        const localUrl = await DomToImage.toJpeg(inputRef.current, {
          width: 320,
          height: 440,
          quality: 1,
        });

        const link = document.createElement("a");
        link.href = localUrl;
        link.download = "sticker-smash.jpeg";
        link.click();
      } catch (error) {
        alert("Something went wrong!");
        console.log(error);
      }
    }
  };

  const onReset = () => {
    setSelectedImage(null);
    setShowAppOptions(false);
    setSelectedEmoji(null);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={inputRef} collapsable={false}>
          <ImageViewer img={displayImg} />
          {displayImg && (
            <EmojiSticker
              imageSource={selectedEmoji}
              imageSize={50}
              selectdImage={selectdImage}
            />
          )}
        </View>
      </View>

      {showAppOptions ? (
        <View style={styles.appOptionsContainer}>
          <View style={styles.appOptions}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleAddButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onImageSaveAsync}
            />

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
            setSelectedEmoji={setSelectedEmoji}
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
    </GestureHandlerRootView>
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
  },
  appOptionsContainer: {
    flex: 1 / 3,
    width: 250,
  },
  appOptions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerContainer: {
    flex: 1 / 3,
    rowGap: 15,
    alignItems: "center",
  },
});
