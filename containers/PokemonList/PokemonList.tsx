import { usePokemonList } from './PokemonList.state';

export const PokemonList = () => {
  const {
    data,
    error,
    loading,
    loadingMorePokemon,
    loadMorePokemon
  } = usePokemonList()

  if (error) return <p>error</p>

  if (loading && !loadingMorePokemon) return <div>Loading</div>

  const { pokemons } = data

  return (
    <div>
      <ol>
        {
          pokemons.results.map(res => <li key={`pokemon-${res.id}`}>{res.name}</li>)
        }
      </ol>
      
      <button onClick={loadMorePokemon}>fetch more</button>
    </div>
  )
}
