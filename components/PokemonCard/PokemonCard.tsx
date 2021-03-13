import { IPokemonItem } from '@graphql/pokemons.gql'
import { usePalette } from '@hooks/usePalette'
import { PokemonCardElement } from './PokemonCard.styled'

type PokemonCardProps = {
  pokemon: IPokemonItem
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {

  const { colors } = usePalette(pokemon.image)

  return (
    <PokemonCardElement.Wrapper>
      <PokemonCardElement.Inner color={colors.dominant}>
        <PokemonCardElement.Owned>
          owned: { pokemon.owned ?? "0"}
        </PokemonCardElement.Owned>
        <PokemonCardElement.Image
          src={pokemon.image}
          alt={pokemon.name}
        />
        <PokemonCardElement.Name>
          {pokemon.name}
        </PokemonCardElement.Name>
      </PokemonCardElement.Inner>
    </PokemonCardElement.Wrapper>
  )
}
