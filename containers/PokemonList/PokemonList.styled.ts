import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PokeWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 .2rem;
`

const LoadMore = styled.button`
  padding: .7rem 1.6rem;
  background-color: #ececec;
  border-radius: 1000px;
  cursor: pointer;
  border: solid #ececec 1px;
  font-size: .9em;
  background-color: #ffcb05;
  transition: all 300ms ease;

  &:hover {
    transform: scale(.9);
  }
`

const LoadMoreWrapper = styled.div`
  margin-top: 2rem;
`

export const PokemonListElement = {
  Wrapper,
  LoadMore,
  PokeWrapper,
  LoadMoreWrapper
}
