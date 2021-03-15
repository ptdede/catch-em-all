import { useEffect, useState } from 'react'
import { IPokemon } from '@graphql/pokemon.gql'
import { useAddMyPokemon } from '@database/my-pokemon'
import { delay } from '@helpers/delay'
import confetti from "canvas-confetti";
import { useNavigationBar } from '@providers/NavigationBar/NavigationBar.provider';

export const useCatchPokemonProvider = () => {
  const { addMyPokemon } = useAddMyPokemon()

  const [pokemon, setPokemon] = useState<null | IPokemon>(null)
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isCatching, setIsCatching] = useState(false)
  const { hideNavigation } = useNavigationBar()

  useEffect(() => {
    hideNavigation(isCatching)
  }, [isCatching])

  const catchPokemon = async (pokemon: IPokemon) => {
    setPokemon(pokemon)
    setIsCatching(true)
    setLoading(true)

    // Give effect waiting to catch pokemon
    await delay(3000)

    const isCatched = Math.random() < 0.5;
    
    if (isCatched) {
      const data = await addMyPokemon(pokemon)
      confetti({
        particleCount: 200
      })

      setPokemon(data)
      setIsSuccess(true)
    }

    setLoading(false)
  }

  const closeCatchWindow = () => {
    setIsCatching(false)
    setLoading(false)
    setIsSuccess(false)
    setPokemon(null)
  }

  return {
    pokemon,
    loading,
    isSuccess,
    isCatching,
    catchPokemon,
    closeCatchWindow
  }
}
