import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;
  z-index: 1;

  &:before {
    position: fixed;
    display: block;
    content: "";
    width: 100%;
    height: 160px;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 72%);
    z-index: 88;
  }
`

const ImageWrapper = styled.div`
  position: fixed;
  width: 60%;
  height: 160px;
  max-width: 400px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 88;

  @media screen and (min-width: 600px) {
    width: 240px;
    height: 140px;
    top: 2rem;
    left: 4rem;
    transform: none;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ContentWrapper = styled.main`
  position: relative;
  padding-top: 10rem;
  padding-bottom: 6rem;
  min-height: 100%;

  @media screen and (min-width: 600px) {
    width: 100%;
    max-width: 1040px;
    margin: 0 auto;
    padding-top: 13rem;
  }
`

export const TAppWrapper = {
  Image,
  Wrapper,
  ImageWrapper,
  ContentWrapper
}
