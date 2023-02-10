import { useContext, useEffect } from 'react'
import styles from '../search-pokemon/pesquisa.module.scss'
import { ContextPokemon } from '@/context/context_Pokemon'

export function PesquisaPokemon() {

    const { setProcura_pokemon } = useContext(ContextPokemon)

    return (
        <div className={styles.container}>
            <input type="text" onChange={event => setProcura_pokemon(event.target.value)} />
        </div>
    )
}