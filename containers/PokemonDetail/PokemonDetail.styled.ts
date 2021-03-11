import styled from '@emotion/styled';

const Wrapper = styled.div`
`

const DetailWrapper = styled.div<{ color: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: ${p => p.color ?? "#ececec"};
    transform: translateX(-50%);
    z-index: -1;
    transition: background-color 600ms ease-in-out;
    transition-delay: 600ms;
  }
`

const AttributesWrapper = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  margin-bottom: -6rem;
  /* background-color: rgba(0,58,112, 1); */
  background-color: #ececec;
`

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;

  @media screen and (min-width: 600px) {
    width: 300px;
    height: 300px;
  }
`

const Name = styled.h1`
  text-transform: uppercase;
  font-size: 1.3em;
  font-weight: 700;
  color: rgba(0,58,112, 1);
  margin-top: 2rem;
`

const Type = styled.p<{ color: string }>`
  background-color: ${p => p.color ?? "rgba(111, 111, 111, .6)"};
  color: #ffffff;
  padding: .2rem .5rem;
  margin: 0 .3rem;
`

const TypeWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`

const Move = styled.p<{ color: string }>`
  font-size: .9em;
  color: #ffffff;
  padding: .5rem 1rem;
  margin: .2rem .3rem;
  border-radius: 1000px;
  background-color: ${p => p.color ?? "rgba(0,58,112, 1)"};
`

const MoveWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`

export const TPokemonDetail = {
  Name,
  Type,
  Move,
  Image,
  Wrapper,
  TypeWrapper,
  MoveWrapper,
  DetailWrapper,
  AttributesWrapper,
}
