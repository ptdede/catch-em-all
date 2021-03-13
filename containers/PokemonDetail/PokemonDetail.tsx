import { Loading } from '@components'
import { useRouter } from 'next/router'
import { POKEMONS_TYPES } from '@constants/pokemon-types'
import { usePokemonDetail } from './PokemonDetail.state'
import { TPokemonDetail } from './PokemonDetail.styled'

export const PokemonDetail = () => {
  const { query, isReady } = useRouter()

  const name = query.name

  const { data, error, colors, loading } = usePokemonDetail(name as string)

  if (loading || (!name && !isReady)) {
    return (
      <TPokemonDetail.LoadingWrapper>
        <Loading />
      </TPokemonDetail.LoadingWrapper>
    )
  }

  if (error || (isReady && !name)) return <p>error</p>

  const { pokemon } = data

  return (
    <TPokemonDetail.Wrapper>
      <TPokemonDetail.DetailWrapper>
        <TPokemonDetail.DetailContent
          color={colors.dominant}
        >
          <TPokemonDetail.Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <TPokemonDetail.Name>
            {pokemon.name}
          </TPokemonDetail.Name>
          <TPokemonDetail.TypeWrapper>
            {
              pokemon.types.map((value, index) => {
                const type = value.type.name

                return (
                  <TPokemonDetail.Type
                    key={`type-${index}`}
                    color={POKEMONS_TYPES[type].colorDark}
                  >
                    {type}
                  </TPokemonDetail.Type>
                )
              })
            }
          </TPokemonDetail.TypeWrapper>
        </TPokemonDetail.DetailContent>
      </TPokemonDetail.DetailWrapper>
      <TPokemonDetail.AttributesWrapper>
        <TPokemonDetail.AttributesTitle>
          MOVES
        </TPokemonDetail.AttributesTitle>

        <TPokemonDetail.MoveWrapper>
          {
            pokemon.moves.map((value, index) => (
              <TPokemonDetail.Move
                key={`move-${index}`}
                color={colors.dominant}
              >
                {value.move.name}
              </TPokemonDetail.Move>
            ))
          }
        </TPokemonDetail.MoveWrapper>
      </TPokemonDetail.AttributesWrapper>
    </TPokemonDetail.Wrapper>
  )
}
