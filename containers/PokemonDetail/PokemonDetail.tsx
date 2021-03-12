import { useRouter } from 'next/router'
import { Loading } from '../../components'
import { POKEMONS_TYPES } from '../../constants/pokemon-types'
import { usePokemonDetail } from './PokemonDetail.state'
import { TPokemonDetail } from './PokemonDetail.styled'

export const PokemonDetail = () => {
  const router = useRouter()
  const { name } = router.query as { name: string }
  const { data, error, colors, loading } = usePokemonDetail(name)
  
  if (loading || !name) return <Loading />

  if (error) return <p>error</p>

  const { pokemon } = data

  return (
    <TPokemonDetail.Wrapper>
      <TPokemonDetail.DetailWrapper
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
      </TPokemonDetail.DetailWrapper>
      <TPokemonDetail.AttributesWrapper>
        <h4>MOVES</h4>

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
