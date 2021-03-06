import { gql } from "@apollo/client";

export interface IPokemonList {
  count: number;
  nextOffset: number;
  results: [IPokemonItem];
  status: boolean;
  message: string;
}

export interface IPokemonItem {
  url: string;
  name: string;
  image: string;
  id: number;
  owned?: number;
}

export interface IPokemonsArgs {
  limit: number;
  offset: number;
}

export interface IPokemonsResult {
  pokemons: IPokemonList;
}

export const POKEMONS_GQL = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      results {
        url
        name
        id
        image
      }
      status
      message
    }
  }
`;

export const pokemonsQueryVariables: IPokemonsArgs = {
  limit: 20,
  offset: 0,
};
