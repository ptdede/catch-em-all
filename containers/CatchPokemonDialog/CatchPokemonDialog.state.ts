import { useRouter } from 'next/router'
import { IPokemon } from '@graphql/pokemon.gql'
import { useUpdateMyPokemon } from '@database/my-pokemon'
import { useCatchPokemon } from '@providers/CatchPokemon/CatchPokemon.provider'

export const useCatchPokemonDialog = () => {
  const { push } = useRouter()
  const { closeCatchWindow } = useCatchPokemon()
  const { updateMyPokemon, loading: updateLoading, error: updateError } = useUpdateMyPokemon()

  const updatePokemonName = async (name: string, pokemon: IPokemon) => {
    try {
      const redirect = `/pokemon?name=${pokemon.name}&owned=${name}`

      if (name === pokemon.ownedName) {
        push(redirect)
        closeCatchWindow()
        return
      }

      await updateMyPokemon({
        ...pokemon,
        ownedName: name
      })
      
      push(redirect)
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
