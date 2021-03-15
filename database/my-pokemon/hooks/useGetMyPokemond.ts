import { useState } from 'react'
import { myPokemonDb } from '../myPokemonDb'
import { IPokemonResult } from '@graphql/pokemon.gql'

const defaultGetMyPokemonState = {
  data:  undefined as undefined | IPokemonResult,
  error: undefined as any,
  loading: false as boolean
}

export const useGetMyPokemon = () => {
  const [state, setState] = useState<typeof defaultGetMyPokemonState>(defaultGetMyPokemonState)

  const getMyPokemon = async (ownedName: string, name: string): Promise<IPokemonResult> => {
    setState(prev => ({ 
      ...prev,
      loading: true
    }))

    try {
      const result = await myPokemonDb.get({ name, ownedName })

      const pokemonResult = {
        pokemon: result ?? {
          id: null,
          name: null,
          sprites: null,
          moves: null,
          types: null,
          status: false
        }
      }

      setState({
        data: pokemonResult,
        error: undefined,
        loading: false
      })

      return pokemonResult
    } catch(err) {
      // eslint-disable-next-line no-console
      console.log(err)

      setState({
        data: undefined,
        error: err,
        loading: false
      })

      throw err
    }
  }

  return {
    ...state,
    getMyPokemon
  }
}
