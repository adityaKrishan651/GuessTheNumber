import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import gameScreenStyles from '../stylesheets/gameScreenStyles';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum: number = Math.round(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props: { chosenNumber: number }) => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  // const [tries, setTries] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      props.chosenNumber
    )
  );

  useEffect(() => {
    if (currentGuess === props.chosenNumber) {
      Alert.alert('Game Over', 'The Computer guessed your number in ');
    }
  });

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < props.chosenNumber) ||
      (direction === 'greater' && currentGuess > props.chosenNumber)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
      console.log(`High: ${currentHigh.current}`);
    } else {
      currentLow.current = currentGuess;
      console.log(`Low: ${currentLow.current}`);
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={gameScreenStyles.screen}>
      <Text>Opponents's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={gameScreenStyles.buttonContainer}>
        <Button title='LOWER' onPress={nextGuessHandler.bind(this, 'lower')} />

        <Button
          title='GREATER'
          onPress={nextGuessHandler.bind(this, 'greater')}
        />
      </Card>
    </View>
  );
};

export default GameScreen;
