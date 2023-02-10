import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

import { Status } from '@/components/pokemon-status/pokemon_Status';

import styles from '../components/pokemon-list/card.module.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
        return pokemonsList.map((pokemon) => {
            let pokemon_status = pokemon.stats.map((status) => status)

            return (
                <Swiper
                    key={pokemon.sprites.other.dream_world.front_default}
                    effect={"flip"}
                    grabCursor={true}
                    pagination={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className={styles.swiper} >
                    <div>
                        <SwiperSlide >
                            <li className={styles.card}>
                                {pokemon.types.map((pokemon) => <p key={pokemon.url}>{pokemon.type.name}</p>)}
                                <Image
                                    src={`${pokemon.sprites.other.dream_world.front_default}`}
                                    alt="Picture of the author"
                                    width={150}
                                    height={150}
                                />

                                <p> {pokemon.name} </p>
                            </li>
                        </SwiperSlide>

                        <SwiperSlide >
                            <Status stats={pokemon_status} />
                        </SwiperSlide>
                    </div>
                </Swiper>
            )
        })
    }

}
