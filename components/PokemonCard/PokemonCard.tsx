import { IPokemonItem } from '../../graphql'
import { PokemonCardElement } from './PokemonCard.styled'
import { usePalette } from '../../hooks/usePallete';

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
