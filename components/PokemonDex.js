import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const PokemonDex = ({setScreen, setSelectedPokemon}) => {

  const [pokemonList, setPokemonList] = useState(null)

  useEffect( () => {
      //The pokemon api documentation is in https://pokeapi.co/docs/v2#resource-listspagination-section
      fetch(
          'https://pokeapi.co/api/v2/pokemon'
      ).then((rawResponse)=>{
          rawResponse.json().then((response)=>{
              setPokemonList(response);
          })
      });
  }, []);
  return (
      <ScrollView>
        <View style={styles.header}>
          <Text style={{fontSize: 22}}>Pokedex </Text>
        </View>
        {pokemonList?.results?.map((el, i)=>{
          return(
              <View style={styles.card} >
                  <TouchableOpacity
                      onPress={()=>{
                          setScreen('pokemon');
                          //This is the API url of the pokemon
                          setSelectedPokemon(el.url);
                      }}>
                      <Image style={{width: '100%', height: 100, marginBottom: 10}} source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+1}.png`}} />
                      <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{el.name}</Text>
                  </TouchableOpacity>
              </View>
          )
        })}
      </ScrollView>
  );
};

export default PokemonDex;

const styles = StyleSheet.create({
  header:{
    alignItems: 'center',
    marginVertical: 10,
  },
  card:{
    padding: 15,
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1
  }
})