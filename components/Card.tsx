import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import cardStyles from "../stylesheets/cardStyles";

const Card = (props: { children: React.ReactNode; style: any }) => {
  return (
    <View style={{ ...cardStyles.card, ...props.style }}>{props.children}</View>
  );
};

export default Card;
