import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const shakeKeyframe = keyframes`
  0 { transform: translateX(-50%) rotate(0); }
  20% { transform: translateX(-50%) rotate(-5deg); }
  30% { transform: translateX(-50%) rotate(5deg); }
  50% { transform: translateX(-50%) rotate(-2.5deg); }
  60% { transform: translateX(-50%) rotate(2.5deg); }
  100% { transform: translateX(-50%) rotate(0); }
`

const Wrapper = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
  }
`

const DetailWrapper = styled.div`
  @media screen and (min-width: 600px) {
    max-width: 400px;
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
  margin-bottom: 5rem;
  background-color: #ececec;
  flex: 1;

  @media screen and (min-width: 600px) {
    margin-top: 0;
    border-radius: 6px;
  }
`

const AttributesTitle = styled.p`
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
  text-align: center;
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

const CatchWrapper = styled.div<{ hide?: boolean }>`
  position: fixed;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 88;
  cursor: pointer;
  transition: all 600ms ease;
  animation: ${shakeKeyframe} 800ms cubic-bezier(.36,.07,.19,.97) infinite;

  ${p => p.hide && css`
    pointer-events: none;
    opacity: 0;
  `}
  
  &:hover {
    transform: translateX(-50%) scale(.9);
    animation: none;
  }

  &:after {
    position: absolute;
    bottom: -.2rem;
    left: 50%;
    transform: translateX(-50%);
    content: "catch pokemon";
    background-color: #ffffff;
    padding: .2rem 1rem;
    border-radius: 1000px;
    font-size: 1.2em;
    line-height: .9;
    text-align: center;
  }

  img {
    width: 100px;
    height: 100px;
    padding: .5rem;
    background-color: #ffffff;
    border-radius: 50%;
    box-shadow: 0px 0px 50px 3px rgba(0,0,0,0.6);
  }
`

export const TPokemonDetail = {
  Name,
  Type,
  Move,
  Image,
  Wrapper,
  TypeWrapper,
  MoveWrapper,
  CatchWrapper,
  DetailWrapper,
  DetailContent,
  LoadingWrapper,
  AttributesTitle,
  AttributesWrapper,
}
