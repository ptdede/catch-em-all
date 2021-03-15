import Link from 'next/link'
import { usePalette } from '@hooks/usePalette'
import { TPokemonCard } from './PokemonCard.styled'
import { usePokemonCard } from './PokemonCard.state'

type PokemonCardProps = {
  id: number
  href: string
  name: string
  image: string
  owned?: number
  hideOwned?: boolean
  enableRelease?: boolean
}

export const PokemonCard = ({ id, href, name, image, owned, hideOwned, enableRelease }: PokemonCardProps) => {
  const { colors } = usePalette(image)
  const { releasePokemon } = usePokemonCard()

  return (
    <TPokemonCard.Wrapper>
      <Link
        href={href}
      >
        <TPokemonCard.Inner color={colors.dominant}>
          {
            !hideOwned && (
              <TPokemonCard.Owned
                bold={owned > 0}
              >
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
      </Link>
      {
        enableRelease && (
          <TPokemonCard.ActionWrapper
            onClick={() => releasePokemon(id)}
          >
            <p>Release!</p>
          </TPokemonCard.ActionWrapper>
        )
      }
    </TPokemonCard.Wrapper>
  )
}
