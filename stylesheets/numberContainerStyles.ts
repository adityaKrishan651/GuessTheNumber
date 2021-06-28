import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Color from "../constants/colors";

const numberContainerStyles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accentColor,
    fontSize: 22,
  },
});

export default numberContainerStyles;
