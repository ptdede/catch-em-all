import { useState } from 'react'
import { myPokemonDb } from '../myPokemonDb'
import { IPokemon } from '@graphql/pokemon.gql'

export const useUpdateMyPokemon = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<null | IPokemon>(null)

  const updateMyPokemon = async (pokemon: IPokemon) => {
    setLoading(true)

    try {
      await myPokemonDb.put(pokemon)
      setData(pokemon)
    } catch(err) {
      // eslint-disable-next-line no-console
      console.log(err)
      setError(err)
    }
    
    setLoading(false)
  }

  return {
    data,
    error,
    loading,
    updateMyPokemon
  }
}
