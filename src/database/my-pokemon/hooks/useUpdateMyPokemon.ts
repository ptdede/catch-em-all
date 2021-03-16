import { useState } from 'react'
import { myPokemonDb } from '../myPokemonDb'
import { IPokemon } from '@graphql/pokemon.gql'
import { delay } from '@helpers/delay'

export const useUpdateMyPokemon = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<null | IPokemon>(null)

  const updateMyPokemon = async (pokemon: IPokemon) => {
    setData(null)
    setError(null)
    setLoading(true)

    try {
      // give delay to give user responsive feel
      await delay(600)

      const similarName = await myPokemonDb
        .where("ownedName")
        .equalsIgnoreCase(pokemon.ownedName ?? pokemon.name)
        .count()

      if (similarName) {
        throw new Error("Name not unique, Please select another name");
      }

      const id = await myPokemonDb.put({
        ...pokemon,
        id: undefined
      })

      const updatedPokemon = {
        ...pokemon,
        id
      }
      
      setData(updatedPokemon)
      setLoading(false)

      return updatedPokemon
    } catch(err) {
      // eslint-disable-next-line no-console
      console.log(err)
      setError(err)
      setLoading(false)
      throw err
    }
  }

  return {
    data,
    error,
    loading,
    updateMyPokemon
  }
}
