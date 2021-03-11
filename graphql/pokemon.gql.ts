import { gql } from '@apollo/client';

type BaseName = { name: string }

export interface IPokemon {
  id: number
  name: string
  sprites: { front_default: string }
  moves: [{ move: BaseName }]
  types: [{ type: BaseName }]
  status: boolean
}

export interface IPokemonArgs {
  name: string
}

export interface IPokemonResult {
  pokemon: IPokemon
}

export const POKEMON_GQL = gql`
query pokemon(
  $name: String!
) {
  pokemon(name: $name) {
    id
    name
    sprites {
      front_default
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
    status
  }
}
`
