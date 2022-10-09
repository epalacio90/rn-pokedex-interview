import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import PokemonDex from './components/PokemonDex';
import {useState} from "react";
import Pokemon from "./components/Pokemon";

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState()
  const [screen, setScreen] = useState('pokedex')

  return (
    <View style={styles.container}>
      {screen === 'pokedex' && <PokemonDex setScreen={setScreen} setSelectedPokemon={setSelectedPokemon} />}
      {screen === 'pokemon' && <Pokemon setScreen={setScreen} selectedPokemon={selectedPokemon} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
