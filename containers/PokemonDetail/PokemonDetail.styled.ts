import styled from '@emotion/styled';

const Wrapper = styled.div`

  @media screen and (min-width: 600px) {
    display: flex;
  }
`

const DetailWrapper = styled.div`
  @media screen and (min-width: 600px) {
    margin-right: 2rem;
  }
`

const DetailContent = styled.div<{ color: string }>`
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
    z-index: 0;
    transition: background-color 600ms ease-in-out;
    transition-delay: 600ms;
  }

  @media screen and (min-width: 600px) {
    padding: 2rem;
    border: solid 2px #ececec;
    border-radius: 6px;

    &:before {
      top: 2rem;
    }
  }
`

const AttributesWrapper = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  margin-bottom: -6rem;
  background-color: #ececec;

  @media screen and (min-width: 600px) {
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 6px;
  }
`

const AttributesTitle = styled.h4`
  font-weight: 700;
  font-size: 1.2em;
  border-bottom: solid 1px rgba(111, 111, 111, .3);
  padding-bottom: .5rem;
`

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  z-index: 1;
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
  background-color: ${p => p.color ?? "#ececec"};
  transition: background-color 300ms ease-in-out;
`

const MoveWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  DetailContent,
  LoadingWrapper,
  AttributesTitle,
  AttributesWrapper,
}
