import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  max-width: 50%;
  cursor: pointer;
`

const Inner = styled.div<{ color: string }>`
  border-radius: 4px;
  margin: .2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.color ?? "#ffffff"};
  transition: background-color 600ms ease-in-out;
`

const Image = styled.img`
  width: 96px;
  height: 96px;
  object-fit: contain;
`

const Name = styled.p`
  text-transform: uppercase;
  font-size: .7em;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #ffffff;
  background-color: rgba(111, 111, 111, .6);
  padding: .3rem .6rem;
  border-radius: 1000px;
  margin-top: .5rem;
`

export const PokemonCardElement = {
  Wrapper,
  Image,
  Inner,
  Name
}
