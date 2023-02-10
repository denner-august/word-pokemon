import { pokemonStatusProps } from '@/types/pokemon_types'
import styles from '../pokemon-status/status.module.scss'

export function Status({ stats }: pokemonStatusProps) {

    return (
        <ul className={styles.Status_Container}>
            {stats.map(item => {
                return <li key={Math.random()} >{item.stat.name} : {item.base_stat}  </li>
            })}
        </ul>
    )
}