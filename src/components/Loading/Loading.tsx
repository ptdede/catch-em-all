import { TLoading } from "./Loading.styled";

type ILoadingProps = {
  size?: "s" | "m";
  infinity?: boolean;
};

export const Loading = ({ size = "s", infinity = true }: ILoadingProps) => {
  return (
    <TLoading.Pokeball size={size} infinity={infinity}>
      <TLoading.PokeballButton size={size} infinity={infinity} />
    </TLoading.Pokeball>
  );
};
