import { TMyPokemon } from './MyPokemon.styled';
import { useMyPokemon } from './MyPokemon.state';
import { Loading, PokemonCard } from '@components';
import { NoPokemon } from '@components/NoPokemon/NoPokemon';

export const MyPokemon = () => {
  const {
    data,
    error,
    loading
  } = useMyPokemon()

  if (loading) {
    return (
      <TMyPokemon.LoadingWrapper>
        <Loading size="m" />
      </TMyPokemon.LoadingWrapper>
    )
  }

  if (error) return <p>error</p>

  const { pokemons } = data

  if (!pokemons.results.length) {
    return (
      <NoPokemon title="You don't have any pokemons" />
    )
  }

  return (
    <TMyPokemon.Wrapper>
      <TMyPokemon.PokeWrapper>
        {
          pokemons.results.map(
            pokemon => 
              <PokemonCard
                key={`pokemon-${pokemon.id}`}
                href={`/pokemon?name=${pokemon.name}&owned=${pokemon.ownedName}`}
                id={pokemon.id}
                name={pokemon.ownedName ?? pokemon.name}
                image={pokemon.sprites.front_default}
                hideOwned={true}
                enableRelease={true}
              />
          )
        }
      </TMyPokemon.PokeWrapper>
    </TMyPokemon.Wrapper>
  )
}
