import { useRouter } from "next/router";
import { IPokemon } from "@graphql/pokemon.gql";
import { useUpdateMyPokemon } from "@database/my-pokemon";
import { useCatchPokemon } from "@providers/CatchPokemon/CatchPokemon.provider";
import { useMyPokemonData } from "@providers/MyPokemonData/MyPokemonData.provider";

export const useCatchPokemonDialog = () => {
  const { push } = useRouter();
  const { closeCatchWindow } = useCatchPokemon();
  const {
    updateMyPokemon,
    loading: updateLoading,
    error: updateError,
  } = useUpdateMyPokemon();

  const {
    pokemons: myPokemon,
    setPokemonData: setMyPokemonData,
  } = useMyPokemonData();

  const updatePokemonName = async (name: string, pokemon: IPokemon) => {
    try {
      const redirect = `/my-pokemon`;

      const willUpdate = {
        ...pokemon,
        ownedName: name,
      };

      const updatePokemon = await updateMyPokemon(willUpdate);

      setMyPokemonData([updatePokemon, ...myPokemon]);

      push(redirect);
      closeCatchWindow();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("updatePokemonName", err);
    }
  };

  return {
    updateError,
    updateLoading,
    closeCatchWindow,
    updatePokemonName,
  };
};
