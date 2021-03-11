import { PokemonDetail } from '../../containers';
import { IPokemonList, pokemonsQueryVariables, POKEMONS_GQL } from '../../graphql';
import { POKEMON_GQL } from '../../graphql/pokemon.gql';
import { initializeApollo } from '../../libs/apolloClient';

type StaticPathParam = {
  name: string
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: POKEMONS_GQL,
    variables: pokemonsQueryVariables,
  })

  const pokemons = data.pokemons as IPokemonList

  const paths = pokemons.results.map(pokemon => ({
    params: { name: pokemon.name }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }: { params: StaticPathParam }) {
  const apolloClient = initializeApollo()

  const name = params.name

  await apolloClient.query({
    query: POKEMON_GQL,
    variables: { name },
  })

  return {
    props: {
      name,
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}

export default PokemonDetail
