import {
  View,
  Text,
  Alert,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import Person from "./components/Person";
import MyImagePicker from "./components/ImagePicker";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First Expo App</Text>
      <Button title="Click me" onPress={() => Alert.alert("You clicked!")} />
      <MyImagePicker />
      {/* <ScrollView>
        {[...Array(50).keys()].map((_, i) => (
          <Person key={i} name={(i + 1).toString()} />
        ))}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "700",
    color: "#eee",
  },
});

export default Home;
