import { IPokemon } from '@graphql/pokemon.gql'
import { useUpdateMyPokemon } from '@database/my-pokemon'
import { useCatchPokemon } from '@providers/CatchPokemon/CatchPokemon.provider'

export const useCatchPokemonDialog = () => {
  const { closeCatchWindow } = useCatchPokemon()
  const { updateMyPokemon, loading: updateLoading, error: updateError } = useUpdateMyPokemon()

  const updatePokemonName = async (name: string, pokemon: IPokemon) => {
    try {
      if (name === pokemon.ownedName) {
        closeCatchWindow()
        return
      }

      await updateMyPokemon({
        ...pokemon,
        ownedName: name
      })
      
      closeCatchWindow()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("updatePokemonName", err)
    }
  }

  return {
    updateError,
    updateLoading,
    closeCatchWindow,
    updatePokemonName
  }
}
