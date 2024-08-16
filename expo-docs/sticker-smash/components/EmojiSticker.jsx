import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const EmojiSticker = ({ imageSource, imageSize, selectdImage }) => {
  const scaleImage = useSharedValue(imageSize);
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      scaleImage.value =
        scaleImage.value !== imageSize * 2 ? imageSize * 2 : imageSize;
    });
  const imageStyle = useAnimatedStyle(() => ({
    width: withSpring(scaleImage.value),
    height: withSpring(scaleImage.value),
  }));

  useEffect(() => {
    scaleImage.value = imageSize;
    translateX.value = 0;
    translateY.value = 0;
  }, [selectdImage]);

  //   pan effect
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        translateY: translateY.value,
      },
    ],
  }));

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, styles.stickerContainer]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={imageSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  stickerContainer: {
    top: "-20%",
    left: "35%",
  },
});

export default EmojiSticker;
