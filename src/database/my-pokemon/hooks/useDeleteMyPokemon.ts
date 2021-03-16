import { myPokemonDb } from '../myPokemonDb'

export const useDeleteMyPokemon = () => {
  const deleteMyPokemon = async (id: number) => {
    try {
      await myPokemonDb.delete(id)
      return true
    } catch(err) {
      // eslint-disable-next-line no-console
      console.log(err)
      throw err
    }
  }

  return {
    deleteMyPokemon
  }
}
