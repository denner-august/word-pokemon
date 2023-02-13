export interface pokemonStatusProps{
    stats:{ stat:{name: string},base_stat:number}[]
}

export interface ContextProps {
    procura_pokemon:string,
    setProcura_pokemon: ((value: string) => void)
    
    pokemons: {
        name: string,
        id: number, stats: [],
        types: [{ url: string, type: { name: string } }],
        order:number,
        sprites: { other: { dream_world: { front_default: string } }, }
    }[]
    
    setPokemons:any
}

export type PokemonsProps = Partial<ContextProps>