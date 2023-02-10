import { ContextProps } from "@/types/pokemon_types";
import { ReactNode, createContext, useState } from "react";


export const ContextPokemon = createContext({} as ContextProps)

interface ContextPokemonProps {
    children: ReactNode
}

export function ContextPokemonProvider({ children }: ContextPokemonProps) {

    const [procura_pokemon, setProcura_pokemon] = useState("")

    const [pokemons, setPokemons] = useState([])

    return (
        <ContextPokemon.Provider value={{ procura_pokemon, setProcura_pokemon, pokemons, setPokemons }}>
            {children}
        </ContextPokemon.Provider>
    )
}