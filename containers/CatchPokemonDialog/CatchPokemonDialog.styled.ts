import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.div<{ hide?: boolean }>`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(111, 111, 111, 0.7);
  z-index: 88;
  flex-direction: column;
  justify-content: center;
  transition: opacity 400ms ease;
  pointer-events: none;
  opacity: 0;

  ${p => !p.hide && css`
    opacity: 1;
    pointer-events: all;
  `}
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 4px;
  transition: all 600ms ease;
`

const PokemonImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  z-index: 1;
`

const CatchTextStatus = styled.p`
  margin-top: 2rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.5;
  font-size: .9em;
`

const PokemonInputName = styled.input`
  width: 100%;
  border: none;
  background-color: #ececec;
  padding: .5rem 1rem;
  border-radius: 4px;
  text-align: center;
  margin: 1rem 0;
`

const PokemonInputError = styled.p`
  width: 100%;
  line-height: 1.5;
  font-size: .8em;
  color: #ff3333;
  margin-bottom: 1rem;
`

const ActionButton = styled.button`
  width: 100%;
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

export const TCatchPokemonDialog = {
  Wrapper,
  PokemonImage,
  ActionButton,
  ContentWrapper,
  CatchTextStatus,
  PokemonInputName,
  PokemonInputError,
}
