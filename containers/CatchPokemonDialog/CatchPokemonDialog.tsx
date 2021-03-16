import { Loading } from '@components'
import { useEffect, useState } from 'react'
import { useLockBodyScroll } from 'react-use'
import { TCatchPokemonDialog } from './CatchPokemonDialog.styled'
import { useCatchPokemonDialog } from './CatchPokemonDialog.state'
import { useCatchPokemon } from '@providers/CatchPokemon/CatchPokemon.provider'

export const CatchPokemonDialog = () => {
  const { pokemon, isCatching, isSuccess, loading } = useCatchPokemon()
  const { updateError, updateLoading, closeCatchWindow, updatePokemonName } = useCatchPokemonDialog()

  const [ownedName, setOwnedName] = useState("")

  useEffect(() => {
    if (isSuccess) setOwnedName(pokemon.ownedName ?? pokemon.name)
  }, [isSuccess])

  useLockBodyScroll(isCatching)

  const content = !isCatching || loading ? (
    <Loading />
  ) : (
    <>
      <TCatchPokemonDialog.PokemonImage
        src={
          isSuccess 
            ? pokemon.sprites.front_default
            : require('../../public/poke-sad.png')
        }
        alt={
          isSuccess 
            ? pokemon.name 
            : "pokemon fled"}
      />
      <TCatchPokemonDialog.CatchTextStatus>
        {
          isSuccess 
            ? `Gotcha! You catch a ${pokemon.name}. Give your pokemon an unique name!`
            : `Oh no! The wild ${pokemon.name} fled!`
        }
      </TCatchPokemonDialog.CatchTextStatus>

      {
        isSuccess ? (
          <>
            <TCatchPokemonDialog.PokemonInputName
              onChange={(e) => setOwnedName(e.target.value)}
              defaultValue={pokemon.ownedName ?? pokemon.name}
            />

            {
              updateError && (
                <TCatchPokemonDialog.PokemonInputError>
                  {updateError.message}
                </TCatchPokemonDialog.PokemonInputError>
              )
            }

            {
              updateLoading ? (
                <Loading />
              ) : (
                <TCatchPokemonDialog.ActionButton
                  onClick={() => updatePokemonName(ownedName, pokemon)}
                >
                  save
                </TCatchPokemonDialog.ActionButton>
              )
            }
          </>
        ) : (
          <TCatchPokemonDialog.ActionButton
            onClick={closeCatchWindow}
          >
            OK
          </TCatchPokemonDialog.ActionButton>
        )
      }
    </>
  )

  return (
    <TCatchPokemonDialog.Wrapper
      hide={!isCatching}
    >
      <TCatchPokemonDialog.ContentWrapper>
        { content }
      </TCatchPokemonDialog.ContentWrapper>
    </TCatchPokemonDialog.Wrapper>
  )
}
