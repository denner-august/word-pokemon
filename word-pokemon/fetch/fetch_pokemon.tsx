import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import { PokeView } from '@/components/pokeView';

import { ContextPokemon } from '@/context/context_Pokemon';

export function FetchPokemon(): any {

    const { procura_pokemon, pokemons, setPokemons } = useContext(ContextPokemon)


    const [pokemonsList, setPokemonslist] = useState(pokemons)

    useEffect(() => {
        if (procura_pokemon === "") {
            setPokemonslist(pokemons)
        } else {
            setPokemonslist(
                pokemons.filter((poke: { name: string }) => {
                    if (poke.name.indexOf(procura_pokemon) > -1) {
                        return true
                    } else {
                        false
                    }
                })
            )
        }
    }, [procura_pokemon, pokemons])

    useEffect(() => {
        PokemonInformation()

        return () => {
            setPokemons([])
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function PokemonInformation() {
        for (let i = 1; i <= 100; i++) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => {

                let finde = pokemons.find((item) => item.id === response.data.id)

                if (finde) {
                    return setPokemonslist([...pokemons].sort((a, b) => a.order - b.order))
                }
                setPokemons((preve: any) => [...preve, response.data].sort((a, b) => a.order - b.order));
            })
        }
    }

    if (pokemons) {
        return <PokeView pokemons={pokemonsList} />
    }

}
