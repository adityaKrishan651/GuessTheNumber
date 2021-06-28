import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import gameScreenStyles from "../stylesheets/gameScreenStyles";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum: number = Math.floor(Math.random() * (max - min));

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props: { chosenNumber: number }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.chosenNumber)
  );

  return (
    <View style={gameScreenStyles.screen}>
      <Text>Opponents's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={gameScreenStyles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GREATER" onPress={() => {}} />
      </Card>
    </View>
  );
};

export default GameScreen;
