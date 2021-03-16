/* eslint-disable @typescript-eslint/no-empty-function */
import { IPokemon } from "@graphql/pokemon.gql";
import { CatchPokemonDialog } from "@containers";
import { useCatchPokemonProvider } from "./CatchPokemon.state";
import React, { createContext, ReactNode, useContext } from "react";

type ICatchPokemonProviderProps = {
  children: ReactNode;
};

const defaultContext = {
  pokemon: null as null | IPokemon,
  loading: false,
  isSuccess: false,
  isCatching: false,
  catchPokemon: async (_pokemon: IPokemon) => {},
  closeCatchWindow: () => {},
};

export const CatchPokemonContext = createContext<typeof defaultContext>(
  defaultContext
);

export const useCatchPokemon = () => useContext(CatchPokemonContext);

export const CatchPokemonProvider = ({
  children,
}: ICatchPokemonProviderProps) => {
  const context = useCatchPokemonProvider();

  return (
    <CatchPokemonContext.Provider value={context}>
      {children}
      <CatchPokemonDialog />
    </CatchPokemonContext.Provider>
  );
};
