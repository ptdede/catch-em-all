import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.2em;
  font-weight: 300;
  margin-top: 1rem;

  @media screen and (min-width: 600px) {
    font-size: 2em;
  }
`;

const Image = styled.img`
  width: 200px;
`;

export const TNoPokemon = {
  Title,
  Image,
  Wrapper,
};
