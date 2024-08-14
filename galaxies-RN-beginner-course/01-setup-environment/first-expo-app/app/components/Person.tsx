import { View, Text } from "react-native";
import React from "react";

interface PersonProps {
  name: string;
}

const Person = ({ name }: PersonProps) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: "#eee", marginVertical: 10 }}>Person {name}</Text>
    </View>
  );
};

export default Person;
