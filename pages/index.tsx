import type { GetStaticProps, NextPage } from "next";

import { Layout } from "components/layouts";
import pokemonApi from "api/pokemonApi";
import { PokemonData, PokemonListResponse } from "interfaces/pokemonInterfaces";
import Image from "next/image";

interface Props {
  pokemons: PokemonData[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokémon primera generación">
      {pokemons.map((pokemon) => (
        <ul key={pokemon.id}>
          <h1>{pokemon.name}</h1>
          <Image
            src={pokemon.img}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </ul>
      ))}
    </Layout>
  );
};

// Se ejecuta en el lado del servidor y solo se ejecuta en build time
export const getStaticProps: GetStaticProps = async (context) => {
  const { data: pokemons } = await pokemonApi.get<PokemonListResponse>(
    "/pokemon?limit=151"
  );

  let pokemonsData: PokemonData[] = pokemons.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        i + 1
      }.png`,
    };
  });

  return {
    props: {
      pokemons: pokemonsData,
    },
  };
};

export default HomePage;
