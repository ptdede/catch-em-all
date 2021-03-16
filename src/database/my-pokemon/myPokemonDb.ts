import database from "../database";
import { dbConfig } from "../config";
import { IPokemon } from "@graphql/pokemon.gql";

export const myPokemonDb = database.table<IPokemon, number>(
  dbConfig.tables.myPokemons
);
