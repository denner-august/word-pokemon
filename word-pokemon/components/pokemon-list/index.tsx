import styles from './card.module.scss'
import { FetchPokemon } from '@/fetch/fetch_pokemon'
export function CarPokemon() {

    return <ul className={styles.Container}> <FetchPokemon /> </ul>
}