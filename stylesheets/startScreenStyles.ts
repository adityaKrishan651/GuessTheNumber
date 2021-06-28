import { StyleSheet } from "react-native";

const startScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 350,
    maxWidth: "95%",
    alignItems: "center",
  },
  cardButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marrginTop: 20,
    alignItems: "center",
  },
});

export default startScreenStyles;
