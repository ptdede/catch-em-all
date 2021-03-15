import { Loading } from '@components'
import { useRouter } from 'next/router'
import { POKEMONS_TYPES } from '@constants/pokemon-types'
import { usePokemonDetail } from './PokemonDetail.state'
import { TPokemonDetail } from './PokemonDetail.styled'
import { useCatchPokemon } from '@providers/CatchPokemon/CatchPokemon.provider'

export const PokemonDetail = () => {
  const { query } = useRouter()

  const name = query.name as string
  const ownedName = query.owned as string

  const { data, error, colors, loading } = usePokemonDetail(name, ownedName)

  const { isCatching, catchPokemon } = useCatchPokemon()

  if (loading) {
    return (
      <TPokemonDetail.LoadingWrapper>
        <Loading size="m" />
      </TPokemonDetail.LoadingWrapper>
    )
  }

  if (error) return <p>error</p>

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
            {pokemon.ownedName ?? pokemon.name}
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

      {
        !ownedName && (
          <TPokemonDetail.CatchWrapper
            hide={isCatching}
            onClick={() => catchPokemon(pokemon)}
          >
            <img
              src={require("../../public/pokeball.png")}
              alt="pokeball"
            />
          </TPokemonDetail.CatchWrapper>
        )
      }
    </TPokemonDetail.Wrapper>
  )
}
