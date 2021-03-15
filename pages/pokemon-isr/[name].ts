
/**
 * NOTE:: 
 * 
 * Next has Incremental Static Regeneration (ISR) feature.
 * Next can render static page on runtime by request.
 * To enable ISR, need to implement on custom server
 * `next export` cannot build ISR page.
 * 
 * Because this project is deployed to vercel,
 * Will hide this route temporarily.
 */

import { PokemonDetail } from '@containers';

// import { POKEMON_GQL } from '@graphql/pokemon.gql';
// import { initializeApollo } from '@libs/apolloClient';
// import { IPokemonList, pokemonsQueryVariables, POKEMONS_GQL } from '@graphql/pokemons.gql';

// type StaticPathParam = {
//   name: string
// }

// export async function getStaticPaths() {
//   const apolloClient = initializeApollo()

//   const { data } = await apolloClient.query({
//     query: POKEMONS_GQL,
//     variables: pokemonsQueryVariables,
//   })

//   const pokemons = data.pokemons as IPokemonList

//   const paths = pokemons.results.map(pokemon => ({
//     params: { name: pokemon.name }
//   }))

//   // TODO: To enable ISR, don't forget to change this to true
//   // to make static generation work, leave this value false.
//   return { paths, fallback: false }
// }

// export async function getStaticProps({ params }: { params: StaticPathParam }) {
//   const apolloClient = initializeApollo()

//   const name = params.name

//   await apolloClient.query({
//     query: POKEMON_GQL,
//     variables: { name },
//   })

//   return {
//     props: {
//       name,
//       initialApolloState: apolloClient.cache.extract(),
//     },
//     revalidate: 1,
//   }
// }

export default PokemonDetail
