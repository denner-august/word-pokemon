import Image from 'next/image';

import { Status } from '@/components/pokemon-status/pokemon_Status';
import styles from '../pokemon-list/card.module.scss'

import { PokemonsProps } from '@/types/pokemon_types';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function PokeView({ pokemons }: PokemonsProps) {

    function PokeList() {
        if (pokemons) {
            return pokemons.map((pokemon) => {
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



    return <> {PokeList()} </>
}