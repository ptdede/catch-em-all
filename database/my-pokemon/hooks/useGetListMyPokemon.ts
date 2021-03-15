import { useState } from 'react'
import { myPokemonDb } from '../myPokemonDb'
import { IPokemon } from '@graphql/pokemon.gql'

const defaultState = {
  data:  undefined as undefined | IPokemon[],
  error: undefined as any,
  loading: false as boolean
}

export const useGetListMyPokemon = () => {
  const [state, setState] = useState<typeof defaultState>(defaultState)

  const getListMyPokemon = async (): Promise<IPokemon[]> => {
    setState(prev => ({ 
      ...prev,
      loading: true
    }))

    try {
      const result = await myPokemonDb.reverse().toArray()

      setState({
        data: result,
        error: undefined,
        loading: false
      })

      return result
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
    getListMyPokemon
  }
}
