import { useGetListMyPokemon } from '@database/my-pokemon'
import { useEffect } from 'react'

export const useMyPokemonDataProvider = () => {
  const { data, loading, error, getListMyPokemon } = useGetListMyPokemon()

  useEffect(() => {
    getListMyPokemon()
  }, [])

  return {
    error,
    loading,
    pokemons: data,
  }
}
