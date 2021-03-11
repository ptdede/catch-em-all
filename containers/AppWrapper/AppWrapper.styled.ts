import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;

  &:before {
    position: fixed;
    display: block;
    content: "";
    width: 100%;
    height: 160px;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 72%);
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
`

export const AppWrapperElement = {
  Wrapper,
  ImageWrapper
}
