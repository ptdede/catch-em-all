import { useQuery } from '@apollo/client'
import { IPokemonArgs, IPokemonResult, POKEMON_GQL } from '../../graphql/pokemon.gql'
import { usePalette } from '../../hooks/usePallete'

export const usePokemonDetail = (name: string) => {
  const { loading, error, data } = useQuery<IPokemonResult, IPokemonArgs>(
    POKEMON_GQL,
    {
      variables: {
        name
      }
    }
  )

  const { colors } = usePalette(data.pokemon.sprites.front_default)

  return {
    data,
    error,
    colors,
    loading
  }
}
