import { useState } from 'react'
import { myPokemonDb } from '../myPokemonDb'

export const useDeleteMyPokemon = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const deleteMyPokemon = async (id: number) => {
    setLoading(true)

    try {
      await myPokemonDb.delete(id)
    } catch(err) {
      // eslint-disable-next-line no-console
      console.log(err)
      setError(err)
    }

    setLoading(false)
  }

  return {
    error,
    loading,
    success: !error && !error,
    deleteMyPokemon
  }
}
