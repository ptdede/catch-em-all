import { useDeleteMyPokemon } from "@database/my-pokemon";
import { useMyPokemonData } from "@providers/MyPokemonData/MyPokemonData.provider";
import { useState } from "react";

export const usePokemonCard = (name: string) => {
  const { deleteMyPokemon } = useDeleteMyPokemon();
  const { pokemons, setPokemonData } = useMyPokemonData();

  const [loadingDelete, setLoadingDelete] = useState(false);

  const releasePokemon = async (id: number) => {
    const confirm = window.confirm(`Are you sure you wish to release ${name}?`);

    if (!confirm) return;

    try {
      setLoadingDelete(true);

      await deleteMyPokemon(id);

      const result = pokemons.filter((pokemon) => pokemon.id !== id);

      setPokemonData(result);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("err");
    }

    setLoadingDelete(false);
  };

  return {
    loadingDelete,
    releasePokemon,
  };
};
