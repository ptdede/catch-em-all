import { useQuery } from '@apollo/client'
import { usePalette } from '@hooks/usePalette'
import { IPokemonArgs, IPokemonResult, POKEMON_GQL } from '@graphql/pokemon.gql'

export const usePokemonDetail = (name: string) => {
  const { loading, error: gqlError, data } = useQuery<IPokemonResult, IPokemonArgs>(
    POKEMON_GQL,
    {
      variables: {
        name
      }
    }
  )

  const error = gqlError || !data || !data.pokemon.status

  const { colors } = usePalette(!!data && !!data.pokemon.sprites ? data.pokemon.sprites.front_default : "")

  return {
    data,
    error,
    colors,
    loading
  }
}
