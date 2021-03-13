import { useState } from 'react'
import { myPokemonDb } from '../myPokemonDb'
import { IPokemon } from '@graphql/pokemon.gql'

export const useAddMyPokemon = () => { 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState<null | IPokemon>(null)

  const addMyPokemon = async (pokemon: IPokemon) => {

    const { id, ...props } = pokemon
    
    let tempNumber = id
    
    setLoading(true)

    const similarName = await myPokemonDb
      .where("name")
      .equalsIgnoreCase(props.name)
      .count()

    if (similarName) {
      tempNumber = new Date().getUTCMilliseconds();
    }

    const name = similarName > 0
      ? `${props.name}-${tempNumber}`
      : props.name

    const postedData = {
      ...props,
      name
    } as IPokemon

    try {
      await myPokemonDb.add(postedData)
      setData(postedData)
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
    addMyPokemon
  }
}
