import React from "react";
import { View, Text, StyleSheet } from "react-native";
import headerStyles from "../stylesheets/headerStyles";

const Header = (props: { title: string }) => {
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;
