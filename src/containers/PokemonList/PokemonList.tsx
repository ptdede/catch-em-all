import { Loading, PokemonCard } from "@components";
import { NoPokemon } from "@components/NoPokemon/NoPokemon";
import { usePokemonList } from "./PokemonList.state";
import { PokemonListElement } from "./PokemonList.styled";

export const PokemonList = () => {
  const {
    data,
    error,
    loading,
    loadingMorePokemon,
    loadMorePokemon,
  } = usePokemonList();

  if (error) return <NoPokemon title="Failed loading pokemon" />;

  if (loading && !loadingMorePokemon) return <Loading />;

  const { pokemons } = data;

  return (
    <PokemonListElement.Wrapper>
      <PokemonListElement.PokeWrapper>
        {pokemons.results.map((pokemon) => (
          <PokemonCard
            key={`pokemon-list-${pokemon.id}`}
            href={`/pokemon?name=${pokemon.name}`}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            owned={pokemon.owned}
          />
        ))}
      </PokemonListElement.PokeWrapper>

      <PokemonListElement.LoadMoreWrapper>
        {loadingMorePokemon ? (
          <Loading />
        ) : (
          <PokemonListElement.LoadMore onClick={loadMorePokemon}>
            Load More
          </PokemonListElement.LoadMore>
        )}
      </PokemonListElement.LoadMoreWrapper>
    </PokemonListElement.Wrapper>
  );
};
