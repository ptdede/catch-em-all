import { useMyPokemonData } from '@providers/MyPokemonData/MyPokemonData.provider'

export const useMyPokemon = () => {
  const { pokemons, loading: myPokemonLoading, error } = useMyPokemonData()

  const data = {
    pokemons: {
      results: pokemons
    }
  }

  const loading = myPokemonLoading || pokemons === undefined

  return {
    data,
    error,
    loading,
  }
}
