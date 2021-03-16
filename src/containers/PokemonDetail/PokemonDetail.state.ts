import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { usePalette } from "@hooks/usePalette";
import { useGetMyPokemon } from "@database/my-pokemon/hooks/useGetMyPokemon";
import {
  IPokemonArgs,
  IPokemonResult,
  POKEMON_GQL,
} from "@graphql/pokemon.gql";

export const usePokemonDetail = (name: string, ownedName: string) => {
  const {
    data,
    error: repoError,
    loading: repoLoading,
    getPokemonDetail,
  } = usePokemonDetailRepository(name, ownedName);

  useEffect(() => {
    getPokemonDetail();
  }, [ownedName]);

  const error = (!repoLoading && !!repoError) || !data || !data.pokemon.status;

  const loading = (repoLoading || data === undefined) && !repoError;

  const { colors } = usePalette(
    !!data && !!data.pokemon.sprites ? data.pokemon.sprites.front_default : ""
  );

  return {
    data,
    error,
    colors,
    loading,
  };
};

const defaultPokemonDetailRepositoryState = {
  data: undefined as undefined | IPokemonResult,
  error: undefined as any,
  loading: false as boolean,
};

const usePokemonDetailRepository = (name: string, ownedName: string) => {
  const [source, setSource] = useState<"local" | "network">("network");
  const [state, setState] = useState<
    typeof defaultPokemonDetailRepositoryState
  >(defaultPokemonDetailRepositoryState);

  const [
    getPokemonDetailFromGql,
    { data: gqlData, loading: gqlLoading, error: gqlError },
  ] = useLazyQuery<IPokemonResult, IPokemonArgs>(POKEMON_GQL, {
    variables: {
      name,
    },
  });

  const {
    data: localData,
    error: localError,
    loading: localLoading,
    getMyPokemon,
  } = useGetMyPokemon();

  useEffect(() => {
    if (source === "network") {
      setState({
        data: gqlData,
        error: gqlError,
        loading: gqlLoading,
      });
    } else {
      setState({
        data: localData,
        error: localError,
        loading: localLoading,
      });
    }
  }, [gqlData, gqlError, gqlLoading, localData, localError, localLoading]);

  const getPokemonDetail = async (isOffline = false) => {
    if (!isOffline && !ownedName) {
      getPokemonDetailFromGql();
      setSource("network");
    } else {
      getMyPokemon(ownedName, name);
      setSource("local");
    }
  };

  return {
    source,
    ...state,
    getPokemonDetail,
  };
};
