import styles from './card.module.scss'
import { FetchPokemon } from '@/fetch/swr'
export function CarPokemon() {

    return <ul className={styles.Container}> <FetchPokemon /></ul>
}