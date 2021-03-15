import Link from 'next/link'
import { Loading, PokemonCard } from '@components';
import { usePokemonList } from './PokemonList.state';
import { PokemonListElement } from './PokemonList.styled';

export const PokemonList = () => {
  const {
    data,
    error,
    loading,
    loadingMorePokemon,
    loadMorePokemon
  } = usePokemonList()

  if (error) return <p>error</p>

  if (loading && !loadingMorePokemon) return <Loading />

  const { pokemons } = data

  return (
    <PokemonListElement.Wrapper>
      <PokemonListElement.PokeWrapper>
        {
          pokemons.results.map(
            pokemon => 
            <Link
              key={`pokemon-${pokemon.id}`}
              href={`/pokemon?name=${pokemon.name}`}
            >
              <PokemonListElement.LinkWrapper>
                <PokemonCard
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  owned={pokemon.owned}
                />
              </PokemonListElement.LinkWrapper>
            </Link>
          )
        }
      </PokemonListElement.PokeWrapper>
      
      <PokemonListElement.LoadMoreWrapper>
        {
          loadingMorePokemon 
            ? <Loading /> 
            : (
              <PokemonListElement.LoadMore
                onClick={loadMorePokemon}>
                  Load More
              </PokemonListElement.LoadMore>
            )
        }
      </PokemonListElement.LoadMoreWrapper>
    </PokemonListElement.Wrapper>
  )
}
