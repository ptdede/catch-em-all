import { PokemonList } from "@containers";
import { initializeApollo } from "@libs/apolloClient";
import { pokemonsQueryVariables, POKEMONS_GQL } from "@graphql/pokemons.gql";

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: POKEMONS_GQL,
    variables: pokemonsQueryVariables,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default PokemonList;
