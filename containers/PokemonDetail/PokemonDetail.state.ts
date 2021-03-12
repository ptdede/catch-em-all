import { useQuery } from '@apollo/client'
import { IPokemonArgs, IPokemonResult, POKEMON_GQL } from '../../graphql/pokemon.gql'
import { usePalette } from '../../hooks'

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
