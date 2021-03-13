import { IPokemon } from '@graphql/pokemon.gql';
import { dbConfig } from './config';
import database from './database';

export const myPokemonDb = database.table<IPokemon, number>(dbConfig.tables.myPokemons)
