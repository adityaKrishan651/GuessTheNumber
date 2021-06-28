import React from "react";
import { View, Text, TextInput } from "react-native";
import inputStyles from "../stylesheets/inputStyles";

const Input = (props: any) => {
  return (
    <TextInput {...props} style={{ ...inputStyles.input, ...props.style }} />
  );
};

export default Input;
