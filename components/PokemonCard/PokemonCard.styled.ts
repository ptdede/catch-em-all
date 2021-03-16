import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  max-width: 50%;

  @media screen and (min-width: 600px) {
    max-width: 25%;
  }
`

const Inner = styled.div<{ color?: string }>`
  position: relative;
  border-radius: 4px;
  margin: .2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${p => p.color ?? "#ffffff"};
  transition: background-color 400ms, transform 200ms, opacity 200ms;
  transition-timing-function: ease;

  &:hover {
    transform: scale(.96);
    opacity: .9;
  }
`

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;

  @media screen and (min-width: 600px) {
    width: 140px;
    height: 140px;
  }
`

const Name = styled.p`
  max-width: 100%;
  text-transform: uppercase;
  font-size: .8em;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #ffffff;
  background-color: rgba(0,58,112, .7);
  padding: .3rem .6rem;
  border-radius: 1000px;
  margin-top: .5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Owned = styled.p<{ bold?: boolean }>`
  position: absolute;
  top: 1rem;
  left: 0;
  color: #ffffff;
  padding: .2rem .4rem;
  border-top-right-radius: 1000px;
  border-bottom-right-radius: 1000px;
  font-size: .75em;
  background-color: rgba(0,58,112, .6);
  opacity: 1;

  ${p => p.bold && css`
    color: #111111;
    opacity: 1;
    background-color: #ffcb05;
  `}
`

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem .5rem;
  margin-bottom: .5rem;
  cursor: pointer;
  color: #CA0B00;
`

export const TPokemonCard = {
  Name,
  Owned,
  Image,
  Inner,
  Wrapper,
  ActionWrapper,
}
