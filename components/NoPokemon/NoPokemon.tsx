import { TNoPokemon } from './NoPokemon.styled'

type INoPokemonProps = {
  title: string
}

export const NoPokemon = ({ title = "No Pokemon Found!" }: INoPokemonProps) => {
  return (
    <TNoPokemon.Wrapper>
      <TNoPokemon.Image
        src={require("../../public/sad-pikachu.png")}
        alt="Pokemon not found"
      />
      <TNoPokemon.Title>{title}</TNoPokemon.Title>
    </TNoPokemon.Wrapper>
  )
}
