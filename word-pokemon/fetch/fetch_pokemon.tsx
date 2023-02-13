import { useContext, useEffect, useState } from 'react'

import { PokeView } from '@/components/pokeView';

import { ContextPokemon } from '@/context/context_Pokemon';

export function FetchPokemon() {

    const { procura_pokemon, pokemons } = useContext(ContextPokemon)


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

    if (pokemons) {
        return <PokeView pokemons={pokemonsList} />
    }

}
