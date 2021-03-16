import { useGetListMyPokemon } from "@database/my-pokemon";
import { IPokemon } from "@graphql/pokemon.gql";
import { useEffect, useState } from "react";

export const useMyPokemonDataProvider = () => {
  const [data, setData] = useState<IPokemon[]>();

  const {
    data: localData,
    loading,
    error,
    getListMyPokemon,
  } = useGetListMyPokemon();

  useEffect(() => {
    getListMyPokemon();
  }, []);

  useEffect(() => {
    setData(localData);
  }, [localData]);

  const setPokemonData = (pokemons: IPokemon[]) => setData(pokemons);

  return {
    error,
    loading,
    pokemons: data,
    setPokemonData,
  };
};
