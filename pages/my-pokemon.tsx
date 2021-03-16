import Head from "next/head";
import { MyPokemon } from "@containers";

const MyPokemonPage = () => {
  return (
    <>
      <Head>
        <title>Catch `Em All! | My Pokemon</title>
        <meta
          name="description"
          content="See my pokemon! Come and catch the pokemon with me."
          key="description"
        />
      </Head>
      <MyPokemon />
    </>
  );
};

export default MyPokemonPage;
