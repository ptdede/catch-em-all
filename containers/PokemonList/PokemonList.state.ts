import { NetworkStatus, useQuery } from '@apollo/client'
import { IPokemonsArgs, IPokemonsResult, pokemonsQueryVariables, POKEMONS_GQL } from '../../graphql/pokemons.gql'

export const usePokemonList = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery<IPokemonsResult, IPokemonsArgs>(
    POKEMONS_GQL,
    {
      variables: pokemonsQueryVariables,
      notifyOnNetworkStatusChange: true,
    }
  )

  const loadingMorePokemon = networkStatus === NetworkStatus.fetchMore

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
