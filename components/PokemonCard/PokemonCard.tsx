import { usePalette } from '@hooks/usePalette'
import { TPokemonCard } from './PokemonCard.styled'

type PokemonCardProps = {
  id: number,
  name: string,
  image: string,
  owned?: number,
  hideOwned?: boolean
}

export const PokemonCard = ({ name, image, owned, hideOwned }: PokemonCardProps) => {
  const { colors } = usePalette(image)

  return (
    <TPokemonCard.Wrapper>
      <TPokemonCard.Inner color={colors.dominant}>
        {
          !hideOwned && (
            <TPokemonCard.Owned>
              owned: { owned ?? "0"}
            </TPokemonCard.Owned>
          )
        }
        <TPokemonCard.Image
          src={image}
          alt={name}
        />
        <TPokemonCard.Name>
          {name}
        </TPokemonCard.Name>
      </TPokemonCard.Inner>
    </TPokemonCard.Wrapper>
  )
}
