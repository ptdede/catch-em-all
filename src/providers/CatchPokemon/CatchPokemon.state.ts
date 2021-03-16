import { useEffect, useState } from "react";
import { IPokemon } from "@graphql/pokemon.gql";
import { delay } from "@helpers/delay";
import confetti from "canvas-confetti";
import { useNavigationBar } from "@providers/NavigationBar/NavigationBar.provider";
import { myPokemonDb } from "@database/my-pokemon";

const defaultState = {
  pokemon: null as null | IPokemon,
  loading: false,
  isSuccess: false,
  isCatching: false,
};

export const useCatchPokemonProvider = () => {
  const { hideNavigation } = useNavigationBar();

  const [state, setState] = useState<typeof defaultState>(defaultState);

  useEffect(() => {
    hideNavigation(state.isCatching);
  }, [state.isCatching]);

  const catchPokemon = async (pokemon: IPokemon) => {
    const similarName = await myPokemonDb
      .where("ownedName")
      .equalsIgnoreCase(pokemon.name)
      .count();

    let tempNumber;

    if (similarName) {
      tempNumber = new Date().getUTCMilliseconds();
    }

    setState((prev) => ({
      ...prev,
      pokemon: {
        ...pokemon,
        ownedName: `${pokemon.name}${tempNumber ?? ""}`,
      },
      isCatching: true,
      loading: true,
    }));

    // Give effect waiting to catch pokemon
    await delay(3000);

    const isCatched = Math.random() < 0.5;

    if (isCatched) {
      confetti({
        particleCount: 200,
      });

      setState((prev) => ({
        ...prev,
        isSuccess: true,
      }));
    }

    setState((prev) => ({
      ...prev,
      loading: false,
    }));
  };

  const closeCatchWindow = () => {
    setState({
      pokemon: null,
      loading: false,
      isSuccess: false,
      isCatching: false,
    });
  };

  return {
    ...state,
    catchPokemon,
    closeCatchWindow,
  };
};
