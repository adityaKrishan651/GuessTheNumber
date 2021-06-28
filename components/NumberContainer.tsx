import React from "react";
import { View, Text } from "react-native";
import numberContainerStyles from "../stylesheets/numberContainerStyles";

const NumberContainer = (props: { children: React.ReactNode }) => {
  return (
    <View style={numberContainerStyles.container}>
      <Text style={numberContainerStyles.number}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;
