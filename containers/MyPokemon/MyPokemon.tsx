import Link from 'next/link'
import { Loading, PokemonCard } from '@components';
import { TMyPokemon } from './MyPokemon.styled';
import { useMyPokemon } from './MyPokemon.state';

export const MyPokemon = () => {
  const {
    data,
    error,
    loading
  } = useMyPokemon()

  if (loading) return <Loading />

  if (error) return <p>error</p>

  const { pokemons } = data

  return (
    <TMyPokemon.Wrapper>
      <TMyPokemon.PokeWrapper>
        {
          pokemons.results.map(
            pokemon => 
            <Link
              key={`pokemon-${pokemon.id}`}
              href={`/pokemon?name=${pokemon.name}&owned=${pokemon.ownedName}`}
            >
              <TMyPokemon.LinkWrapper>
                <PokemonCard
                  id={pokemon.id}
                  name={pokemon.ownedName ?? pokemon.name}
                  image={pokemon.sprites.front_default}
                  hideOwned={true}
                />
              </TMyPokemon.LinkWrapper>
            </Link>
          )
        }
      </TMyPokemon.PokeWrapper>
    </TMyPokemon.Wrapper>
  )
}
