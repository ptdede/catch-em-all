import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrapper = styled.nav<{ hidden: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  z-index: 87;
  background-color: #ffffff;
  width: 100%;
  border-top: solid 2px #ececec;
  transform: none;
  transition: transform 600ms ease-in-out;

  ${(p) =>
    p.hidden &&
    css`
      transform: translateY(10rem);
    `}
`;

const Item = styled.a<{ active?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  cursor: pointer;
  filter: grayscale(100%);
  transition: all 400ms ease;
  opacity: 0.7;

  &:hover {
    filter: none;
  }

  ${(p) =>
    p.active &&
    css`
      filter: none;
      opacity: 1;
    `}
`;

const Image = styled.img`
  width: 35px;
  margin-bottom: 0.3rem;
`;

export const TNavigationBar = {
  Item,
  Image,
  Wrapper,
};
