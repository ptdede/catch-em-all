/* eslint-disable @typescript-eslint/no-empty-function */
import { IPokemon } from "@graphql/pokemon.gql";
import { useMyPokemonDataProvider } from "./MyPokemonData.state";
import React, { createContext, ReactNode, useContext } from "react";

type IMyPokemonProviderProps = {
  children: ReactNode;
};

const defaultContext = {
  pokemons: undefined as undefined | IPokemon[],
  loading: false,
  error: undefined,
  setPokemonData: (_pokemons: IPokemon[]) => {},
};

export const MyPokemonContext = createContext<typeof defaultContext>(
  defaultContext
);

export const useMyPokemonData = () => useContext(MyPokemonContext);

export const MyPokemonDataProvider = ({
  children,
}: IMyPokemonProviderProps) => {
  const context = useMyPokemonDataProvider();

  return (
    <MyPokemonContext.Provider value={context}>
      {children}
    </MyPokemonContext.Provider>
  );
};
