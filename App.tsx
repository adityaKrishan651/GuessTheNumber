import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import appStyles from './stylesheets/appStyles';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen chosenNumber={userNumber} />;
  }

  return (
    <View style={appStyles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({});
