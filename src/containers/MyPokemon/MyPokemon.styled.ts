import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokeWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 0.2rem;
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TMyPokemon = {
  Wrapper,
  PokeWrapper,
  LoadingWrapper,
};
