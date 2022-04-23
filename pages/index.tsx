import type { GetStaticProps, NextPage } from "next";

import { Layout } from "components/layouts";
import pokemonApi from "api/pokemonApi";
import { PokemonListResponse } from "interfaces/pokemonInterfaces";

const HomePage: NextPage = (props) => {
  console.log(props);
  return (
    <Layout title="Pokémon primera generación">
      <ul>
        <li>Pokemin 1</li>
      </ul>
    </Layout>
  );
};

// Se ejecuta en el lado del servidor y solo se ejecuta en build time
export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokemonApi.get<PokemonListResponse>(
    "/pokemon?limit=151"
  );

  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default HomePage;
