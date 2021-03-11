import { Loading } from '../../components';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
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
              <PokemonCard 
                key={`pokemon-${pokemon.id}`}
                pokemon={pokemon} />
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
