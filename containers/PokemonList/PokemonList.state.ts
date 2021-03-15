import { NetworkStatus, useQuery } from '@apollo/client'
import { IPokemonsArgs, IPokemonsResult, pokemonsQueryVariables, POKEMONS_GQL } from '@graphql/pokemons.gql'
import { useMyPokemonData } from '@providers/MyPokemonData/MyPokemonData.provider'

export const usePokemonList = () => {
  const { loading, error, data: gqlData, fetchMore, networkStatus } = useQuery<IPokemonsResult, IPokemonsArgs>(
    POKEMONS_GQL,
    {
      variables: pokemonsQueryVariables,
      notifyOnNetworkStatusChange: true,
    }
  )

  const { pokemons: myPokemonData } = useMyPokemonData()

  const loadingMorePokemon = networkStatus === NetworkStatus.fetchMore

  const data = {
    pokemons: {
      ...gqlData.pokemons,
      results: gqlData.pokemons.results.map(res => {
        const owned = myPokemonData?.filter(pokemon => pokemon.name === res.name).length ?? 0
        
        return {
          ...res,
          owned
        }
      })
    }
  } as IPokemonsResult

  const loadMorePokemon = () => {
    fetchMore({
      variables: {
        offset: data.pokemons.nextOffset,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const pokemons = {
          ...fetchMoreResult.pokemons,
          results: [...prev.pokemons.results, ...fetchMoreResult.pokemons.results]
        }

        return {
          pokemons
        }
      }
    })
  }

  return {
    data,
    error,
    loading,
    loadingMorePokemon,
    loadMorePokemon,
  }
}
