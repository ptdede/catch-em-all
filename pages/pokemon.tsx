import { Loading } from '@components';
import { useRouter } from 'next/router';
import { PokemonDetail } from '@containers';
import { TPokemonDetail } from '@containers/PokemonDetail/PokemonDetail.styled';

const Pokemon = () => {
  const { isReady } = useRouter()

  if (!isReady) {
    return (
      <TPokemonDetail.LoadingWrapper>
        <Loading size="m" />
      </TPokemonDetail.LoadingWrapper>
    )
  }

  return (
    <PokemonDetail />
  )
}

export default Pokemon
