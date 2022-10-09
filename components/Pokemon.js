import React, {useEffect, useState} from 'react'
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Pokemon = ({setScreen, selectedPokemon}) =>{

    const [pokemon, setPokemon] = useState(null)

    useEffect(()=>{

            fetch(selectedPokemon).then((rawResponse)=>{
                rawResponse.json().then((response)=>{
                    setPokemon(response)
                })
            })

    }, [selectedPokemon])

    return(
        <ScrollView>
            <TouchableOpacity style={{padding: 10}} onPress={()=>setScreen('pokedex')}>
                <Text>Return</Text>
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={{fontSize: 22}}>{pokemon ? pokemon.name : 'Pokemon' }</Text>
            </View>
            <View style={{alignItems: 'center', marginVertical: 10}}>
                <Image style={{width: 200, height: 200}} source={{uri: pokemon ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` : ''}} />
            </View>
            <Text style={{textAlign: 'center'}}>Abilities</Text>
            <View style={{marginVertical: 10, flexDirection: 'row', justifyContent: 'center'}}>
                {
                    pokemon?.abilities?.map(({ability})=>{
                        return(
                            <View style={styles.abilityTag}>
                                <Text style={{color: 'white'}}>{ability.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
            <Text style={{textAlign: 'center'}}>Moves</Text>
            {
                pokemon?.moves?.map(({move})=>{
                    return(
                            <Text style={{textAlign: 'center'}}>{'-' + move.name}</Text>
                    )
                })
            }
        </ScrollView>
    )
}

export default Pokemon

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        marginVertical: 10,
    },
    abilityTag:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: '50%',
        backgroundColor: '#efc82b',
        marginHorizontal: 5
    }
})